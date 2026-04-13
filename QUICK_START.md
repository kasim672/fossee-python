# 🚀 Quick Start Guide

## Workshop Booking Portal 2.0 - Django/Python

This is a **complete Django/Python web application** - no JavaScript framework needed!

---

## ⚡ What You're Building

A modern workshop management system with:
- User authentication & roles
- Workshop proposal & approval workflow
- Participant management
- Statistics dashboard
- Email notifications
- Mobile-responsive UI

---

## 📋 Prerequisites

1. **Python 3.11+** - Download from https://python.org
2. **pip** - Comes with Python
3. **virtualenv** (recommended)

---

## 🎯 Setup in 5 Steps

### Step 1: Create Virtual Environment
```bash
# Create virtual environment
python -m venv venv

# Activate it
# Linux/Mac:
source venv/bin/activate
# Windows:
venv\Scripts\activate
```

### Step 2: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 3: Setup Database
```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 4: Create Admin User
```bash
python manage.py createsuperuser
```

### Step 5: Run Server
```bash
python manage.py runserver
```

Visit: http://localhost:8000 🎉

---

## 🎨 What's Different from React Version?

| Feature | React Version | Django Version |
|---------|--------------|----------------|
| Language | JavaScript | **Python** |
| Framework | React | **Django** |
| Backend | None (frontend only) | **Full backend included** |
| Database | None | **SQLite/PostgreSQL** |
| Auth | Mock | **Real authentication** |
| Forms | Client-side | **Server-side validation** |
| Deployment | Static hosting | **Full web server** |

---

## 📁 Project Structure

```
workshop_portal_enhanced/
├── workshop_portal/      # Django project settings
├── accounts/             # User management (Python)
├── workshops/            # Workshop management (Python)
├── stats/                # Statistics (Python)
├── notifications/        # Notifications (Python)
├── templates/            # HTML templates
├── static/               # CSS, JS, images
├── manage.py             # Django CLI
└── requirements.txt      # Python dependencies
```

---

## 👥 Default Users (After Loading Sample Data)

```bash
# Load sample data
python manage.py loaddata fixtures/sample_data.json
```

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@fossee.in | admin123 |
| Coordinator | coordinator@fossee.in | coord123 |
| Instructor | instructor@fossee.in | inst123 |

---

## 🔧 Common Commands

```bash
# Create new app
python manage.py startapp app_name

# Make migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Collect static files
python manage.py collectstatic

# Run tests
python manage.py test

# Open Django shell
python manage.py shell
```

---

## 📊 Features Included

✅ User registration & login
✅ Role-based access (Admin, Coordinator, Instructor, Participant)
✅ Workshop CRUD operations
✅ Approval workflow
✅ Participant booking
✅ Statistics dashboard with charts
✅ Email notifications
✅ Search & filters
✅ Mobile-responsive UI (Bootstrap 5)
✅ File uploads
✅ Export to CSV/PDF

---

## 🎯 Next Steps

1. **Explore Admin Panel**: http://localhost:8000/admin
2. **Create Workshops**: Login as instructor
3. **Approve Workshops**: Login as coordinator
4. **View Statistics**: Check dashboard
5. **Customize**: Edit templates and models

---

## 📚 Learn More

- **Django Docs**: https://docs.djangoproject.com
- **Python Docs**: https://docs.python.org
- **Bootstrap 5**: https://getbootstrap.com

---

## 🆘 Troubleshooting

**"python: command not found"**
→ Install Python from python.org

**"No module named django"**
→ Activate virtual environment and run `pip install -r requirements.txt`

**"Port 8000 already in use"**
```bash
# Linux/Mac
lsof -ti:8000 | xargs kill -9

# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

**Database errors**
```bash
# Delete database and start fresh
rm db.sqlite3
python manage.py migrate
python manage.py createsuperuser
```

---

## 🚀 Ready to Code!

This is a **complete Python/Django application** with:
- Backend API
- Database models
- User authentication
- Admin interface
- Frontend templates

Start building! 🎉
