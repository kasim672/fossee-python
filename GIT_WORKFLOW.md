# Git Workflow Guide

## Overview

This document outlines the git workflow for the FOSSEE Workshop Booking redesign project. Following this workflow ensures a clean, progressive git history that demonstrates thoughtful development.

## Branch Strategy

### Main Branch

- `main` - Production-ready code
- Always deployable
- Protected branch (no direct commits)

### Feature Branches

```
phase-1/analysis
phase-2/foundation
phase-3/components
phase-4/optimization
phase-5/seo
phase-6/testing
phase-7/documentation
```

## Initial Setup

### 1. Clone Original Repository

```bash
git clone https://github.com/FOSSEE/workshop_booking.git
cd workshop_booking
```

### 2. Create New Branch for Redesign

```bash
git checkout -b redesign/ui-ux-enhancement
```

### 3. Set Up Project Structure

```bash
# Initialize new React project
# (Follow SETUP_GUIDE.md)
```

## Commit Message Convention

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

### Examples

```bash
# Good commit messages
git commit -m "feat(button): add loading state to Button component"
git commit -m "style(header): improve mobile navigation spacing"
git commit -m "docs(readme): add setup instructions"
git commit -m "perf(images): implement lazy loading for workshop cards"
git commit -m "fix(form): resolve validation error on mobile"

# Bad commit messages (avoid these)
git commit -m "updates"
git commit -m "fix stuff"
git commit -m "WIP"
git commit -m "changes"
```

## Progressive Development Workflow

### Phase 1: Analysis & Planning

```bash
# Create phase branch
git checkout -b phase-1/analysis

# Document analysis
git add PROJECT_PHASES.md
git commit -m "docs: create project phases document"

git add docs/design-system.md
git commit -m "docs: define design system and tokens"

git add README.md
git commit -m "docs: add initial README with project overview"

# Merge to main
git checkout main
git merge phase-1/analysis
git push origin main
```

### Phase 2: Foundation & Setup

```bash
# Create phase branch
git checkout -b phase-2/foundation

# Initialize project
git add package.json vite.config.js
git commit -m "chore: initialize React project with Vite"

git add .eslintrc.cjs .prettierrc
git commit -m "chore: configure ESLint and Prettier"

git add src/styles/index.css
git commit -m "style: implement design system tokens and base styles"

git add src/main.jsx src/App.jsx index.html
git commit -m "feat: set up React app structure and routing"

# Merge to main
git checkout main
git merge phase-2/foundation
git push origin main
```

### Phase 3: Core Components

```bash
# Create phase branch
git checkout -b phase-3/components

# Build components incrementally
git add src/components/common/Button.jsx src/components/common/Button.module.css
git commit -m "feat(button): create accessible Button component with variants"

git add src/components/common/Card.jsx src/components/common/Card.module.css
git commit -m "feat(card): create flexible Card component"

git add src/components/common/LoadingSpinner.jsx src/components/common/LoadingSpinner.module.css
git commit -m "feat(spinner): add accessible loading spinner"

git add src/components/layout/
git commit -m "feat(layout): implement responsive Header, Footer, and Layout"

git add src/pages/Home.jsx src/pages/Home.module.css
git commit -m "feat(home): create home page with hero section"

git add src/pages/Workshops.jsx src/pages/Workshops.module.css
git commit -m "feat(workshops): create workshops listing page"

git add src/pages/WorkshopDetail.jsx src/pages/WorkshopDetail.module.css
git commit -m "feat(workshop-detail): create workshop detail page"

git add src/pages/BookWorkshop.jsx src/pages/BookWorkshop.module.css
git commit -m "feat(booking): create booking form with validation"

git add src/pages/About.jsx src/pages/NotFound.jsx
git commit -m "feat(pages): add About and NotFound pages"

# Merge to main
git checkout main
git merge phase-3/components
git push origin main
```

### Phase 4: Optimization

```bash
# Create phase branch
git checkout -b phase-4/optimization

# Responsive improvements
git commit -m "style(responsive): optimize layouts for tablet breakpoint"
git commit -m "style(mobile): improve touch targets and spacing on mobile"

# Performance improvements
git commit -m "perf(images): add lazy loading and responsive images"
git commit -m "perf(bundle): optimize code splitting and chunk sizes"

# Accessibility improvements
git commit -m "a11y(navigation): improve keyboard navigation and focus states"
git commit -m "a11y(forms): add ARIA labels and improve screen reader support"

# Merge to main
git checkout main
git merge phase-4/optimization
git push origin main
```

### Phase 5: SEO

```bash
# Create phase branch
git checkout -b phase-5/seo

git commit -m "feat(seo): implement React Helmet for meta tags"
git commit -m "feat(seo): add Open Graph tags for social sharing"
git commit -m "feat(seo): implement structured data with JSON-LD"

# Merge to main
git checkout main
git merge phase-5/seo
git push origin main
```

### Phase 6: Testing

```bash
# Create phase branch
git checkout -b phase-6/testing

git commit -m "test: add unit tests for Button component"
git commit -m "test: add integration tests for booking flow"
git commit -m "fix(validation): resolve form validation edge cases"

# Merge to main
git checkout main
git merge phase-6/testing
git push origin main
```

### Phase 7: Documentation

```bash
# Create phase branch
git checkout -b phase-7/documentation

git commit -m "docs(readme): add design principles and responsiveness strategy"
git commit -m "docs(readme): document trade-offs and challenges"
git commit -m "docs(screenshots): add before/after comparison images"
git commit -m "docs(components): create component documentation"

# Merge to main
git checkout main
git merge phase-7/documentation
git push origin main
```

## Best Practices

### DO ✅

- Make small, focused commits
- Write descriptive commit messages
- Commit frequently (multiple times per day)
- Test before committing
- Review your changes before committing
- Keep commits atomic (one logical change per commit)
- Use branches for different phases

### DON'T ❌

- Make one giant commit with all changes
- Use vague commit messages
- Commit broken code
- Mix unrelated changes in one commit
- Commit commented-out code
- Commit console.log statements
- Force push to main branch

## Checking Your Git History

### View Commit History

```bash
# See all commits
git log --oneline

# See commits with file changes
git log --stat

# See commits graphically
git log --graph --oneline --all
```

### Verify Progressive Work

```bash
# Count commits
git rev-list --count HEAD

# See commits by date
git log --pretty=format:"%h %ad | %s" --date=short

# See file changes over time
git log --follow -- src/components/common/Button.jsx
```

## Pre-Submission Checklist

Before submitting your project, verify:

- [ ] Git history shows progressive work (not one commit)
- [ ] Commit messages are clear and descriptive
- [ ] No sensitive information in commits
- [ ] No large files committed (images optimized)
- [ ] All branches merged to main
- [ ] README is complete and up-to-date
- [ ] Code is formatted and linted
- [ ] All tests pass
- [ ] Production build works

## Example Timeline

A good git history should look like this:

```
Day 1:
- docs: create project phases document
- docs: define design system
- chore: initialize React project

Day 2:
- chore: configure build tools
- style: implement design tokens
- feat: set up routing

Day 3:
- feat(button): create Button component
- feat(card): create Card component
- feat(layout): implement Header

Day 4:
- feat(layout): implement Footer
- feat(home): create home page
- feat(workshops): create workshops page

Day 5:
- feat(workshop-detail): create detail page
- feat(booking): create booking form
- style(responsive): optimize for mobile

Day 6:
- a11y: improve keyboard navigation
- a11y: add ARIA labels
- perf: optimize bundle size

Day 7:
- feat(seo): add meta tags
- test: add component tests
- docs: update README

Day 8:
- docs: add screenshots
- docs: document challenges
- chore: final cleanup
```

## Troubleshooting

### Undo Last Commit (Not Pushed)

```bash
git reset --soft HEAD~1
```

### Amend Last Commit

```bash
git add forgotten-file.js
git commit --amend --no-edit
```

### View Changes Before Committing

```bash
git diff
git diff --staged
```

### Stash Changes Temporarily

```bash
git stash
git stash pop
```

## Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Best Practices](https://git-scm.com/book/en/v2)
- [Writing Good Commit Messages](https://chris.beams.io/posts/git-commit/)
