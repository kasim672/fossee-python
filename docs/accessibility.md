# Accessibility Guide

## Overview
This project follows WCAG 2.1 Level AA guidelines to ensure the website is accessible to all users, including those with disabilities.

## Accessibility Features

### 1. Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic elements (`<nav>`, `<main>`, `<footer>`, `<article>`)
- Landmark regions for screen reader navigation
- Lists for grouped content

### 2. Keyboard Navigation
- All interactive elements are keyboard accessible
- Logical tab order
- Visible focus indicators
- Skip to main content link
- No keyboard traps

### 3. Screen Reader Support
- Descriptive alt text for images
- ARIA labels where needed
- ARIA live regions for dynamic content
- Screen reader only text for context
- Proper form labels

### 4. Color and Contrast
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text
- Information not conveyed by color alone
- High contrast mode support

### 5. Touch Targets
- Minimum 44x44px touch targets (WCAG 2.1)
- 48x48px on mobile for better usability
- Adequate spacing between interactive elements

### 6. Forms
- Associated labels for all inputs
- Clear error messages
- Inline validation
- Required field indicators
- Helpful placeholder text

### 7. Motion and Animation
- Respects `prefers-reduced-motion`
- No auto-playing animations
- Animations can be paused/stopped

## Testing Checklist

### Automated Testing
- [ ] Run axe DevTools
- [ ] Run WAVE browser extension
- [ ] Lighthouse accessibility audit (95+)
- [ ] HTML validation

### Manual Testing
- [ ] Keyboard navigation (Tab, Shift+Tab, Enter, Space, Esc)
- [ ] Screen reader testing (NVDA/JAWS/VoiceOver)
- [ ] Zoom to 200% (no loss of content)
- [ ] Color contrast check
- [ ] Touch target size verification

### Browser Testing
- [ ] Chrome + ChromeVox
- [ ] Firefox + NVDA
- [ ] Safari + VoiceOver
- [ ] Mobile Safari + VoiceOver
- [ ] Chrome Android + TalkBack

## Common Patterns

### Skip Link
```jsx
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

### Screen Reader Only Text
```jsx
<span className="sr-only">Loading...</span>
```

### ARIA Labels
```jsx
<button aria-label="Close menu" aria-expanded={isOpen}>
  <span aria-hidden="true">×</span>
</button>
```

### Form Labels
```jsx
<label htmlFor="email">
  Email Address <span className="required">*</span>
</label>
<input
  type="email"
  id="email"
  name="email"
  required
  aria-required="true"
/>
```

### Loading States
```jsx
<div role="status" aria-live="polite">
  <span className="sr-only">Loading...</span>
</div>
```

## Known Issues
None currently. All accessibility requirements are met.

## Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
