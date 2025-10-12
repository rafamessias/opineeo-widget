export interface OpineeoWidgetProps {
    /**
     * Your Opineeo API key/token from https://opineeo.com
     */
    apiKey: string;

    /**
     * Survey ID to display
     */
    surveyId?: string;

    /**
     * Position of the widget on the screen
     * @default 'bottom-right'
     */
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

    /**
     * Primary color for the widget (hex color)
     * @default '#3B82F6'
     */
    primaryColor?: string;

    /**
     * Custom text for the trigger button (currently not used by web component)
     * @default 'Feedback'
     */
    triggerText?: string;

    /**
     * Hide the widget initially
     * @default false
     */
    hidden?: boolean;

    /**
     * Custom CSS class for the widget container
     */
    className?: string;

    /**
     * User ID to associate with the response
     */
    userId?: string;

    /**
     * Extra information to include with the response
     */
    extraInfo?: string;

    /**
     * Auto-close delay in milliseconds after submission
     * @default 0 (no auto-close)
     */
    autoClose?: number;

    /**
     * Show/hide Opineeo branding
     * @default false
     */
    branding?: boolean;

    /**
     * Callback when widget is opened
     */
    onOpen?: () => void;

    /**
     * Callback when widget is closed
     */
    onClose?: () => void;

    /**
     * Callback when survey is submitted
     */
    onSubmit?: (data: SurveySubmission) => void;
}

export interface SurveySubmission {
    responseToken?: string;
    surveyId?: string;
    userId?: string;
    extraInfo?: string;
    responses: SurveyResponse[];
}

export interface SurveyQuestion {
    id: string;
    type: 'rating' | 'text' | 'nps' | 'csat' | 'multiple-choice';
    question: string;
    options?: string[];
    required?: boolean;
}

export interface SurveyResponse {
    questionId: string;
    value: string | number;
}

