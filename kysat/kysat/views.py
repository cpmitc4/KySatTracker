from django.shortcuts import render

def index(request):
    if request.META['HTTP_USER_AGENT'].find('MSIE') > 0:
        return render(request, 'ie.html')
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')
