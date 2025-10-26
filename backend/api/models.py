from django.db import models

class Quote(models.Model):
    quote = models.CharField()
    author = models.CharField()
    post_on = models.DateField()
    votes = models.BigIntegerField()

    def __str__(self):
        return f"On {self.post_on} by {self.author}"

class Comment(models.Model):
    quote = models.ForeignKey(Quote,on_delete=models.CASCADE)
    parent = models.ForeignKey('self',null=True,blank=True,on_delete=models.CASCADE,related_name='replies')
    comment = models.CharField()

    def __str__(self):
        return self.comment