# Design System Documentation

## Overview
This document outlines the design system used in the FOSSEE Workshop Booking redesign.

## Design Principles

### 1. Mobile-First
All components are designed for mobile screens first (320px+), then enhanced for larger displays.

### 2. Accessibility
- WCAG 2.1 Level AA compliance
- Minimum 4.5:1 contrast ratio for text
- Touch targets minimum 44x44px (48px on mobile)
- Full keyboard navigation support
- Screen reader optimized

### 3. Performance
- Minimal CSS and JavaScript
- CSS Modules for scoped styling
- No heavy dependencies
- Optimized for 3G networks

## Color System

### Primary Colors
```css
--color-primary: #2563eb      /* Blue - Main brand color */
--color-primary-dark: #1e40af  /* Darker blue for hover states */
--color-primary-light: #3b82f6 /* Lighter blue for accents */
--color-secondary: #7c3aed     /* Purple - Secondary actions */
```

### Semantic Colors
```css
--color-success: #10b981  /* Green - Success states */
--color-warning: #f59e0b  /* Amber - Warning states */
--color-error: #ef4444    /* Red - Error states */
```

### Neutral Colors
```css
--color-gray-50: #f8fafc   /* Lightest - Backgrounds */
--color-gray-100: #f1f5f9  /* Very light - Hover states */
--color-gray-200: #e2e8f0  /* Light - Borders */
--color-gray-300: #cbd5e1  /* Medium light - Disabled */
--color-gray-400: #94a3b8  /* Medium - Placeholders */
--color-gray-500: #64748b  /* Medium dark - Secondary text */
--color-gray-600: #475569  /* Dark - Body text */
--color-gray-700: #334155  /* Darker - Headings */
--color-gray-800: #1e293b  /* Very dark */
--color-gray-900: #0f172a  /* Darkest - Primary text */
```

## Typography

### Font Stack
```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
             'Helvetica Neue', sans-serif;
```

System fonts are used for optimal performance and native feel.

### Type Scale (Major Third - 1.25)
```css
--font-size-xs: 0.75rem    /* 12px */
--font-size-sm: 0.875rem   /* 14px */
--font-size-base: 1rem     /* 16px */
--font-size-lg: 1.125rem   /* 18px */
--font-size-xl: 1.25rem    /* 20px */
--font-size-2xl: 1.5rem    /* 24px */
--font-size-3xl: 1.875rem  /* 30px */
--font-size-4xl: 2.25rem   /* 36px */
```

### Fluid Typography
Headings use `clamp()` for responsive sizing:
```css
h1 { font-size: clamp(1.875rem, 5vw, 2.25rem); }
h2 { font-size: clamp(1.5rem, 4vw, 1.875rem); }
h3 { font-size: clamp(1.25rem, 3vw, 1.5rem); }
```

## Spacing System

Based on 8px grid for consistency:
```css
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-5: 1.5rem    /* 24px */
--space-6: 2rem      /* 32px */
--space-8: 3rem      /* 48px */
--space-10: 4rem     /* 64px */
```

## Border Radius
```css
--radius-sm: 0.25rem   /* 4px - Small elements */
--radius-md: 0.5rem    /* 8px - Buttons, inputs */
--radius-lg: 0.75rem   /* 12px - Cards */
--radius-xl: 1rem      /* 16px - Large containers */
--radius-full: 9999px  /* Fully rounded - Pills, badges */
```

## Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
```

## Transitions
```css
--transition-fast: 150ms ease-in-out  /* Micro-interactions */
--transition-base: 200ms ease-in-out  /* Standard transitions */
--transition-slow: 300ms ease-in-out  /* Complex animations */
```

## Breakpoints

### Mobile First Approach
```css
/* Mobile: 320px - 767px (default, no media query) */
/* Tablet: 768px - 1023px */
@media (min-width: 768px) { }

/* Desktop: 1024px+ */
@media (min-width: 1024px) { }
```

## Components

### Button
**Variants**: primary, secondary, outline, ghost
**Sizes**: small, medium, large
**States**: default, hover, active, disabled, loading

### Card
**Variants**: default, elevated
**Padding**: none, small, medium, large
**Features**: hoverable, clickable

### Input
**Types**: text, email, tel, date
**States**: default, focus, error, disabled
**Features**: Touch-optimized (48px height on mobile)

## Accessibility Features

### Focus Indicators
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Screen Reader Only
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Skip Link
```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: var(--space-2) var(--space-4);
}

.skip-link:focus {
  top: 0;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Performance Optimizations

### CSS
- CSS Modules for automatic code splitting
- No unused styles in production
- Critical CSS inlined (future enhancement)

### Images
- WebP format with fallbacks
- Responsive images with srcset
- Lazy loading for below-fold images

### JavaScript
- Code splitting by route
- Lazy loading for non-critical components
- Tree shaking enabled

## Mobile Optimizations

### Touch Targets
- Minimum 44x44px (WCAG guideline)
- 48x48px on mobile for better usability
- Adequate spacing between interactive elements

### Form Inputs
- Appropriate input types for mobile keyboards
- Large, easy-to-tap inputs (48px height)
- Clear focus states
- Inline validation

### Navigation
- Hamburger menu for mobile
- Bottom navigation consideration for future
- Swipe gestures where appropriate

## Browser Support

### Target Browsers
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari iOS 12+
- Chrome Android (last 2 versions)

### Progressive Enhancement
- Core functionality works without JavaScript
- Enhanced experience with modern CSS features
- Graceful degradation for older browsers
