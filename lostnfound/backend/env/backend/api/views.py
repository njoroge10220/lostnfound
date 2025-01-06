
from django.shortcuts import render

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.parsers import MultiPartParser, FormParser

from rest_framework import generics
from rest_framework.response import Response

from .models import Lost_Item, Found_Item
from .serializers import UserSerializer, LostItemSerializer, FoundItemSerializer



# Create your views here.

#user registration view
class RegisterView(generics.ListCreateAPIView):    
    queryset = User.objects.all()  
    serializer_class = UserSerializer
    
    
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        
        if User.objects.filter(username=username).exists():
            return Response({'error': "Username is used by another"})
        
        newUser = User.objects.create_user(username=username, email=email, password=password)
        newUser.save()
        print(username, email, password)
        return Response({'message': "user is registered successfully"})
    
    
#user login view
class loginView(generics.ListCreateAPIView):
    queryset = User.objects.all()  
    serializer_class = UserSerializer
     
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        loginUser = authenticate(username=username, password=password)
        
        if loginUser:
            login(request, loginUser)
            return Response({'message': "user logged in successfully"})
        
        return Response({'error': "Credentials are invalid"})
 
 
#lost item views
class Lost_ItemCreateView(generics.ListCreateAPIView):
    queryset = Lost_Item.objects.all()
    serializer_class = LostItemSerializer
    parser_classes = (MultiPartParser, FormParser)
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception = True)
               
        serializer.save()
        return Response(serializer.data)

class Lost_ItemDeleteView(generics.DestroyAPIView):
    queryset = Lost_Item.objects.all()     
    serializer_class = LostItemSerializer
    
        
                                   

#found item views
class Found_ItemCreateView(generics.ListCreateAPIView):
    queryset = Found_Item.objects.all()
    serializer_class = FoundItemSerializer
    parser_classes = (MultiPartParser, FormParser)
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception = True)
                
        serializer.save()
        return Response(serializer.data)


class Found_ItemDeleteView(generics.DestroyAPIView):
    queryset = Found_Item.objects.all()
    serializer_class = FoundItemSerializer
    

       
        