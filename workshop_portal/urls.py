"""
URL configuration for workshop_portal project.
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    # Admin
    path('admin/', admin.site.admin_view),
    
    # Home
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    
    # Apps
    path('accounts/', include('accounts.urls')),
    path('workshops/', include('workshops.urls')),
    path('stats/', include('stats.urls')),
    path('notifications/', include('notifications.urls')),
    
    # Django allauth
    path('accounts/', include('allauth.urls')),
    
    # API (optional)
    path('api/', include('workshops.api_urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
