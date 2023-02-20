from django.contrib.auth.decorators import user_passes_test
from django.urls import reverse
from django.shortcuts import redirect
from django.contrib import messages

def verification_required(f):
    return user_passes_test(lambda u: u.is_phone_verified, login_url='Verify')(f)


def email_verification_required(redirect_url=None):
    def decorator(view_func):
        def wrap(request, *args, **kwargs):
            if request.user.is_email_verified:
                return view_func(request, *args, **kwargs)
            else:
                messages.error(request, "Your Email Address is not verified")
                return redirect(reverse(redirect_url))
        return wrap
    return decorator
    
def active_verification_required(redirect_url=None):
    def decorator(view_func):
        def wrap(request, *args, **kwargs):
            if request.user.is_active:
                return view_func(request, *args, **kwargs)
            else:
                messages.error(request, "Your Account is Deactivated Contact Support for help")
                return redirect(reverse(redirect_url))
        return wrap
    return decorator

def user_sigin(Model,redirect_url=None):
    def decorator(view_func):
        def wrap(request, *args, **kwargs):
            if request.user.is_anonymous:
                return view_func(request, *args, **kwargs)
            elif not Model.objects.filter(pk=request.user.pk).first():
                return view_func(request, *args, **kwargs)
            else:
                return redirect(reverse(redirect_url))
        return wrap
    return decorator

