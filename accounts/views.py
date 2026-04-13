from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import UserRegistrationForm, UserLoginForm, ProfileUpdateForm


def register(request):
    """User registration view"""
    if request.user.is_authenticated:
        return redirect('workshops:workshop_list')
    
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Registration successful! Welcome to Workshop Portal.')
            return redirect('workshops:workshop_list')
    else:
        form = UserRegistrationForm()
    
    return render(request, 'accounts/register.html', {'form': form})


def user_login(request):
    """User login view"""
    if request.user.is_authenticated:
        return redirect('workshops:workshop_list')
    
    if request.method == 'POST':
        form = UserLoginForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f'Welcome back, {user.username}!')
                next_url = request.GET.get('next', 'workshops:workshop_list')
                return redirect(next_url)
    else:
        form = UserLoginForm()
    
    return render(request, 'accounts/login.html', {'form': form})


def user_logout(request):
    """User logout view"""
    logout(request)
    messages.info(request, 'You have been logged out.')
    return redirect('workshops:workshop_list')


@login_required
def profile(request):
    """User profile view"""
    if request.method == 'POST':
        form = ProfileUpdateForm(request.POST, instance=request.user.profile)
        if form.is_valid():
            form.save()
            messages.success(request, 'Profile updated successfully!')
            return redirect('accounts:profile')
    else:
        form = ProfileUpdateForm(instance=request.user.profile)
    
    return render(request, 'accounts/profile.html', {
        'form': form,
        'user': request.user
    })


@login_required
def dashboard(request):
    """User dashboard view"""
    from workshops.models import Workshop
    
    user_workshops = Workshop.objects.filter(created_by=request.user)
    
    context = {
        'total_workshops': user_workshops.count(),
        'draft_workshops': user_workshops.filter(status='draft').count(),
        'pending_workshops': user_workshops.filter(status='pending').count(),
        'approved_workshops': user_workshops.filter(status='approved').count(),
        'recent_workshops': user_workshops[:5],
    }
    
    return render(request, 'accounts/dashboard.html', context)
