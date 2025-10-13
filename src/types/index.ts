export interface OpineeoWidgetProps {
    /**
     * Your Opineeo API key/token from https://app.opineeo.com
     */
    token: string;

    /**
     * Survey ID to display
     */
    surveyId?: string;

    /**
     * Custom CSS for the widget
     */
    customCSS?: string;

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
     * Callback when widget is opened
     */
    onOpen?: (containerId: string) => void;

    /**
     * Callback when widget is closed
     */
    onClose?: () => void;

    /**
     * Callback when survey is submitted
     */
    onSubmit?: (data: any) => void;
}