from django.conf.urls import patterns, url

from gallery import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='gallery')
)
