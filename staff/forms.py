from django import forms
from django.forms import ModelForm
from program.models import Registration,Olevel
from program.models import Registration,Olevel
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

class SummaryProgramForm(ModelForm):
    class Meta:
        model = Registration
        fields = ('session','p_type','faculty','course','p_subject1','p_subject2','p_subject3')
    def __init__(self, *args, **kwargs):
        super(SummaryProgramForm,self).__init__(*args,**kwargs)
        for i in self.fields:
            self.fields[i].widget.attrs['readonly'] = True
            self.fields[i].widget.attrs['class'] = 'form-control'

class SummaryPersonalForm(ModelForm):
    class Meta:
        model = Registration
        fields = ('first_name','last_name','other_name','dob','gender','marital_status','disability','disability_type','state_of_origin','previous_ijmb_number',
        'id_type','id_number','id_issued','id_expiry','email','phone','address','postal','state','lga','post_type')
        widgets = {
            'state' : forms.Select(),
            'state_of_origin' : forms.Select(),
            'lga' : forms.Select(),
            'dob' : forms.DateInput(attrs={'type':'date'}),
            'id_issued' : forms.DateInput(attrs={'type':'date'}),
            'id_expiry' : forms.DateInput(attrs={'type':'date'}),
        }

    def __init__(self, *args, **kwargs):
        super(SummaryPersonalForm,self).__init__(*args,**kwargs)
        not_required = ('other_name','previous_ijmb_number','id_issued','id_expiry','disability_type')
        select = ('gender','marital_status','disability','state_of_origin','id_type','state','lga',)
        for i in self.fields:
            self.fields[i].widget.attrs['readonly'] = True
            self.fields[i].widget.attrs['class'] = 'form-control'

class SummaryEducationForm(ModelForm):
    class Meta:
        model = Olevel
        exclude = ('registration',)

    def __init__(self, *args, **kwargs):
        super(SummaryEducationForm,self).__init__(*args,**kwargs)
        select = ('registration','o_level_status','disability','examination_type')
        for i in self.fields:
            self.fields[i].widget.attrs['readonly'] = True
            self.fields[i].widget.attrs['class'] = 'form-control'

class SummaryNextOfKinForm(ModelForm):
    class Meta:
        model = Registration
        fields = ('next_of_kin_name','next_of_kin_email','next_of_kin_phone','next_of_kin_address','next_of_kin_relationship','next_of_kin_occupation','next_of_kin_occupation_address','post_type')

    def __init__(self, *args, **kwargs):
        super(SummaryNextOfKinForm,self).__init__(*args,**kwargs)
        not_required = ('next_of_kin_email')
        select = ('next_of_kin_relationship',)
        for i in self.fields:
            self.fields[i].widget.attrs['readonly'] = True
            self.fields[i].widget.attrs['class'] = 'form-control'

class SummaryRequiremtForm(ModelForm):
    class Meta:
        model = Registration
        fields = ('file_photo_passport','file_identification','file_first_certificate','file_first_testimonial','file_second_certificate',
        'file_second_testimonial','file_awaiting_exam_slip', 'file_scratch_card','post_type')

    def __init__(self, *args, **kwargs):
        super(SummaryRequiremtForm,self).__init__(*args,**kwargs)
        required = ('file_photo_passport','file_identification')
        for i in self.fields:
            self.fields[i].widget.attrs['readonly'] = True
            self.fields[i].widget.attrs['class'] = 'form-control'

class SummaryDoneForm(ModelForm):
    class Meta:
        model = Registration
        fields = ('status',)
    def __init__(self, *args, **kwargs):
        super(SummaryDoneForm,self).__init__(*args,**kwargs)
        for i in self.fields:
            self.fields[i].widget.attrs['class'] = 'form-select mb-2'
