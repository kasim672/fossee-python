from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.db.models import Count
from workshops.models import Workshop
from django.contrib.auth.models import User
from datetime import datetime, timedelta


@login_required
def statistics_dashboard(request):
    """Statistics dashboard view"""
    
    # Overall statistics
    total_workshops = Workshop.objects.count()
    total_users = User.objects.count()
    
    # Status breakdown
    status_stats = Workshop.objects.values('status').annotate(count=Count('id'))
    
    # Monthly statistics (last 6 months)
    six_months_ago = datetime.now() - timedelta(days=180)
    monthly_stats = Workshop.objects.filter(
        created_at__gte=six_months_ago
    ).extra(
        select={'month': 'strftime("%%Y-%%m", created_at)'}
    ).values('month').annotate(count=Count('id')).order_by('month')
    
    # Top instructors
    top_instructors = User.objects.annotate(
        workshop_count=Count('workshops')
    ).filter(workshop_count__gt=0).order_by('-workshop_count')[:5]
    
    context = {
        'total_workshops': total_workshops,
        'total_users': total_users,
        'status_stats': status_stats,
        'monthly_stats': monthly_stats,
        'top_instructors': top_instructors,
    }
    
    return render(request, 'stats/dashboard.html', context)
