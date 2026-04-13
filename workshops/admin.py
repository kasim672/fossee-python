from django.contrib import admin
from .models import Workshop


@admin.register(Workshop)
class WorkshopAdmin(admin.ModelAdmin):
    list_display = ['title', 'status', 'date', 'created_by', 'created_at']
    list_filter = ['status', 'date']
    search_fields = ['title', 'description']
    date_hierarchy = 'date'
