from django.db.models import Q
from .models import Workshop


class WorkshopFilter:
    """Filter workshops based on various criteria"""
    
    @staticmethod
    def filter_workshops(queryset, filters):
        """
        Apply filters to workshop queryset
        
        Args:
            queryset: Workshop queryset
            filters: dict with filter parameters
        
        Returns:
            Filtered queryset
        """
        # Status filter
        if filters.get('status'):
            queryset = queryset.filter(status=filters['status'])
        
        # Search filter (title and description)
        if filters.get('search'):
            search_term = filters['search']
            queryset = queryset.filter(
                Q(title__icontains=search_term) |
                Q(description__icontains=search_term)
            )
        
        # Date range filter
        if filters.get('date_from'):
            queryset = queryset.filter(date__gte=filters['date_from'])
        
        if filters.get('date_to'):
            queryset = queryset.filter(date__lte=filters['date_to'])
        
        return queryset
    
    @staticmethod
    def get_user_workshops(user, status=None):
        """Get workshops created by a specific user"""
        queryset = Workshop.objects.filter(created_by=user)
        
        if status:
            queryset = queryset.filter(status=status)
        
        return queryset
    
    @staticmethod
    def get_pending_workshops():
        """Get all workshops pending approval"""
        return Workshop.objects.filter(status='pending')
    
    @staticmethod
    def get_published_workshops():
        """Get all published workshops"""
        return Workshop.objects.filter(status='published')
