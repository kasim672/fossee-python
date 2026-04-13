from django.shortcuts import render
from .models import Workshop


def workshop_list(request):
    """Display list of all workshops"""
    workshops = Workshop.objects.all()
    return render(request, 'workshops/list.html', {'workshops': workshops})
