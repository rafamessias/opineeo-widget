export type WidgetPosition = 'inline' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

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
     * Position of the widget on the screen
     * - inline: Embedded in the page (default)
     * - top-right: Fixed position in top-right corner
     * - top-left: Fixed position in top-left corner
     * - bottom-right: Fixed position in bottom-right corner
     * - bottom-left: Fixed position in bottom-left corner
     * @default 'inline'
     */
    position?: WidgetPosition;

    /**
     * Label for the feedback button (only used when position is not 'inline')
     * @default 'Give Feedback'
     */
    feedbackLabel?: string;

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