
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Lost_Item(models.Model):
    lost_item_name  = models.CharField(max_length=100)
    lost_item_description = models.TextField(blank=False)
    owner_contact = models.CharField(max_length=15, null= True)
    lost_item_img = models.ImageField(upload_to='images/lost/')
    
    def __str__(self):
        return f'lost Item name-{self.lost_item_name} lost Item descrption-{self.lost_item_description} owner contact-{self.owner_contact} lost Item img-{self.lost_item_img}'
    
class Found_Item(models.Model):
    found_item_name = models.CharField(max_length=100)
    found_item_description = models.TextField(blank=False)
    founder_contact = models.CharField(max_length=15, null= True)
    found_item_img = models.ImageField(upload_to='images/found/')

    def __str__(self):
        return f'found Item name-{self.found_item_name} found Item descrption-{self.found_item_description} founder contact-{self.founder_contact} found Item img-{self.found_item_img}'

    
    