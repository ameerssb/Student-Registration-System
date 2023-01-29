from django import template
from program.models import Session,Program_Type,Course,Faculty,Subject
import re
from django.utils.safestring import mark_safe
register = template.Library()

@register.filter
def faculties(type):
    obj = Faculty.objects.filter(program_type=type)
    return obj

@register.filter
def courses(type,faculty):
    obj = Course.objects.filter(program_type=type,faculty=faculty)
    return obj

@register.filter
def subjects(course):
    obj = Subject.objects.filter(name=course)
    return obj

@register.filter
def highlight_search(text, search):
    sp = search.split()
    for i in sp:
        text = text.replace(i,f'#{i}#')
    pattern = r'\#(.*?)\#'
    replacement = '<span class="fw-bold">\\1</span>'
    highlighted = re.sub(pattern=pattern,repl=replacement,string=text)
    return mark_safe(highlighted)
    
@register.filter
def first_char(text):
    return mark_safe(text[0].upper())