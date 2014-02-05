from django.conf.urls import patterns, include, url

from django.conf import settings
from django.conf.urls.static import static

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'kysat.views.index', name='index'),
    url(r'^about[/]$', 'kysat.views.about', name='about'),
    url(r'^blog/', include('blog.urls')),
    url(r'^gallery/', include('gallery.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

)

# Static Passthrough(s) * Dirty Hack *
urlpatterns += static('/cesium/', document_root='/vagrant/kysat/static/cesium/')
urlpatterns += static('/css/',    document_root='/vagrant/kysat/static/css/')
urlpatterns += static('/img/', document_root='/vagrant/kysat/static/img/')
urlpatterns += static('/images/', document_root='/vagrant/kysat/static/images/')
urlpatterns += static('/js/',     document_root='/vagrant/kysat/static/js/')
urlpatterns += static('/tle/',    document_root='/vagrant/kysat/static/tle/')
urlpatterns += static('/media/', document_root='/vagrant/kysat/media/')
