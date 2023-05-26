from django.shortcuts import render,HttpResponse,redirect,get_object_or_404
from django.views import View
from .forms import UserCreationForm,EmailForm,VerifyForm,LoginForm
from verify_email.email_handler import send_verification_email
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
from django.contrib.auth import authenticate, login, logout
from .decorators import email_verification_required,active_verification_required,user_sigin,verification_required
from django.contrib import messages
from django.core.mail import send_mail, BadHeaderError
from django.contrib.auth.forms import PasswordResetForm
from .models import User
from .verify import check_email,send_email,send_phone,check_phone
from django.template.loader import render_to_string
from django.db.models.query_utils import Q
from django.utils.http import urlsafe_base64_encode
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
# Create your views here.

signout_deco = [login_required]
sigin_reg_deco = [user_sigin(User,'Home')]

class Home(View):
    def get(self,request):

        context = {}

        return redirect('Ijmb_Home')
        # return render(request, 'account/index.html', context)

    def post(self,request):
        return render(request, 'account/index.html')

@method_decorator(sigin_reg_deco, name='get')
@method_decorator(sigin_reg_deco, name='post')
#@method_decorator(ver)
class Login(View):
    def get(self,request):
        form = LoginForm()
        context = {'form':form}

        return render(request, 'account/login.html', context)

    def post(self,request):
        if request.user.is_authenticated:
            return redirect('/')
        else:
            email = request.POST['email']
            password = request.POST['password']
            user = authenticate(email=email, password=password)
            u = User.objects.get(email=email)
            if user is not None:
                if user.is_active:
                    # if u.is_email_verified:
                    login(request, user)
                    if request.GET.get('next'):
                        return redirect(request.GET.get('next'))
                    elif u.is_staff:
                        return redirect('Staff_Home')
                    else:
                        return redirect('Home')
                    # else:
                    #     messages.error(request,"Your email is not verified, Please verify before login")
                    #     return redirect('Login')                    
                else:
                    messages.error(request,"Your account is disabled, Contact Us via Suppport Team")
                    return redirect('Login')                    
            else:
                messages.error(request, "Invalid username or password")
                return redirect('Login')

@method_decorator(signout_deco, name='get')
class Logout(View):
    def get(self,request):
        logout(request)
        return redirect('Login')

@method_decorator(sigin_reg_deco, name='get')
@method_decorator(sigin_reg_deco, name='post')
class Register(View):
    def get(self,request):
        
        context = {'form':UserCreationForm()}

        return render(request, 'account/register.html', context)

    def post(self,request):

        form = UserCreationForm(request.POST)
        print(form.errors)
        if form.is_valid():
#            send_phone(form.cleaned_data.get('phone'))
            data = form.save(commit=False)
            data.country = request.POST['country']
            data.state = request.POST['state']
            data.city = request.POST['city']
            data.save()
            # try:
            #     send_verification_email(request, data)
            #     messages.success(request, "Account created. an activation link has been sent to your email inbox to verify your account")
            return redirect('Login')
            # except:
            #     messages.success(request, "Account not created. check your internet connection or try again later.")
            #     return redirect('Register')
        else:
                messages.error(request, "Registration form is not filled correctly")
                return redirect('Register')

@method_decorator(sigin_reg_deco, name='get')
@method_decorator(sigin_reg_deco, name='post')
class password_reset_request(View):
    def get(self,request):
        password_reset_form = PasswordResetForm()
        return render(request=request, template_name="account/password_reset.html", context={"password_reset_form":password_reset_form})        

    def post(self,request):
        password_reset_form = PasswordResetForm(request.POST)
        if password_reset_form.is_valid():
            data = password_reset_form.cleaned_data['email']
            associated_users = User.objects.filter(Q(email=data))
            if associated_users.exists():
                for user in associated_users:
                    subject = "Password Reset Requested"
                    email_template_name = "account/password_reset_email.txt"
                    c = {
                    "email":user.email,
                    'domain':'127.0.0.1:8000',
                    'site_name': 'Yumsuk Journals',
                    "uid": urlsafe_base64_encode(force_bytes(user.pk)),
                    "user": user,
                    'token': default_token_generator.make_token(user),
                    'protocol': 'http',
                    }
                    email = render_to_string(email_template_name, c)
                    try:
                        send_mail(subject, email, 'noreply<support@yumsukijmb.com>' , [user.email], fail_silently=False)
                    except BadHeaderError:
                        return HttpResponse('Invalid header found.')
                    except:
                        messages.error(request,'an error occured while trying to send password reset details, Check your internet connection or try again later')
                        return redirect('Login')
                    return redirect ("/accounts/password_reset/done/")
    
#@method_decorator(login_required, name='get')
#@method_decorator(verification_required, name='get')
#@method_decorator(login_required, name='post')
#@method_decorator(verification_required, name='post')
# class Verify_Code(View):
#     def get(request):
#         form = VerifyForm()
#         return render(request, 'account/verify.html', {'form': form})

#     def post(request):
#         form = VerifyForm(request.POST)
#         if form.is_valid():
#             code = form.cleaned_data.get('code')
#             if check_email(request.user.phone, code):
#                 request.user.is_phone_verified = True
#                 request.user.save()
#                 return redirect('Login')


