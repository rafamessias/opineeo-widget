# Architecture Overview

## Component Structure

The Opineeo Widget package is structured as a **React wrapper** around the **minified Opineeo web component**.

### Core Components

```
opineeo-widget/
├── src/
│   ├── components/
│   │   ├── OpineeoWidget.tsx          # React wrapper component
│   │   ├── opineeo-0.0.1.min.js       # Minified web component (vanilla JS)
│   │   ├── opineeo-0.0.1.min.d.ts     # TypeScript declarations for web component
│   │   └── opineeo-0.0.1.min.js.d.ts  # Module declaration
│   ├── types/
│   │   └── index.ts                    # TypeScript interfaces and types
│   ├── styles/
│   │   └── index.css                   # Additional styling (Tailwind)
│   └── index.ts                        # Main export
```

## How It Works

### 1. Web Component (`opineeo-0.0.1.min.js`)

The core functionality is provided by a vanilla JavaScript web component that:
- Renders the survey widget UI
- Handles user interactions
- Communicates with the Opineeo API
- Manages survey state and responses
- Provides two APIs:
  - `window.initSurveyWidget(config)` - Programmatic API
  - `<opineeo-survey>` - Web component/custom element

### 2. React Wrapper (`OpineeoWidget.tsx`)

The React component wraps the web component to provide:
- React-friendly API (props instead of config objects)
- TypeScript support with full type definitions
- React lifecycle integration
- Declarative positioning and styling
- Event callbacks that work with React patterns

### 3. Data Flow

```
User Props → React Wrapper → Web Component → Opineeo API
                ↓                    ↓
            Positioning         Survey Data
            Styling             User Responses
            Callbacks
```

## Key Features

### Initialization

When the `OpineeoWidget` component mounts:

1. The minified web component script is imported and executed
2. React creates a container div with a unique ID
3. `window.initSurveyWidget()` is called with configuration
4. The widget mounts to the specified container
5. Custom CSS is injected for styling

### Configuration Mapping

React props are mapped to web component config:

| React Prop | Web Component Config | Description |
|------------|---------------------|-------------|
| `apiKey` | `token` | API authentication token |
| `surveyId` | `surveyId` | Survey identifier |
| `primaryColor` | `customCSS` | Injected as CSS variables |
| `userId` | `userId` | User identifier |
| `extraInfo` | `extraInfo` | Additional metadata |
| `autoClose` | `autoClose` | Auto-close timing |
| `branding` | `branding` | Show/hide branding |
| `onSubmit` | `onComplete` | Submission callback |
| `onClose` | `onClose` | Close callback |
| `onOpen` | (triggered internally) | Open callback |

### Positioning

Positioning is handled by the React wrapper using CSS:

```typescript
position: 'fixed',
zIndex: 9999,
bottom/top: '1.5rem',
left/right: '1.5rem'
```

The web component itself is position-agnostic and renders within its container.

### Styling

Styling is applied in layers:

1. **Base styles** - Injected by web component (`opineeo-0.0.1.min.js`)
2. **Tailwind utilities** - From `src/styles/index.css`
3. **Custom CSS** - Passed via `customCSS` config
4. **CSS Variables** - `--primary`, `--primary-foreground`

## Build Process

### Development

```bash
npm run dev
```

Vite dev server runs with:
- Hot module replacement
- TypeScript compilation
- Tailwind processing
- Example app at `localhost:5173`

### Production Build

```bash
npm run build
```

Outputs:
- `dist/opineeo-widget.js` - ESM bundle
- `dist/opineeo-widget.umd.cjs` - UMD bundle
- `dist/style.css` - Compiled styles
- `dist/index.d.ts` - Type definitions

The minified web component is bundled into the output.

### Widget Minification

```bash
npm run build-widget
```

Uses Terser to minify `survey-render/opineeo-0.0.1.js` → `src/components/opineeo-0.0.1.min.js`

## Usage Patterns

### Basic Usage

```tsx
import { OpineeoWidget } from 'opineeo-widget';
import 'opineeo-widget/dist/style.css';

<OpineeoWidget 
  apiKey="your-key"
  surveyId="survey-id"
/>
```

### Advanced Usage

```tsx
<OpineeoWidget
  apiKey="your-key"
  surveyId="survey-id"
  position="bottom-left"
  primaryColor="#8B5CF6"
  userId="user-123"
  autoClose={3000}
  onSubmit={(data) => {
    console.log('Survey submitted:', data);
    analytics.track('survey_completed', data);
  }}
  onClose={() => {
    console.log('Widget closed');
  }}
/>
```

### Type Safety

```tsx
import type { OpineeoWidgetProps, SurveySubmission } from 'opineeo-widget';

const props: OpineeoWidgetProps = {
  apiKey: 'key',
  surveyId: 'id',
  onSubmit: (data: SurveySubmission) => {
    // data is fully typed
    console.log(data.responses);
  },
};
```

## Benefits of This Architecture

### ✅ Separation of Concerns
- Core widget logic in vanilla JS (web component)
- React integration layer separate
- Easy to create wrappers for other frameworks (Vue, Angular, etc.)

### ✅ Performance
- Web component is highly optimized and minified
- React wrapper has minimal overhead
- No unnecessary re-renders

### ✅ Type Safety
- Full TypeScript support
- IntelliSense in IDEs
- Compile-time error checking

### ✅ Flexibility
- Can be used directly as web component
- React wrapper adds convenience
- Easy to extend with new features

### ✅ Bundle Size
- Single minified web component file
- Shared across all instances
- Tree-shakeable exports

## Maintenance

### Updating the Web Component

1. Edit `survey-render/opineeo-0.0.1.js`
2. Run `npm run build-widget` to minify
3. Update `opineeo-0.0.1.min.d.ts` if API changes
4. Test with example app

### Updating the React Wrapper

1. Edit `src/components/OpineeoWidget.tsx`
2. Update types in `src/types/index.ts` if needed
3. Run `npm run build` to compile
4. Test with example app

### Publishing Updates

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Run `npm run build`
4. Run `npm publish`

## Troubleshooting

### Web Component Not Loading

- Check that `opineeo-0.0.1.min.js` is in `src/components/`
- Verify import statement in `OpineeoWidget.tsx`
- Check browser console for errors

### TypeScript Errors

- Ensure `.d.ts` files are present
- Check `tsconfig.json` includes `src/**/*`
- Restart TypeScript server in IDE

### Styling Issues

- Verify `style.css` is imported in consuming app
- Check CSS variable overrides
- Inspect element to see applied styles

## Future Enhancements

- [ ] Add trigger button customization to web component
- [ ] Support for multiple themes
- [ ] Internationalization (i18n)
- [ ] Analytics integration
- [ ] A/B testing support
- [ ] Survey templates
- [ ] Custom question types

---

**Questions?** Contact support@opineeo.com

