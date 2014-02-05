from django.shortcuts import render

from blog.models import Post

def index(request):
    latest_post_list = Post.objects.all().order_by('-date')[:5]
    context = {'latest_post_list': latest_post_list}
    return render(request, 'blog/index.html', context)
