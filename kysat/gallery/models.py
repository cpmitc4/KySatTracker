from django.db import models

class Image(models.Model):
    title = models.CharField(max_length=64)
    date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='gallery')

    def __unicode__(self):
        return self.title
