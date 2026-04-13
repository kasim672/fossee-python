# Workshop Booking Portal 2.0

A modern Django web application for workshop proposal, approval, scheduling, participant management, and statistics with a mobile-first UI and streamlined admin workflow.

## 🎯 Project Overview

This is a complete redesign of the FOSSEE Workshop Booking system, built with Django and Python. It provides a comprehensive platform for managing workshops from proposal to completion.

## ✨ Key Features

### Core Functionality
- **User Management**
  - User registration and authentication
  - Role-based access control (Admin, Coordinator, Instructor, Participant)
  - Profile management with activity history
  - Email verification

- **Workshop Management**
  - Workshop proposal submission
  - Multi-stage approval workflow
  - Workshop scheduling and calendar
  - Participant registration and management
  - Workshop materials upload
  - Attendance tracking

- **Advanced Features**
  - Real-time notifications
  - Searchable workshop catalog with filters
  - Monthly statistics dashboard with charts
  - Export functionality (CSV, PDF)
  - Email notifications for status changes
  - Workshop feedback and ratings
  - Certificate generation

### Workflow States
```
Draft → Proposed → Under Review → Approved → Published → Ongoing → Completed → Archived
```

## 🛠️ Technology Stack

- **Backend**: Django 5.0 (Python 3.11+)
- **Database**: SQLite (development), PostgreSQL (production)
- **Frontend**: Bootstrap 5 + Custom CSS
- **Forms**: Django Crispy Forms
- **Charts**: Chart.js
- **Icons**: Bootstrap Icons
- **Authentication**: Django Auth + django-allauth
- **File Storage**: Django Storage (local/S3)
- **Task Queue**: Celery (optional, for emails)

## 📋 Prerequisites

- Python 3.11 or higher
- pip (Python package manager)
- virtualenv (recommended)
- PostgreSQL (for production)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/kasim672/fossee-python
cd workshop_portal_enhanced
```

### 2. Create Virtual Environment
```bash
# Create virtual environment
python -m venv venv

# Activate it
# On Linux/Mac:
source venv/bin/activate
# On Windows:
venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure Environment
```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your settings
nano .env
```

### 5. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Create Superuser
```bash
python manage.py createsuperuser
```

### 7. Load Sample Data (Optional)
```bash
python manage.py loaddata fixtures/sample_data.json
```

### 8. Run Development Server
```bash
python manage.py runserver
```

Visit http://localhost:8000

## 📁 Project Structure

```
workshop_portal_enhanced/
├── workshop_portal/          # Main project settings
│   ├── settings.py          # Django settings
│   ├── urls.py              # Root URL configuration
│   ├── wsgi.py              # WSGI configuration
│   └── asgi.py              # ASGI configuration
│
├── accounts/                 # User management app
│   ├── models.py            # User profile models
│   ├── forms.py             # Registration/login forms
│   ├── views.py             # Authentication views
│   ├── urls.py              # Account URLs
│   └── templates/accounts/  # Account templates
│
├── workshops/                # Workshop management app
│   ├── models.py            # Workshop, Booking models
│   ├── forms.py             # Workshop forms
│   ├── views.py             # Workshop views
│   ├── urls.py              # Workshop URLs
│   ├── filters.py           # Search filters
│   ├── signals.py           # Email notifications
│   └── templates/workshops/ # Workshop templates
│
├── stats/                    # Statistics and analytics
│   ├── views.py             # Dashboard views
│   ├── urls.py              # Stats URLs
│   └── templates/stats/     # Stats templates
│
├── notifications/            # Notification system
│   ├── models.py            # Notification models
│   ├── views.py             # Notification views
│   └── templates/notifications/
│
├── templates/                # Global templates
│   ├── base.html            # Base template
│   ├── home.html            # Landing page
│   ├── dashboard.html       # User dashboard
│   └── includes/            # Reusable components
│       ├── navbar.html
│       ├── footer.html
│       ├── alerts.html
│       └── cards.html
│
├── static/                   # Static files
│   ├── css/
│   │   ├── main.css         # Custom styles
│   │   └── dashboard.css    # Dashboard styles
│   ├── js/
│   │   ├── main.js          # Main JavaScript
│   │   └── charts.js        # Chart configurations
│   └── img/                 # Images
│
├── media/                    # User uploads
│   ├── workshops/           # Workshop materials
│   ├── profiles/            # Profile pictures
│   └── certificates/        # Generated certificates
│
├── fixtures/                 # Sample data
│   └── sample_data.json
│
├── manage.py                 # Django management script
├── requirements.txt          # Python dependencies
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🎨 Design Improvements from Old Version

### 1. Modern UI/UX
- **Mobile-First Design**: Fully responsive on all devices
- **Card-Based Layout**: Workshop cards instead of dense tables
- **Clean Dashboard**: Intuitive coordinator and instructor dashboards
- **Better Navigation**: Sticky navbar with role-based menu items
- **Visual Status Indicators**: Color-coded badges for workshop states

### 2. Enhanced Workflow
- **Clearer Status Flow**: Visual progress indicators
- **Faster Forms**: Ajax-powered forms with real-time validation
- **Bulk Actions**: Approve/reject multiple workshops at once
- **Quick Filters**: Filter workshops by status, date, category
- **Search**: Full-text search across workshops

### 3. Better User Experience
- **Notifications**: Real-time alerts for status changes
- **Activity Feed**: Recent activities on dashboard
- **Calendar View**: Visual workshop schedule
- **Statistics**: Interactive charts and graphs
- **Export Options**: Download data as CSV/PDF

### 4. Developer Experience
- **Reusable Components**: Modular template includes
- **Better Documentation**: Comprehensive README and code comments
- **Easy Setup**: One-command deployment
- **Environment Variables**: Secure configuration
- **Testing**: Unit and integration tests included

## 👥 User Roles

### Admin
- Full system access
- User management
- System configuration
- View all statistics

### Coordinator
- Approve/reject workshop proposals
- Manage workshop schedules
- View coordinator dashboard
- Generate reports

### Instructor
- Submit workshop proposals
- Manage own workshops
- View participant lists
- Upload materials

### Participant
- Browse workshops
- Register for workshops
- View booking history
- Download certificates

## 📊 Features in Detail

### Workshop Proposal
- Multi-step form with validation
- Draft saving capability
- File attachments support
- Auto-save functionality

### Approval Workflow
- Email notifications at each stage
- Comments and feedback system
- Revision requests
- Approval history tracking

### Workshop Management
- Participant capacity limits
- Waitlist management
- Attendance marking
- Material distribution

### Statistics Dashboard
- Workshop completion rates
- Participant demographics
- Monthly trends
- Popular categories
- Instructor performance

### Notifications
- In-app notifications
- Email notifications
- SMS notifications (optional)
- Notification preferences

## 🔒 Security Features

- CSRF protection
- SQL injection prevention
- XSS protection
- Secure password hashing
- Session management
- Rate limiting
- File upload validation

## 🧪 Testing

```bash
# Run all tests
python manage.py test

# Run specific app tests
python manage.py test workshops

# Run with coverage
coverage run --source='.' manage.py test
coverage report
```

## 📦 Deployment

### Using Gunicorn + Nginx

```bash
# Install gunicorn
pip install gunicorn

# Collect static files
python manage.py collectstatic

# Run with gunicorn
gunicorn workshop_portal.wsgi:application --bind 0.0.0.0:8000
```

### Using Docker

```bash
# Build image
docker build -t workshop-portal .

# Run container
docker run -p 8000:8000 workshop-portal
```

### Deploy to Heroku

```bash
# Login to Heroku
heroku login

# Create app
heroku create workshop-portal

# Add PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Deploy
git push heroku main

# Run migrations
heroku run python manage.py migrate

# Create superuser
heroku run python manage.py createsuperuser
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/workshop_db

# Email
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password

# AWS S3 (optional)
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_STORAGE_BUCKET_NAME=your-bucket-name
```

## 📝 API Endpoints (Optional REST API)

```
GET    /api/workshops/              # List workshops
POST   /api/workshops/              # Create workshop
GET    /api/workshops/{id}/         # Workshop detail
PUT    /api/workshops/{id}/         # Update workshop
DELETE /api/workshops/{id}/         # Delete workshop
POST   /api/workshops/{id}/approve/ # Approve workshop
GET    /api/stats/                  # Statistics
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- FOSSEE for the original workshop booking system
- Django community for excellent documentation
- Bootstrap team for the UI framework

## 📞 Support

For issues and questions:
- Create an issue on GitHub
- Email: support@fossee.in
- Documentation: [Link to docs]

## 🗺️ Roadmap

- [ ] Mobile app (React Native)
- [ ] Video conferencing integration
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] AI-powered workshop recommendations

---

**Built with ❤️ using Django and Python**
