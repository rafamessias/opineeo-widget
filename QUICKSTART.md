# Quick Start Guide

## Getting Started in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required dependencies including React, TypeScript, Vite, and Tailwind CSS.

### 2. Run Development Server

```bash
npm run dev
```

This will start the development server with the interactive demo application at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

This will create the production-ready bundle in the `dist/` folder.

## What You Get

After scaffolding, your project includes:

### 📁 Project Structure

```
opineeo-widget/
├── src/                          # Source code
│   ├── components/
│   │   └── OpineeoWidget.tsx    # Main widget component
│   ├── styles/
│   │   └── index.css            # Styles with Tailwind
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   └── index.ts                 # Library entry point
├── example/                      # Demo application
│   ├── App.tsx                  # Interactive playground
│   └── main.tsx                 # Demo entry
├── dist/                         # Build output (after build)
├── package.json                 # NPM configuration
├── tsconfig.json                # TypeScript config
├── vite.config.ts               # Vite build config
├── tailwind.config.js           # Tailwind config
└── README.md                    # Documentation
```

### 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### 📦 Ready for NPM

The project is configured to publish to NPM with:

- ✅ ESM and UMD builds
- ✅ TypeScript definitions
- ✅ Proper package.json exports
- ✅ Source maps
- ✅ Tree-shakeable exports

### 🎨 Features Included

- React 18 with TypeScript
- Vite for blazing fast builds
- Tailwind CSS for styling
- Interactive demo application
- Full accessibility support
- Mobile-first responsive design
- Event callbacks (onOpen, onClose, onSubmit)
- Customizable colors and positioning

## Next Steps

1. **Customize the Widget** - Edit `src/components/OpineeoWidget.tsx`
2. **Add Your API** - Connect to your backend in the submit handler
3. **Test the Demo** - Try the interactive playground
4. **Build & Publish** - Run `npm run build` and `npm publish`

## Publishing to NPM

When ready to publish:

```bash
# 1. Update version in package.json
# 2. Build the package
npm run build

# 3. Login to NPM (first time only)
npm login

# 4. Publish
npm publish
```

## Need Help?

- 📖 Read the full [README.md](README.md)
- 🐛 Report issues on [GitHub](https://github.com/rafamessias/opineeo-widget/issues)
- 📧 Email: support@opineeo.com

---

Happy coding! 🚀

