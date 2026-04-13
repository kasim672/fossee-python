# Workshop Booking Portal 2.0

A modern Django web application for workshop management with role-based access, approval workflows, and statistics dashboard.

## 🚀 Quick Start

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Visit: **http://localhost:8000**

📚 **Full Guide**: See `GETTING_STARTED.md`

---

## 🎯 Overview

Complete workshop management system built with Django and Python, featuring user authentication, role-based access, approval workflows, and real-time statistics.

## ✨ Features

- **User Management**: Registration, login, profiles with roles (Coordinator, Instructor, Participant)
- **Workshop Management**: CRUD operations, status workflow, search & filters
- **Statistics Dashboard**: Charts and analytics with Chart.js
- **Notifications**: Real-time notification system
- **Admin Interface**: Full Django admin for easy management
- **Responsive UI**: Bootstrap 5, mobile-first design

**Status Workflow**: Draft → Pending → Approved → Published → Completed

## 🛠️ Tech Stack

- Django 5.0 + Python 3.11
- SQLite (dev) / PostgreSQL (prod)
- Bootstrap 5 + Chart.js
- Django Auth System

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/kasim672/fossee-python
cd workshop_portal_enhanced

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Start server
python manage.py runserver
```

## 📁 Project Structure

```
workshop_portal_enhanced/
├── workshop_portal/     # Django project settings
├── accounts/            # User management
├── workshops/           # Workshop CRUD
├── stats/               # Statistics dashboard
├── notifications/       # Notification system
├── templates/           # HTML templates
├── static/              # CSS, JS files
└── manage.py            # Django CLI
```

## 👥 User Roles

- **Admin**: Full system access, user management
- **Coordinator**: Approve/reject workshops, manage schedules
- **Instructor**: Submit proposals, manage workshops
- **Participant**: Browse and register for workshops

## 🌐 Deployment

**Heroku:**
```bash
heroku create workshop-portal
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
heroku run python manage.py migrate
```

**Other Options**: Railway, PythonAnywhere, DigitalOcean

See `GETTING_STARTED.md` for detailed deployment instructions.

## 📸 Screenshots

*Add screenshots here after running the application*

## 🎥 Demo

*Add demo video link here*

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/name`)
5. Open Pull Request

## 📄 License

MIT License - see LICENSE file for details

---

**Built with Django 5.0 and Python 3.11**
