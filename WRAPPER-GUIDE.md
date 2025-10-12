# React Wrapper Guide

## Overview

The `OpineeoWidget` React component is a **wrapper** around the minified `opineeo-0.0.1.min.js` web component. This document explains how the wrapper works and how to use it.

## What Is a Wrapper?

A wrapper component provides a React-friendly API around existing JavaScript code. In this case:

- **Core**: `opineeo-0.0.1.min.js` (vanilla JavaScript web component)
- **Wrapper**: `OpineeoWidget.tsx` (React component that uses the core)

## Architecture

### The Web Component (Core)

Located at: `src/components/opineeo-0.0.1.min.js`

This is a self-contained, minified JavaScript file that:
- Contains all the survey UI and logic
- Works in any JavaScript environment
- Exposes `window.initSurveyWidget(config)` API
- Can be used standalone without React

### The React Wrapper

Located at: `src/components/OpineeoWidget.tsx`

This React component:
- Imports the minified web component
- Converts React props to web component config
- Manages component lifecycle
- Handles positioning via CSS
- Provides TypeScript types

## How It Works

### 1. Import

```tsx
import './opineeo-0.0.1.min.js';
```

This line executes the web component code and makes `window.initSurveyWidget` available.

### 2. Initialization

```tsx
const widget = window.initSurveyWidget({
  token: apiKey,
  surveyId: surveyId,
  customCSS: customCSS,
  onComplete: (data) => onSubmit?.(data),
  onClose: () => onClose?.(),
});
```

The wrapper calls the web component's init function with configuration.

### 3. Mounting

```tsx
widget.mount(widgetIdRef.current);
```

The widget renders into a container div managed by React.

### 4. Cleanup

```tsx
return () => {
  widget?.destroy?.();
};
```

React's useEffect cleanup ensures proper unmounting.

## Props to Config Mapping

The wrapper translates React props into web component configuration:

```tsx
// React Props
<OpineeoWidget
  apiKey="key"
  surveyId="id"
  primaryColor="#FF0000"
  onSubmit={(data) => {...}}
/>

// Becomes Web Component Config
{
  token: "key",
  surveyId: "id",
  customCSS: ".sv { --primary: #FF0000; }",
  onComplete: (data) => {...}
}
```

## Positioning Strategy

The web component doesn't handle positioning. The React wrapper does:

```tsx
style={{
  position: 'fixed',
  zIndex: 9999,
  bottom: '1.5rem',
  right: '1.5rem'
}}
```

This allows flexible positioning without modifying the core widget.

## Styling Strategy

### Web Component Styles

The web component includes its own styles:
- CSS class names (`.sv`, `.btn`, `.qt`, etc.)
- CSS variables (`--primary`, `--primary-foreground`)
- Animations and transitions

### Wrapper Styles

The wrapper adds:
- Tailwind utilities (via `src/styles/index.css`)
- Fixed positioning
- Container styling

### Custom Styles

Passed via `customCSS` prop:

```tsx
<OpineeoWidget
  apiKey="key"
  customCSS=".sv { border-radius: 20px; }"
/>
```

## Event Handling

The wrapper converts web component events to React callbacks:

| Web Component | React Prop | Description |
|---------------|------------|-------------|
| `onComplete` | `onSubmit` | Survey submission |
| `onClose` | `onClose` | Widget closed |
| (manual trigger) | `onOpen` | Widget opened |

## TypeScript Support

The wrapper provides full TypeScript support:

### Type Definitions

```tsx
// src/types/index.ts
export interface OpineeoWidgetProps {
  apiKey: string;
  surveyId?: string;
  // ... all props with descriptions
}
```

### Web Component Types

```tsx
// src/components/opineeo-0.0.1.min.d.ts
declare global {
  interface Window {
    initSurveyWidget: (config: SurveyWidgetConfig) => SurveyWidgetInstance;
  }
}
```

## Usage Examples

### Basic

```tsx
import { OpineeoWidget } from 'opineeo-widget';
import 'opineeo-widget/dist/style.css';

function App() {
  return (
    <OpineeoWidget
      apiKey="your-api-key"
      surveyId="survey-id"
    />
  );
}
```

### With Callbacks

```tsx
function App() {
  const handleSubmit = (data) => {
    console.log('Submitted:', data);
    // Send to analytics, database, etc.
  };

  return (
    <OpineeoWidget
      apiKey="your-api-key"
      surveyId="survey-id"
      onSubmit={handleSubmit}
      onClose={() => console.log('Closed')}
      onOpen={() => console.log('Opened')}
    />
  );
}
```

### Conditional Rendering

```tsx
function App() {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    // Show after 5 seconds
    setTimeout(() => setShowWidget(true), 5000);
  }, []);

  return (
    <OpineeoWidget
      apiKey="your-api-key"
      surveyId="survey-id"
      hidden={!showWidget}
    />
  );
}
```

### Custom Positioning

```tsx
<OpineeoWidget
  apiKey="your-api-key"
  surveyId="survey-id"
  position="top-left"
  primaryColor="#8B5CF6"
/>
```

## Advantages of This Approach

### ✅ Framework Agnostic Core
The web component can be used in:
- Vanilla JavaScript
- React (via this wrapper)
- Vue (future wrapper)
- Angular (future wrapper)
- Any other framework

### ✅ Single Source of Truth
- One minified file contains all logic
- Updates to core automatically benefit all wrappers
- Consistent behavior across frameworks

### ✅ Optimal Bundle Size
- Core is minified and optimized
- Wrapper adds minimal overhead
- No code duplication

### ✅ Easy Maintenance
- Update web component independently
- Wrapper only handles React integration
- Clear separation of concerns

### ✅ Progressive Enhancement
- Start with basic usage
- Add callbacks and customization as needed
- TypeScript provides guidance

## Development Workflow

### Modifying the Web Component

1. Edit `survey-render/opineeo-0.0.1.js` (source)
2. Run `npm run build-widget` to minify
3. Test in example app
4. Commit both source and minified versions

### Modifying the Wrapper

1. Edit `src/components/OpineeoWidget.tsx`
2. Update types if API changes
3. Run `npm run dev` to test
4. Run `npm run build` before publishing

## Common Issues

### Widget Not Appearing

**Problem**: Widget doesn't show up
**Solution**: Check that:
- `apiKey` and `surveyId` are provided
- `hidden` prop is not true
- Container is rendered in DOM
- Browser console for errors

### TypeScript Errors

**Problem**: TS can't find module
**Solution**: Ensure:
- `.d.ts` files are present
- Import path is correct
- TypeScript version is compatible

### Styling Conflicts

**Problem**: Styles look wrong
**Solution**: Check:
- `style.css` is imported
- No conflicting global styles
- CSS variables are set correctly
- Primary color format is valid hex

### Event Callbacks Not Firing

**Problem**: `onSubmit` or `onClose` not called
**Solution**: Verify:
- Callbacks are defined correctly
- Web component is initialized
- No JavaScript errors
- Widget completes successfully

## Best Practices

### 1. Always Import Styles

```tsx
import 'opineeo-widget/dist/style.css';
```

### 2. Use TypeScript

```tsx
import type { OpineeoWidgetProps } from 'opineeo-widget';
```

### 3. Handle Callbacks

```tsx
<OpineeoWidget
  onSubmit={(data) => {
    // Always handle submission
    saveToBackend(data);
  }}
/>
```

### 4. Test Different Positions

```tsx
// Ensure widget works in all positions
['bottom-right', 'bottom-left', 'top-right', 'top-left'].forEach(pos => {
  // Test each
});
```

### 5. Customize Colors

```tsx
<OpineeoWidget
  primaryColor={theme.primary} // Match your brand
/>
```

## Advanced Usage

### Dynamic Configuration

```tsx
const [config, setConfig] = useState({
  apiKey: 'key',
  surveyId: 'id1'
});

// Widget re-initializes when config changes
<OpineeoWidget {...config} />
```

### Multiple Widgets

```tsx
// Different surveys in different positions
<>
  <OpineeoWidget
    apiKey="key"
    surveyId="nps-survey"
    position="bottom-right"
  />
  <OpineeoWidget
    apiKey="key"
    surveyId="feedback-survey"
    position="bottom-left"
  />
</>
```

### Integration with State Management

```tsx
const dispatch = useDispatch();

<OpineeoWidget
  apiKey="key"
  surveyId="id"
  onSubmit={(data) => {
    dispatch(submitSurvey(data));
  }}
/>
```

## Summary

The `OpineeoWidget` is a **thin wrapper** that:
- Makes the web component easy to use in React
- Provides TypeScript support
- Handles positioning and styling
- Converts events to React callbacks
- Manages lifecycle automatically

The actual widget functionality lives in `opineeo-0.0.1.min.js` - a standalone, framework-agnostic component that can be used anywhere.

---

**Questions?** See [ARCHITECTURE.md](ARCHITECTURE.md) or contact support@opineeo.com

