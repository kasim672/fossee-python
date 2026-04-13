# 🚀 Getting Started - Workshop Portal 2.0

## Quick Setup (3 Steps)

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run migrations (already done, but just in case)
python manage.py migrate

# 3. Start the server
python manage.py runserver
```

Visit: **http://localhost:8000**

---

## 🔐 Admin Access

```bash
# Create admin user (if not already created)
python manage.py createsuperuser
```

Admin Panel: **http://localhost:8000/admin/**

---

## 📍 Available URLs

- **Home/Workshops**: http://localhost:8000/
- **Register**: http://localhost:8000/accounts/register/
- **Login**: http://localhost:8000/accounts/login/
- **Dashboard**: http://localhost:8000/accounts/dashboard/
- **Profile**: http://localhost:8000/accounts/profile/
- **Statistics**: http://localhost:8000/stats/
- **Notifications**: http://localhost:8000/notifications/
- **Admin Panel**: http://localhost:8000/admin/

---

## ✅ What's Working

- User registration with roles (Coordinator, Instructor, Participant)
- Login/logout functionality
- User profiles and dashboard
- Workshop listing with card layout
- Statistics dashboard with Chart.js
- Notification system
- Admin interface for CRUD operations
- Responsive Bootstrap 5 UI

---

## 📸 Next Steps for Documentation

### 1. Take Screenshots

Run the app and capture:

**Homepage/Workshop List** (`/`)
- Empty state (no workshops)
- With workshops (create 2-3 via admin first)

**Authentication** (`/accounts/`)
- Registration page
- Login page
- User dashboard
- Profile page

**Statistics** (`/stats/`)
- Dashboard with charts

**Admin Panel** (`/admin/`)
- Workshop list
- Workshop creation form
- User management

**Mobile Views**
- Use Chrome DevTools (F12 → Device Toolbar)
- Capture mobile responsive views

### 2. Record Demo Video

Use **OBS Studio** (free) or **Loom**:

1. Start recording
2. Show registration → login
3. Navigate through dashboard
4. Go to admin panel
5. Create a workshop
6. View it in workshop list
7. Check statistics
8. Show mobile responsive design
9. Stop recording (keep it under 3 minutes)

### 3. Prepare for Deployment

Choose a platform:

**Option A: Heroku (Easiest)**
```bash
# Install Heroku CLI
# Then:
heroku login
heroku create workshop-portal
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
heroku run python manage.py migrate
heroku run python manage.py createsuperuser
```

**Option B: PythonAnywhere (Free tier)**
1. Sign up at pythonanywhere.com
2. Upload code via Git
3. Configure web app
4. Set up virtualenv
5. Configure WSGI file

**Option C: Railway (Modern)**
1. Sign up at railway.app
2. Connect GitHub repo
3. Add PostgreSQL database
4. Deploy automatically

### 4. Update README

Add these sections:

**Screenshots Section:**
```markdown
## 📸 Screenshots

### Workshop List
![Workshop List](docs/screenshots/workshop-list.png)

### User Dashboard
![Dashboard](docs/screenshots/dashboard.png)

### Statistics
![Statistics](docs/screenshots/statistics.png)

### Mobile View
![Mobile](docs/screenshots/mobile.png)
```

**Demo Section:**
```markdown
## 🎥 Demo

Watch the demo video: [YouTube Link]

Or try the live demo: [Deployment URL]
```

**Deployment Section:**
```markdown
## 🌐 Live Demo

Visit: https://your-app.herokuapp.com

Test Credentials:
- Email: demo@example.com
- Password: demo123
```

---

## 📁 Create Screenshots Folder

```bash
mkdir -p docs/screenshots
```

Then add your screenshots there.

---

## 🎨 What to Highlight

### Key Features to Showcase:
1. **Modern UI** - Bootstrap 5, card layouts, responsive design
2. **User Roles** - Different access levels
3. **Status Workflow** - Draft → Pending → Approved → Published → Completed
4. **Statistics** - Interactive charts with Chart.js
5. **Notifications** - Real-time notification system
6. **Admin Panel** - Easy workshop management
7. **Mobile Responsive** - Works on all devices

### Technical Highlights:
- Django 5.0 + Python 3.11
- SQLite (dev) / PostgreSQL (prod)
- Bootstrap 5 for UI
- Chart.js for visualizations
- Django signals for notifications
- Role-based access control

---

## 🧪 Testing Checklist

Before recording demo:

- [ ] Create 3-4 sample workshops via admin
- [ ] Register a new user
- [ ] Login and check dashboard
- [ ] View workshop list
- [ ] Check statistics page
- [ ] Test mobile responsive (Chrome DevTools)
- [ ] Verify all links work
- [ ] Check that forms validate properly

---

## 📝 README Structure

Your README.md already has most of this, but ensure it includes:

1. **Project title and description**
2. **Live demo link** (after deployment)
3. **Screenshots** (4-6 images)
4. **Features list**
5. **Tech stack**
6. **Installation instructions**
7. **Usage guide**
8. **API endpoints** (if applicable)
9. **Contributing guidelines**
10. **License**

---

## 🚀 Deployment Preparation

### Before deploying:

1. **Update settings.py for production:**
```python
# Use environment variables
import os
SECRET_KEY = os.environ.get('SECRET_KEY')
DEBUG = os.environ.get('DEBUG', 'False') == 'True'
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '').split(',')
```

2. **Create Procfile (for Heroku):**
```
web: gunicorn workshop_portal.wsgi
```

3. **Update requirements.txt:**
```bash
pip freeze > requirements.txt
```

4. **Add gunicorn:**
```bash
pip install gunicorn
pip freeze > requirements.txt
```

5. **Configure static files:**
```python
# settings.py
STATIC_ROOT = BASE_DIR / 'staticfiles'
```

6. **Collect static files:**
```bash
python manage.py collectstatic
```

---

## 📊 Project Status

✅ **Complete and Working:**
- All 4 Django apps (accounts, workshops, stats, notifications)
- User authentication system
- Workshop management
- Statistics dashboard
- Notification system
- Responsive UI
- Admin interface

🔄 **Optional Enhancements:**
- Workshop detail page
- Frontend workshop creation form
- Approval workflow UI
- Participant booking system
- Calendar view
- Export functionality
- File uploads
- Advanced search

---

## 💡 Tips

1. **For screenshots**: Use a consistent browser window size (1920x1080)
2. **For demo video**: Keep it short (2-3 minutes), show key features only
3. **For deployment**: Start with Heroku or Railway (easiest)
4. **For README**: Add badges (build status, license, etc.)

---

## 🆘 Common Issues

**Static files not loading in production:**
```bash
python manage.py collectstatic --noinput
```

**Database errors after deployment:**
```bash
heroku run python manage.py migrate
```

**Environment variables not set:**
- Check your platform's environment variable settings
- Ensure SECRET_KEY, DATABASE_URL, etc. are configured

---

## 📞 Need Help?

- Check Django docs: https://docs.djangoproject.com
- Deployment guides: https://docs.djangoproject.com/en/5.0/howto/deployment/
- Heroku Django guide: https://devcenter.heroku.com/articles/django-app-configuration

---

**Your app is ready! Just add screenshots, record a demo, and deploy.** 🎉
