
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Found_Item, Lost_Item

#user serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        
class LostItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lost_Item
        fields = ['id', 'lost_item_name', 'lost_item_description', 'owner_contact', 'lost_item_img' ]

class FoundItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Found_Item
        fields = ['id', 'found_item_name', 'found_item_description', 'founder_contact', 'found_item_img' ]

