from django.shortcuts import render

from gallery.models import Image

def index(request):
    latest_gallery_list = Image.objects.all().order_by('-date')
    context = {'latest_gallery_list': latest_gallery_list}
    return render(request, 'gallery/index.html', context)
