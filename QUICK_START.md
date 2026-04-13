# Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Install Dependencies (2 min)

```bash
npm install
```

### Step 2: Start Development Server (1 min)

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Step 3: Explore the App (2 min)

- Navigate through pages
- Test mobile responsiveness (F12 → Device toolbar)
- Check accessibility (Tab navigation)

---

## 📁 Key Files to Know

### Want to modify styles?

→ `src/styles/index.css` (design tokens)
→ Component `.module.css` files

### Want to add a new page?

1. Create `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`

### Want to modify components?

→ `src/components/common/` (reusable)
→ `src/components/layout/` (layout)

---

## 🎨 Design System Quick Reference

### Colors

```css
var(--color-primary)      /* #2563eb - Blue */
var(--color-secondary)    /* #7c3aed - Purple */
var(--color-success)      /* #10b981 - Green */
var(--color-error)        /* #ef4444 - Red */
```

### Spacing

```css
var(--space-2)   /* 8px */
var(--space-4)   /* 16px */
var(--space-6)   /* 32px */
```

### Breakpoints

```css
/* Mobile: default (320px+) */
@media (min-width: 768px) {
  /* Tablet */
}
@media (min-width: 1024px) {
  /* Desktop */
}
```

---

## 🛠️ Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Check for errors
npm run format       # Format code

# Testing
npm run test         # Run tests
```

---

## 📝 Making Your First Change

### Example: Change Primary Color

1. Open `src/styles/index.css`
2. Find `--color-primary: #2563eb;`
3. Change to your color: `--color-primary: #your-color;`
4. Save and see instant update!

### Example: Add New Component

1. Create `src/components/common/MyComponent.jsx`:

```jsx
import styles from './MyComponent.module.css';

const MyComponent = ({ children }) => {
  return <div className={styles.component}>{children}</div>;
};

export default MyComponent;
```

2. Create `src/components/common/MyComponent.module.css`:

```css
.component {
  padding: var(--space-4);
  background: var(--color-primary);
}
```

3. Use it:

```jsx
import MyComponent from './components/common/MyComponent';

<MyComponent>Hello!</MyComponent>;
```

---

## 🐛 Troubleshooting

### Port 3000 already in use?

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Module not found?

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Changes not showing?

- Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
- Clear cache and restart dev server

---

## 📚 Learn More

- [Full Setup Guide](SETUP_GUIDE.md)
- [Project Phases](PROJECT_PHASES.md)
- [Design System](docs/design-system.md)
- [Components](docs/components.md)
- [Git Workflow](GIT_WORKFLOW.md)

---

## ✅ Quick Checklist

Before submitting:

- [ ] All pages work correctly
- [ ] Responsive on mobile (test with F12)
- [ ] No console errors
- [ ] Code is formatted (`npm run format`)
- [ ] No lint errors (`npm run lint`)
- [ ] README is updated
- [ ] Screenshots added
- [ ] Git history is clean

---

## 🎯 Focus Areas

### Mobile-First

- Test on 320px width first
- Touch targets 44x44px minimum
- Readable text without zoom

### Accessibility

- Tab through all interactive elements
- Check focus indicators
- Test with screen reader

### Performance

- Keep bundle size small
- Lazy load images
- Optimize assets

---

## 💡 Pro Tips

1. **Use the design tokens** - Don't hardcode colors/spacing
2. **Mobile first** - Design for small screens first
3. **Test early** - Check mobile/accessibility as you build
4. **Commit often** - Small, focused commits
5. **Document decisions** - Update DEVELOPMENT_LOG.md

---

## 🚀 You're Ready!

Everything is set up and ready to go. Start building, and refer to the detailed documentation when needed.

**Happy coding!** 🎉
