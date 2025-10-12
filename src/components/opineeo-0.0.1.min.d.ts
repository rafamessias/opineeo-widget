// Type declaration for the Opineeo web component

declare global {
    interface Window {
        initSurveyWidget: (config: SurveyWidgetConfig) => SurveyWidgetInstance;
    }
}

interface SurveyWidgetConfig {
    token?: string;
    surveyId?: string;
    userId?: string;
    extraInfo?: string;
    autoClose?: number;
    branding?: boolean;
    customCSS?: string;
    surveyData?: any;
    onComplete?: (data: any) => void;
    onClose?: () => void;
}

interface SurveyWidgetInstance {
    mount: (containerId: string) => Promise<void>;
    destroy: () => void;
}

export { };

