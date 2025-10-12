import React, { useEffect, useRef } from 'react';
import { OpineeoWidgetProps } from '../types';

// Import the minified web component
import './opineeo-0.0.1.min.js';

const OpineeoWidget: React.FC<OpineeoWidgetProps> = ({
    apiKey,
    surveyId,
    position = 'bottom-right',
    primaryColor = '#3B82F6',
    triggerText,
    hidden = false,
    className = '',
    onOpen,
    onClose,
    onSubmit,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string>(`opineeo-widget-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`);

    useEffect(() => {
        if (!apiKey) {
            console.warn('Opineeo Widget: apiKey is required for full functionality');
        }
    }, [apiKey]);

    useEffect(() => {
        // Create custom CSS for positioning and styling
        const customCSS = `
            .sv {
                --primary: ${primaryColor};
                --primary-foreground: #ffffff;
            }
        `;

        // Initialize the widget using the web component API
        if (containerRef.current && typeof window !== 'undefined') {
            const widgetContainer = containerRef.current.querySelector(`#${widgetIdRef.current}`);

            if (widgetContainer && (window as any).initSurveyWidget) {
                const widget = (window as any).initSurveyWidget({
                    token: apiKey,
                    surveyId: surveyId,
                    customCSS: customCSS,
                    onComplete: (data: unknown) => {
                        onSubmit?.(data);
                    },
                    onClose: () => {
                        onClose?.();
                    },
                });

                widget.mount(widgetIdRef.current);

                // Call onOpen if provided
                if (onOpen) {
                    setTimeout(() => onOpen(), 100);
                }

                return () => {
                    widget?.destroy?.();
                };
            }
        }
    }, [apiKey, surveyId, primaryColor, onSubmit, onClose, onOpen]);

    const getPositionStyles = (): React.CSSProperties => {
        const baseStyles: React.CSSProperties = {
            position: 'fixed',
            zIndex: 9999,
        };

        switch (position) {
            case 'bottom-left':
                return { ...baseStyles, bottom: '1.5rem', left: '1.5rem' };
            case 'top-right':
                return { ...baseStyles, top: '1.5rem', right: '1.5rem' };
            case 'top-left':
                return { ...baseStyles, top: '1.5rem', left: '1.5rem' };
            case 'bottom-right':
            default:
                return { ...baseStyles, bottom: '1.5rem', right: '1.5rem' };
        }
    };

    if (hidden) return null;

    return (
        <div
            ref={containerRef}
            className={`opineeo-widget-wrapper ${className}`}
            style={getPositionStyles()}
        >
            <div id={widgetIdRef.current} />
        </div>
    );
};

export default OpineeoWidget;
