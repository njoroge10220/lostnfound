"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path 
from django.conf.urls.static import static
from django.conf import settings

from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', views.RegisterView.as_view(), name='register'),
    path('api/login/', views.loginView.as_view(), name='login'),    
    path('api/lost-item-create/', views.Lost_ItemCreateView.as_view(), name='lost-item'),
    path('api/lost-item/delete/<int:pk>/', views.Lost_ItemDeleteView.as_view(), name='lost-item-delete'),
    path('api/found-item-create/', views.Found_ItemCreateView.as_view(), name='found-item'),
    path('api/found-item/delete/<int:pk>/', views.Found_ItemDeleteView.as_view(), name='found-item-delete'),
    ]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
    
