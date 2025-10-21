import React, { useEffect, useRef } from 'react';
import { OpineeoWidgetProps } from '../types';
// Import the widget script as raw text - this will be bundled with the package
import WIDGET_SCRIPT from './opineeo.min.js?raw';
// Load the widget script once globally
let scriptLoaded = false;
let loadPromise: Promise<void> | null = null;

const loadWidgetScript = (): Promise<void> => {
    if (scriptLoaded) {
        return Promise.resolve();
    }

    if (loadPromise) {
        return loadPromise;
    }

    loadPromise = new Promise((resolve) => {
        if (typeof window === 'undefined') {
            resolve();
            return;
        }

        // Check if already loaded
        if ((window as any).initSurveyWidget) {
            scriptLoaded = true;
            resolve();
            return;
        }

        // Inject the script from imported file
        const script = document.createElement('script');
        script.textContent = WIDGET_SCRIPT;
        script.id = 'opineeo-widget-script';

        document.head.appendChild(script);

        scriptLoaded = true;
        resolve();
    });

    return loadPromise;
};

const OpineeoWidget: React.FC<OpineeoWidgetProps> = ({
    token,
    surveyId,
    customCSS,
    hidden = false,
    className = '',
    userId,
    extraInfo,
    autoClose,
    position = 'inline',
    feedbackLabel = 'Give Feedback',
    onOpen,
    onClose,
    onSubmit,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetRef = useRef<any>(null);

    useEffect(() => {
        if (hidden) return;

        let isMounted = true;

        const initializeWidget = async () => {
            await loadWidgetScript();

            if (!isMounted || !containerRef.current || !token) return;

            // Create container div
            const containerId = `opineeo-${Date.now()}-${Math.random().toString(36).slice(2)}`;
            const containerDiv = document.createElement('div');
            containerDiv.id = containerId;
            containerRef.current.appendChild(containerDiv);

            // Initialize widget
            const widget = (window as any).initSurveyWidget({
                token: token,
                surveyId: surveyId,
                userId: userId,
                extraInfo: extraInfo,
                autoClose: autoClose,
                customCSS: customCSS,
                position: position,
                feedbackLabel: feedbackLabel,
                onComplete: (data: any) => {
                    if (isMounted) {
                        onSubmit?.(data);
                    }
                },
                onClose: () => {
                    if (isMounted) {
                        onClose?.();
                    }
                },
            });

            widget.mount(containerId);
            widgetRef.current = widget;

            // Call onOpen only once
            if (isMounted) {
                onOpen?.(containerId);
            }
        };

        initializeWidget();

        return () => {
            isMounted = false;
            if (widgetRef.current) {
                widgetRef.current?.destroy?.();
                widgetRef.current = null;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, surveyId, customCSS, hidden, userId, extraInfo, autoClose, position, feedbackLabel]);

    if (hidden) return null;

    return (
        <div
            ref={containerRef}
            className={`opineeo-widget-wrapper ${className}`}
        />
    );
};

export default OpineeoWidget;