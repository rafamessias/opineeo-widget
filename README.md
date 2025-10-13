# Opineeo Widget

[![npm version](https://img.shields.io/npm/v/opineeo-widget.svg)](https://www.npmjs.com/package/opineeo-widget)
[![License](https://img.shields.io/badge/license-Proprietary-blue.svg)](LICENSE.txt)

The simplest survey widget for Devs and Founders. Collect user feedback seamlessly with a beautiful, customizable React component that wraps the Opineeo web component.

## Features

✨ **Easy Integration** - Add to any React app in minutes  
🎨 **Fully Customizable** - Match your brand colors and style with CSS variables  
📱 **Mobile First** - Responsive design for all devices  
📍 **Flexible Positioning** - Inline, fixed, or custom container placement  
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
        customCSS=".sv { --primary: #3B82F6; --primary-foreground: #ffffff; }"
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
| `style` | `React.CSSProperties` | `undefined` | Inline styles for positioning (e.g., fixed positioning) |
| `userId` | `string` | `undefined` | User ID to associate with the response |
| `extraInfo` | `string` | `undefined` | Extra information to include with the response |
| `autoClose` | `number` | `0` | Auto-close delay in milliseconds after submission (0 = no auto-close) |
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
        <OpineeoWidget token="your-api-token" />
      </div>
    </div>
  );
}
```

### Custom Styling with CSS Variables

```tsx
<OpineeoWidget
  token="your-api-token"
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
import { OpineeoWidget, OpineeoWidgetProps } from 'opineeo-widget';

const MyComponent: React.FC = () => {
  const widgetProps: OpineeoWidgetProps = {
    token: 'your-api-token',
    surveyId: 'survey-123',
    customCSS: '.sv { --primary: #3B82F6; }',
    onSubmit: (data) => console.log(data),
  };

  return <OpineeoWidget {...widgetProps} />;
};
```

## Widget Positioning

The widget is **flexible in positioning** - you control where it appears by how you use the component:

### Inline (In Page Flow)
Place the widget anywhere in your component tree. It will render inline within the page flow:

```tsx
<div className="my-container">
  <h2>Please share your feedback</h2>
  <OpineeoWidget token="your-token" />
</div>
```

### Modal/Custom Container
Wrap it in your own modal, dialog, or custom container:

```tsx
<Modal isOpen={showSurvey}>
  <OpineeoWidget token="your-token" />
</Modal>
```

## Development

### Prerequisites

- Node.js 16+
- npm, yarn, or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/rafamessias/opineeo-widget.git
cd opineeo-widget

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

### Project Structure

```
opineeo-widget/
├── src/
│   ├── components/
│   │   └── OpineeoWidget.tsx    # Main widget component (React wrapper)
│   ├── styles/
│   │   └── index.css            # Global styles
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   └── index.ts                 # Main entry point
├── public/
│   └── opineeo-0.0.1.min.js     # Minified Opineeo web component
├── example/
│   ├── App.tsx                  # Interactive demo application
│   ├── main.tsx                 # Demo entry point
│   └── index.css                # Demo styles with dark theme
├── dist/                        # Built files (generated)
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── package.json                 # Package configuration
```

## Building for Production

The package is built using Vite in library mode, producing:

- **ESM** (`dist/opineeo-widget.js`) - For modern bundlers
- **UMD** (`dist/opineeo-widget.umd.cjs`) - For legacy support
- **Types** (`dist/index.d.ts`) - TypeScript definitions

> **Note**: All widget styles come bundled with the minified Opineeo web component. No separate CSS import is needed.

## Publishing to NPM

```bash
# Build the package
npm run build

# Login to NPM (if not already logged in)
npm login

# Publish
npm publish
```

The `prepublishOnly` script ensures the package is built before publishing.

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

## Contributing

This is a proprietary project. External contributions are not accepted at this time.

---

Made with ❤️ by [Rafael Messias](https://github.com/rafamessias)

