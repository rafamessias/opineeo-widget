# Opineeo Widget

[![npm version](https://img.shields.io/npm/v/opineeo-widget.svg)](https://www.npmjs.com/package/opineeo-widget)
[![License](https://img.shields.io/badge/license-Proprietary-blue.svg)](LICENSE.txt)

The simplest survey widget for Devs and Founders. Collect user feedback seamlessly with a beautiful, customizable React component that wraps the Opineeo web component.

## Features

✨ **Easy Integration** - Add to any React app in minutes  
🎨 **Fully Customizable** - Match your brand colors and style with CSS variables  
📱 **Mobile First** - Responsive design for all devices  
📍 **Flexible Positioning** - Inline embedded or fixed corner positions (top-right, bottom-left, etc.)  
🔒 **TypeScript** - Full type safety included  
♿ **Accessible** - ARIA compliant with keyboard navigation  
🪶 **Lightweight** - Minimal bundle size impact  
🎯 **Event Callbacks** - Track open, close, and submit events  

## Installation

```bash
npm install opineeo-widget
```

or

```bash
yarn add opineeo-widget
```

or

```bash
pnpm add opineeo-widget
```

## Quick Start

```tsx
import { OpineeoWidget } from 'opineeo-widget';

function App() {
  return (
    <div>
      <h1>Your App</h1>
      
      {/* Inline placement */}
      <OpineeoWidget
        token="your-api-key-here"
        surveyId="your-survey-id"
        position="inline"
        customCSS=".sv { --primary: #3B82F6; }"
      />
      
      {/* Or use fixed corner position */}
      <OpineeoWidget
        token="your-api-key-here"
        surveyId="your-survey-id"
        position="bottom-right"
        feedbackLabel="Give Feedback"
      />
    </div>
  );
}

export default App;
```

> **Note**: Get your API token and survey ID from [Opineeo Dashboard](https://app.opineeo.com/).

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `token` | `string` | **required** | Your Opineeo API token from [opineeo.com](https://app.opineeo.com) |
| `surveyId` | `string` | `undefined` | Specific survey ID to display |
| `customCSS` | `string` | `undefined` | Custom CSS to style the widget (e.g., CSS variables) |
| `hidden` | `boolean` | `false` | Hide the widget initially |
| `className` | `string` | `''` | Custom CSS class for the widget container |
| `userId` | `string` | `undefined` | User ID to associate with the response |
| `extraInfo` | `string` | `undefined` | Extra information to include with the response |
| `autoClose` | `number` | `0` | Auto-close delay in milliseconds after submission (0 = no auto-close) |
| `position` | `'inline' \| 'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'inline'` | Position of the widget on screen |
| `feedbackLabel` | `string` | `'Give Feedback'` | Label for the feedback button (only used when position is not 'inline') |
| `onOpen` | `(containerId: string) => void` | `undefined` | Callback when widget is opened (receives container ID) |
| `onClose` | `() => void` | `undefined` | Callback when widget is closed |
| `onSubmit` | `(data: any) => void` | `undefined` | Callback when survey is submitted |

## Examples

### Basic Usage (Inline)

```tsx
import { OpineeoWidget } from 'opineeo-widget';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <div className="survey-container">
        <OpineeoWidget token="your-api-token" surveyId="survey-id" />
      </div>
    </div>
  );
}
```

### Custom Styling with CSS Variables

```tsx
<OpineeoWidget
  token="your-api-token"
  surveyId="survey-id"
  customCSS={`
    .sv {
      --primary: #8B5CF6;
      --primary-foreground: #ffffff;
      --border-radius: 12px;
    }
  `}
/>
```

### With Event Handlers

```tsx
function App() {
  const handleOpen = (containerId: string) => {
    console.log('Widget opened with container:', containerId);
  };

  const handleClose = () => {
    console.log('Widget closed');
  };

  const handleSubmit = (data: any) => {
    console.log('Feedback submitted:', data);
    // Send to your analytics
    analytics.track('survey_completed', data);
  };

  return (
    <OpineeoWidget
      token="your-api-token"
      surveyId="survey-id"
      onOpen={handleOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
    />
  );
}
```

### Controlled Visibility

```tsx
function App() {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    // Show widget after 5 seconds
    const timer = setTimeout(() => setShowWidget(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <OpineeoWidget
      token="your-api-token"
      surveyId="survey-id"
      hidden={!showWidget}
    />
  );
}
```

### Manual Widget Control (Reset/Remount)

```tsx
function App() {
  const [showWidget, setShowWidget] = useState(true);

  const handleReset = () => {
    // Hide widget
    setShowWidget(false);
    // Remount after 100ms
    setTimeout(() => setShowWidget(true), 100);
  };

  return (
    <>
      <button onClick={handleReset}>Reset Survey</button>
      {showWidget && (
        <OpineeoWidget
          token="your-api-token"
          surveyId="survey-123"
        />
      )}
    </>
  );
}
```

## TypeScript

The package includes full TypeScript definitions. Import types as needed:

```tsx
import { OpineeoWidget, OpineeoWidgetProps, WidgetPosition } from 'opineeo-widget';

const MyComponent: React.FC = () => {
  const position: WidgetPosition = 'bottom-right';
  
  const widgetProps: OpineeoWidgetProps = {
    token: 'your-api-token',
    surveyId: 'survey-123',
    position: position,
    feedbackLabel: 'Feedback',
    customCSS: '.sv { --primary: #3B82F6; }',
    onSubmit: (data) => console.log(data),
  };

  return <OpineeoWidget {...widgetProps} />;
};
```

## Widget Positioning

The widget supports multiple positioning modes to fit your needs:

### Inline (Default)
The widget is embedded directly in your page where you place it:

```tsx
<div className="my-container">
  <h2>Please share your feedback</h2>
  <OpineeoWidget 
    token="your-token" 
    surveyId="survey-id"
    position="inline"
  />
</div>
```

### Fixed Corner Positions
Display the widget as a fixed button in any corner of the screen. Clicking the button opens the survey in a modal overlay:

```tsx
// Bottom-right corner (popular for feedback buttons)
<OpineeoWidget 
  token="your-token" 
  surveyId="survey-id"
  position="bottom-right"
  feedbackLabel="Share Feedback"
/>

// Bottom-left corner
<OpineeoWidget 
  token="your-token" 
  surveyId="survey-id"
  position="bottom-left"
  feedbackLabel="Give Feedback"
/>

// Top-right corner
<OpineeoWidget 
  token="your-token" 
  surveyId="survey-id"
  position="top-right"
  feedbackLabel="Help Us Improve"
/>

// Top-left corner
<OpineeoWidget 
  token="your-token" 
  surveyId="survey-id"
  position="top-left"
  feedbackLabel="Feedback"
/>
```

**Available positions:**
- `inline` - Embedded in page (default)
- `bottom-right` - Fixed button in bottom-right corner
- `bottom-left` - Fixed button in bottom-left corner
- `top-right` - Fixed button in top-right corner
- `top-left` - Fixed button in top-left corner

### Modal/Custom Container (Inline)
You can also wrap an inline widget in your own modal or custom container:

```tsx
<Modal isOpen={showSurvey}>
  <OpineeoWidget 
    token="your-token" 
    surveyId="survey-id" 
    position="inline"
  />
</Modal>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is licensed under a proprietary license. See [LICENSE.txt](LICENSE.txt) for details.

Copyright (c) 2025 OBRA GURU SERVIÇOS DIGITAIS LTDA. All rights reserved.

## Support

- 📧 Email: contact@opineeo.com
- 🌐 Website: [https://opineeo.com](https://opineeo.com)
- 🐛 Issues: [GitHub Issues](https://github.com/rafamessias/opineeo-widget/issues)

---

Made with ❤️ by [Rafael Messias](https://github.com/rafamessias)

