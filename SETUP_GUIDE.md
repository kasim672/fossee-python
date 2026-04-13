# Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** 9.x or higher (comes with Node.js)
- **Git** for version control

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/FOSSEE/workshop_booking.git
cd workshop_booking
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 18
- React Router v6
- Vite (build tool)
- ESLint & Prettier
- Testing libraries

### 3. Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

Production files will be in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run unit tests with Vitest |
| `npm run lighthouse` | Run Lighthouse performance audit |

## Project Structure

```
workshop_booking/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── common/      # Reusable components
│   │   ├── layout/      # Layout components
│   │   └── features/    # Feature-specific components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── context/         # React Context providers
│   ├── utils/           # Helper functions
│   ├── styles/          # Global styles
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── docs/                # Documentation
├── tests/               # Test files
└── package.json         # Dependencies and scripts
```

## Development Workflow

### 1. Create a New Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes

Edit files in the `src/` directory. The dev server will hot-reload your changes.

### 3. Test Your Changes

```bash
# Run linter
npm run lint

# Run tests
npm run test

# Check accessibility
# Use browser extensions: axe DevTools, WAVE
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature"
```

Use conventional commit messages:
- `feat:` New feature
- `fix:` Bug fix
- `style:` Styling changes
- `refactor:` Code refactoring
- `docs:` Documentation
- `test:` Tests
- `perf:` Performance improvements

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:
```bash
# Kill the process using port 3000
# On Linux/Mac:
lsof -ti:3000 | xargs kill -9

# Or change the port in vite.config.js
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=FOSSEE Workshop Booking
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari iOS 12+
- Chrome Android (last 2 versions)

## Performance Tips

1. **Code Splitting**: Pages are lazy-loaded automatically
2. **Image Optimization**: Use WebP format with fallbacks
3. **Bundle Analysis**: Run `npm run build` and check bundle size
4. **Lighthouse**: Run audits regularly to maintain performance

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` directory to Netlify

### GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/workshop_booking/',
  // ... rest of config
});
```

2. Build and deploy:
```bash
npm run build
# Deploy dist/ to gh-pages branch
```

## Getting Help

- Check the [documentation](docs/)
- Review [component examples](docs/components.md)
- Check [accessibility guide](docs/accessibility.md)
- Review [design system](docs/design-system.md)

## Next Steps

1. Explore the codebase
2. Review the design system
3. Check out the component library
4. Read the accessibility guide
5. Start building!
