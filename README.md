# Opineeo Widget

[![npm version](https://img.shields.io/npm/v/opineeo-widget.svg)](https://www.npmjs.com/package/opineeo-widget)
[![License](https://img.shields.io/badge/license-Proprietary-blue.svg)](LICENSE.txt)

The simplest survey widget for Devs and Founders. Collect user feedback seamlessly with a beautiful, customizable React component that wraps the Opineeo web component.

## Features

✨ **Easy Integration** - Add to any React app in minutes  
🎨 **Fully Customizable** - Match your brand colors and style  
📱 **Mobile First** - Responsive design for all devices  
🔒 **TypeScript** - Full type safety included  
♿ **Accessible** - ARIA compliant with keyboard navigation  
🪶 **Lightweight** - Minimal bundle size impact  

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
import 'opineeo-widget/dist/style.css';

function App() {
  return (
    <div>
      <h1>Your App</h1>
      
      <OpineeoWidget
        apiKey="your-api-key-here"
        position="bottom-right"
        primaryColor="#3B82F6"
      />
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiKey` | `string` | **required** | Your Opineeo API key from [opineeo.com](https://opineeo.com) |
| `surveyId` | `string` | `undefined` | Specific survey ID to display |
| `position` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left'` | `'bottom-right'` | Position of the widget on screen |
| `primaryColor` | `string` | `'#3B82F6'` | Primary color for the widget (hex color) |
| `triggerText` | `string` | `'Feedback'` | Text displayed on the trigger button (not yet implemented in web component) |
| `userId` | `string` | `undefined` | User ID to associate with the response |
| `extraInfo` | `string` | `undefined` | Extra information to include with the response |
| `autoClose` | `number` | `0` | Auto-close delay in milliseconds after submission (0 = no auto-close) |
| `branding` | `boolean` | `false` | Show/hide Opineeo branding |
| `hidden` | `boolean` | `false` | Hide the widget initially |
| `className` | `string` | `''` | Custom CSS class for the widget container |
| `onOpen` | `() => void` | `undefined` | Callback when widget is opened |
| `onClose` | `() => void` | `undefined` | Callback when widget is closed |
| `onSubmit` | `(data: unknown) => void` | `undefined` | Callback when survey is submitted |

## Examples

### Basic Usage

```tsx
import { OpineeoWidget } from 'opineeo-widget';
import 'opineeo-widget/dist/style.css';

<OpineeoWidget apiKey="your-api-key" />
```

### Custom Positioning

```tsx
<OpineeoWidget
  apiKey="your-api-key"
  position="bottom-left"
/>
```

### Custom Colors

```tsx
<OpineeoWidget
  apiKey="your-api-key"
  primaryColor="#8B5CF6"
  triggerText="Give Feedback"
/>
```

### With Event Handlers

```tsx
<OpineeoWidget
  apiKey="your-api-key"
  onOpen={() => console.log('Widget opened')}
  onClose={() => console.log('Widget closed')}
  onSubmit={(data) => {
    console.log('Feedback submitted:', data);
    // Send to your analytics
  }}
/>
```

### Conditional Display

```tsx
const [showWidget, setShowWidget] = useState(false);

useEffect(() => {
  // Show widget after 5 seconds
  const timer = setTimeout(() => setShowWidget(true), 5000);
  return () => clearTimeout(timer);
}, []);

<OpineeoWidget
  apiKey="your-api-key"
  hidden={!showWidget}
/>
```

## TypeScript

The package includes full TypeScript definitions. Import types as needed:

```tsx
import { OpineeoWidget, OpineeoWidgetProps } from 'opineeo-widget';

const MyComponent: React.FC = () => {
  const widgetProps: OpineeoWidgetProps = {
    apiKey: 'your-api-key',
    position: 'bottom-right',
    primaryColor: '#3B82F6',
  };

  return <OpineeoWidget {...widgetProps} />;
};
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
│   │   └── OpineeoWidget.tsx    # Main widget component
│   ├── styles/
│   │   └── index.css            # Global styles
│   ├── types/
│   │   └── index.ts             # TypeScript types
│   └── index.ts                 # Main entry point
├── example/
│   ├── App.tsx                  # Demo application
│   └── main.tsx                 # Demo entry point
├── dist/                        # Built files (generated)
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Package configuration
```

## Building for Production

The package is built using Vite in library mode, producing:

- **ESM** (`dist/opineeo-widget.js`) - For modern bundlers
- **UMD** (`dist/opineeo-widget.umd.cjs`) - For legacy support
- **Types** (`dist/index.d.ts`) - TypeScript definitions
- **Styles** (`dist/style.css`) - Component styles

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

- 📧 Email: support@opineeo.com
- 🌐 Website: [https://opineeo.com](https://opineeo.com)
- 🐛 Issues: [GitHub Issues](https://github.com/rafamessias/opineeo-widget/issues)

## Contributing

This is a proprietary project. External contributions are not accepted at this time.

---

Made with ❤️ by [Rafael Messias](https://github.com/rafamessias)

