from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings
from .models import Workshop


@receiver(pre_save, sender=Workshop)
def workshop_status_changed(sender, instance, **kwargs):
    """Detect when workshop status changes"""
    if instance.pk:
        try:
            old_instance = Workshop.objects.get(pk=instance.pk)
            if old_instance.status != instance.status:
                instance._status_changed = True
                instance._old_status = old_instance.status
        except Workshop.DoesNotExist:
            pass


@receiver(post_save, sender=Workshop)
def send_status_notification(sender, instance, created, **kwargs):
    """Send email notification when workshop status changes"""
    
    if created:
        # New workshop created
        subject = f'Workshop Created: {instance.title}'
        message = f'''
        Your workshop "{instance.title}" has been created successfully.
        
        Status: {instance.get_status_display()}
        Date: {instance.date}
        
        You will be notified when the status changes.
        '''
        send_notification_email(instance.created_by.email, subject, message)
    
    elif hasattr(instance, '_status_changed') and instance._status_changed:
        # Status changed
        subject = f'Workshop Status Updated: {instance.title}'
        message = f'''
        Your workshop "{instance.title}" status has been updated.
        
        Previous Status: {instance._old_status}
        New Status: {instance.get_status_display()}
        Date: {instance.date}
        '''
        send_notification_email(instance.created_by.email, subject, message)


def send_notification_email(recipient, subject, message):
    """Helper function to send email notifications"""
    try:
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[recipient],
            fail_silently=True,
        )
    except Exception as e:
        print(f"Failed to send email: {e}")
