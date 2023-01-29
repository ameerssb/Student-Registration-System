from django import template
import re
from django.utils.safestring import mark_safe
register = template.Library()

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