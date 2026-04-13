# Component Documentation

## Common Components

### Button

Accessible, touch-friendly button with multiple variants.

**Props:**
- `children` (node): Button content
- `variant` (string): 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
- `size` (string): 'small' | 'medium' | 'large' (default: 'medium')
- `fullWidth` (boolean): Make button full width (default: false)
- `disabled` (boolean): Disable button (default: false)
- `loading` (boolean): Show loading spinner (default: false)
- `type` (string): 'button' | 'submit' | 'reset' (default: 'button')
- `onClick` (function): Click handler
- `ariaLabel` (string): Accessible label

**Usage:**
```jsx
import Button from './components/common/Button';

<Button variant="primary" size="large" onClick={handleClick}>
  Click Me
</Button>

<Button variant="outline" loading={isLoading}>
  Submit
</Button>
```

---

### Card

Flexible container for content with optional hover effects.

**Props:**
- `children` (node): Card content
- `variant` (string): 'default' | 'elevated' (default: 'default')
- `hoverable` (boolean): Add hover effect (default: false)
- `padding` (string): 'none' | 'small' | 'medium' | 'large' (default: 'medium')
- `className` (string): Additional CSS classes
- `onClick` (function): Click handler (makes card clickable)

**Usage:**
```jsx
import Card from './components/common/Card';

<Card padding="large" hoverable>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

<Card onClick={handleClick} hoverable>
  Clickable card
</Card>
```

---

### LoadingSpinner

Accessible loading indicator.

**Props:**
- `size` (string): 'small' | 'medium' | 'large' (default: 'medium')
- `centered` (boolean): Center spinner in container (default: true)

**Usage:**
```jsx
import LoadingSpinner from './components/common/LoadingSpinner';

<LoadingSpinner size="large" />
<LoadingSpinner size="small" centered={false} />
```

---

## Layout Components

### Layout

Main layout wrapper with header and footer.

**Props:**
- `children` (node): Page content

**Usage:**
```jsx
import Layout from './components/layout/Layout';

<Layout>
  <YourPageContent />
</Layout>
```

---

### Header

Responsive navigation with mobile menu.

**Features:**
- Sticky positioning
- Mobile hamburger menu
- Active link highlighting
- Keyboard accessible

**Usage:**
```jsx
import Header from './components/layout/Header';

<Header />
```

---

### Footer

Site footer with links and information.

**Features:**
- Responsive grid layout
- Quick links
- Contact information
- Copyright notice

**Usage:**
```jsx
import Footer from './components/layout/Footer';

<Footer />
```

---

## Creating New Components

### Component Template

```jsx
import styles from './ComponentName.module.css';

/**
 * ComponentName
 * Brief description of what the component does
 */
const ComponentName = ({ 
  prop1, 
  prop2 = 'defaultValue',
  ...props 
}) => {
  return (
    <div className={styles.component} {...props}>
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

### CSS Module Template

```css
.component {
  /* Base styles */
}

/* Variants */
.variant1 {
  /* Variant styles */
}

/* States */
.component:hover {
  /* Hover styles */
}

.component:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Responsive */
@media (max-width: 767px) {
  .component {
    /* Mobile styles */
  }
}
```

### Best Practices

1. **Accessibility First**
   - Use semantic HTML
   - Add ARIA labels where needed
   - Ensure keyboard navigation
   - Test with screen readers

2. **Mobile First**
   - Design for mobile screens first
   - Use responsive units (rem, %, vw)
   - Test on real devices

3. **Performance**
   - Keep components small and focused
   - Use CSS Modules for scoped styles
   - Lazy load when appropriate

4. **Consistency**
   - Use design tokens from index.css
   - Follow naming conventions
   - Maintain consistent spacing

5. **Documentation**
   - Add JSDoc comments
   - Document props and usage
   - Include examples
