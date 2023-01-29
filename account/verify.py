import os
from twilio.rest import Client
from twilio.base.exceptions import TwilioRestException
from django.conf import settings

TWILIO_ACCOUNT_SID = 'AC32c252641b1757d2b9b5bb2abc595f8b' #settings.TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN = '3558e938fd748b76702f26f7ebc5174c' #settings.TWILIO_AUTH_TOKEN
TWILIO_VERIFY_SERVICE_SID = 'VA4f414fff95fec7a3c1d27943a04b97cc' #settings.TWILIO_VERIFY_SERVICE_SID

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
verify = client.verify.services(TWILIO_VERIFY_SERVICE_SID)


def send_phone(phone):
    verify.verifications.create(to=phone, channel='sms')

def check_phone(phone, code):
    try:
        result = verify.verification_checks.create(to=phone, code=code)
    except TwilioRestException:
        print('no')
        return False
    return result.status == 'approved'

def send_email(email):
    verify.verifications.create(to=email, channel='email')

def check_email(email, code):
    try:
        result = verify.verification_checks.create(to=email, code=code)
    except TwilioRestException:
        return False
    return result.status == 'approved'
