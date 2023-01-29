from django import forms
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm as BaseUserCreationForm
from .models import User

class UserCreationForm(BaseUserCreationForm):
    first_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter your firstname here'}))
    last_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter your Surname here'}))
    other_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter your othername here'}),required=False,)
    email = forms.EmailField(widget=forms.EmailInput(attrs={'placeholder': 'Enter your email address here'}))
    phone = forms.TextInput(attrs={'placeholder': 'Enter your phone number here'})
    profile_image = forms.FileInput(attrs={'placeholder': 'Enter your first name here'})
    class Meta:
        model = User
        fields = ('first_name','last_name','other_name','email','gender','phone','password1', 'password2')
#        exclude = ('last_login','created','updated','username','is_superuser','groups','user_permissions','is_staff','password','date_joined',
#        'is_active','is_verified','is_email_verified','is_phone_verified')

class EmailForm(forms.Form):
    code = forms.CharField(max_length=8, required=True, help_text='Enter Email Address')

class LoginForm(ModelForm):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'placeholder': 'Enter your email address here'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Enter your passport here'}))
    
    class Meta:
        model = User
        fields = ('email','password')
    
class VerifyForm(forms.Form):
    code = forms.CharField(max_length=8, required=True, help_text='Enter code')
