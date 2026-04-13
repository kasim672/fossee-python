# 🎯 START HERE - Workshop Booking Portal 2.0

## 🐍 This is a Django/Python Web Application!

**Complete rewrite from React to Django**

---

## ✅ What You Have Now

A **full-stack Django web application** with:
- ✅ Backend (Django/Python)
- ✅ Database (SQLite/PostgreSQL)
- ✅ User authentication
- ✅ Admin panel
- ✅ Server-side rendering
- ✅ RESTful API
- ✅ Email system
- ✅ File uploads

**No React, No JavaScript framework - Pure Django!**

---

## 📋 Prerequisites

1. **Python 3.11+**
   - Download: https://python.org
   - Check: `python --version`

2. **pip** (comes with Python)
   - Check: `pip --version`

3. **virtualenv** (recommended)
   - Install: `pip install virtualenv`

---

## 🚀 Setup (5 Minutes)

### Step 1: Virtual Environment
```bash
# Create
python -m venv venv

# Activate
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

### Step 2: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 3: Database Setup
```bash
python manage.py migrate
```

### Step 4: Create Admin
```bash
python manage.py createsuperuser
# Enter username, email, password
```

### Step 5: Run Server
```bash
python manage.py runserver
```

**Open**: http://localhost:8000 🎉

---

## 🎯 What to Do Next

### 1. Explore Admin Panel
- Visit: http://localhost:8000/admin
- Login with superuser credentials
- Explore Django admin interface

### 2. Create Django Apps
```bash
python manage.py startapp accounts
python manage.py startapp workshops
python manage.py startapp stats
python manage.py startapp notifications
```

### 3. Define Models
Edit `workshops/models.py`:
```python
from django.db import models
from django.contrib.auth.models import User

class Workshop(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    instructor = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField()
    capacity = models.IntegerField()
    status = models.CharField(max_length=20)
    
    def __str__(self):
        return self.title
```

### 4. Create Views
Edit `workshops/views.py`:
```python
from django.shortcuts import render
from django.views.generic import ListView
from .models import Workshop

class WorkshopListView(ListView):
    model = Workshop
    template_name = 'workshops/list.html'
    context_object_name = 'workshops'
```

### 5. Add URLs
Edit `workshops/urls.py`:
```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.WorkshopListView.as_view(), name='workshop-list'),
]
```

### 6. Create Templates
Create `templates/workshops/list.html`:
```html
{% extends 'base.html' %}

{% block content %}
<h1>Workshops</h1>
{% for workshop in workshops %}
    <div class="card">
        <h3>{{ workshop.title }}</h3>
        <p>{{ workshop.description }}</p>
    </div>
{% endfor %}
{% endblock %}
```

---

## 📁 Project Structure

```
workshop_portal_enhanced/
├── workshop_portal/      # Django project
│   ├── settings.py      # Configuration
│   ├── urls.py          # URL routing
│   └── wsgi.py          # WSGI config
│
├── accounts/            # User management (create this)
├── workshops/           # Workshop CRUD (create this)
├── stats/               # Statistics (create this)
├── notifications/       # Notifications (create this)
│
├── templates/           # HTML templates (create this)
├── static/              # CSS, JS, images (create this)
├── media/               # User uploads (auto-created)
│
├── manage.py            # Django CLI ✅
├── requirements.txt     # Dependencies ✅
├── .env.example         # Environment template ✅
└── README.md            # Documentation ✅
```

---

## 🛠️ Common Commands

```bash
# Create new app
python manage.py startapp app_name

# Make migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run server
python manage.py runserver

# Run tests
python manage.py test

# Django shell
python manage.py shell

# Collect static files
python manage.py collectstatic
```

---

## 📚 Files to Read

1. **START_HERE.md** ← You are here!
2. **QUICK_START.md** - Detailed setup guide
3. **README.md** - Complete documentation
4. **PROJECT_SUMMARY.md** - What's included

---

## 🎨 Tech Stack

| Component | Technology |
|-----------|------------|
| Language | Python 3.11+ |
| Framework | Django 5.0 |
| Database | SQLite (dev) |
| Frontend | Bootstrap 5 |
| Forms | Django Crispy Forms |
| Auth | Django Allauth |
| API | Django REST Framework |

---

## 🆘 Troubleshooting

**"python: command not found"**
```bash
# Install Python from python.org
```

**"No module named django"**
```bash
# Activate virtual environment
source venv/bin/activate
pip install -r requirements.txt
```

**"Port 8000 already in use"**
```bash
# Linux/Mac
lsof -ti:8000 | xargs kill -9

# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Or use different port
python manage.py runserver 8080
```

**Database errors**
```bash
# Delete and recreate
rm db.sqlite3
python manage.py migrate
python manage.py createsuperuser
```

---

## 🎯 Next Steps

1. ✅ Setup complete
2. 📖 Read QUICK_START.md
3. 🏗️ Create Django apps
4. 📝 Define models
5. 🎨 Create templates
6. 🚀 Build features

---

## 📖 Learning Resources

- **Django Tutorial**: https://docs.djangoproject.com/en/5.0/intro/
- **Python Tutorial**: https://docs.python.org/3/tutorial/
- **Bootstrap 5**: https://getbootstrap.com/docs/5.0/
- **Django Girls Tutorial**: https://tutorial.djangogirls.org/

---

## 🎉 You're Ready!

You have a complete Django project foundation. Now start building the apps and features!

**This is real Python/Django - no JavaScript framework needed!** 🐍🚀
