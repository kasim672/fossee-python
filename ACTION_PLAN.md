# Action Plan - What to Do Now

## Step 1: Get It Running Locally (5 minutes)

```bash
# Install Node.js dependencies
npm install

# Start the development server
npm run dev
```

Open http://localhost:3000 in your browser. You should see the app running!

---

## Step 2: Take "Before" Screenshots (10 minutes)

Go to the original FOSSEE repository: https://github.com/FOSSEE/workshop_booking

Take screenshots of:

1. **Home page** (desktop view)
2. **Home page** (mobile view - use Chrome DevTools, F12 → Device toolbar → iPhone SE)
3. **Workshop listing page** (if exists)
4. **Any booking form** (if exists)

Save these in `docs/screenshots/` as:

- `before-home-desktop.png`
- `before-home-mobile.png`
- `before-workshops.png`
- `before-form.png`

---

## Step 3: Take "After" Screenshots (10 minutes)

With your app running (http://localhost:3000), take screenshots:

### Desktop (1920x1080)

1. Home page → `docs/screenshots/after-home-desktop.png`
2. Workshops page → `docs/screenshots/after-workshops-desktop.png`
3. Workshop detail → `docs/screenshots/after-detail-desktop.png`
4. Booking form → `docs/screenshots/after-form-desktop.png`

### Mobile (375x667 - iPhone SE)

1. Home page → `docs/screenshots/after-home-mobile.png`
2. Workshops page → `docs/screenshots/after-workshops-mobile.png`
3. Booking form → `docs/screenshots/after-form-mobile.png`

**How to take screenshots:**

- Desktop: F12 → Ctrl+Shift+P → "Capture full size screenshot"
- Mobile: F12 → Device toolbar → iPhone SE → Ctrl+Shift+P → "Capture screenshot"

---

## Step 4: Record Demo Video (Optional, 5 minutes)

Use any screen recorder:

- **Windows**: Xbox Game Bar (Win + G)
- **Mac**: QuickTime Player (Cmd + Shift + 5)
- **Linux**: SimpleScreenRecorder or Kazam
- **Online**: Loom.com (free)

Record a 2-3 minute video showing:

1. Home page on desktop
2. Navigate to workshops
3. Click on a workshop
4. Fill booking form
5. Switch to mobile view (F12 → Device toolbar)
6. Show mobile navigation

Save as `demo-video.mp4` or upload to YouTube/Loom and get the link.

---

## Step 5: Deploy to Vercel (10 minutes)

### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts, press Enter for defaults
```

### Option B: Using Vercel Website

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Copy the live URL

**Your live URL will be something like:**
`https://workshop-booking-xyz.vercel.app`

---

## Step 6: Update README with Screenshots (15 minutes)

Open `README.md` and add your screenshots in the "Before & After" section:

```markdown
## 📸 Before & After

### Home Page

**Before**
![Original Home](docs/screenshots/before-home-desktop.png)

**After - Desktop**
![New Home Desktop](docs/screenshots/after-home-desktop.png)

**After - Mobile**
![New Home Mobile](docs/screenshots/after-home-mobile.png)

### Workshops Page

**Before**
![Original Workshops](docs/screenshots/before-workshops.png)

**After - Desktop**
![New Workshops Desktop](docs/screenshots/after-workshops-desktop.png)

**After - Mobile**
![New Workshops Mobile](docs/screenshots/after-workshops-mobile.png)

### Booking Form

**Before**
![Original Form](docs/screenshots/before-form.png)

**After - Mobile**
![New Form Mobile](docs/screenshots/after-form-mobile.png)
```

Also update the "Live Demo" section with your Vercel URL:

```markdown
**Live Demo**: https://your-app.vercel.app
```

---

## Step 7: Make Progressive Git Commits (20 minutes)

Instead of one big commit, make several commits showing progress:

```bash
# Initial setup
git add package.json vite.config.js .eslintrc.cjs
git commit -m "chore: initialize React project with Vite"

# Design system
git add src/styles/
git commit -m "style: implement design system with tokens"

# Components
git add src/components/common/Button.*
git commit -m "feat(button): create accessible Button component"

git add src/components/common/Card.*
git commit -m "feat(card): create Card component"

git add src/components/layout/
git commit -m "feat(layout): implement Header, Footer, and Layout"

# Pages
git add src/pages/Home.*
git commit -m "feat(home): create home page with hero section"

git add src/pages/Workshops.*
git commit -m "feat(workshops): create workshops listing page"

git add src/pages/WorkshopDetail.*
git commit -m "feat(detail): create workshop detail page"

git add src/pages/BookWorkshop.*
git commit -m "feat(booking): create booking form with validation"

# Documentation
git add README.md docs/screenshots/
git commit -m "docs: add screenshots and complete README"

# Final
git add .
git commit -m "docs: final polish and deployment"

git push origin main
```

---

## Step 8: Final Checklist

Before submitting, verify:

- [ ] App runs locally (`npm run dev`)
- [ ] No console errors
- [ ] All pages work
- [ ] Mobile responsive (test with F12 → Device toolbar)
- [ ] Screenshots added to README
- [ ] Live demo URL in README
- [ ] Multiple git commits (not just one)
- [ ] README answers all 4 questions:
  - [ ] Design principles
  - [ ] Responsiveness strategy
  - [ ] Trade-offs
  - [ ] Challenges

---

## What You Need to Submit

1. **GitHub Repository URL** with:
   - Working React code
   - Progressive git history (10+ commits)
   - Complete README with screenshots
   - All 4 questions answered

2. **Live Demo URL** (Vercel deployment)

3. **Optional**: Demo video link

---

## Quick Commands Reference

```bash
# Run locally
npm install
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint

# Format code
npm run format

# Deploy to Vercel
vercel
```

---

## Need Help?

- **Can't install?** Make sure Node.js 18+ is installed
- **Port 3000 busy?** Kill it: `lsof -ti:3000 | xargs kill -9`
- **Vercel issues?** Use the website method instead of CLI
- **Git issues?** Make sure you've initialized: `git init`

---

## Time Estimate

- Step 1 (Run locally): 5 min
- Step 2 (Before screenshots): 10 min
- Step 3 (After screenshots): 10 min
- Step 4 (Video - optional): 5 min
- Step 5 (Deploy): 10 min
- Step 6 (Update README): 15 min
- Step 7 (Git commits): 20 min
- Step 8 (Final check): 10 min

**Total: ~1.5 hours**

---

## You're Ready!

Follow these steps in order, and you'll have a complete, professional submission. Good luck! 🚀
