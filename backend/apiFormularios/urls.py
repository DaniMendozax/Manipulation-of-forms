from django.urls import path
from .views import *

urlpatterns = [
    path('forms/', ViewForm.as_view(), name='form-GET' ),
    path('forms/create', CreateForm.as_view(), name='form-POST'),
    path('forms/<int:pk>', ViewFormID.as_view(), name='form-id'),
    path('forms/update/<int:pk>', UpdateForm.as_view(), name='form-PUT'),
    path('forms/delete/<int:pk>', DeleteForm.as_view(), name='form-DELETE'),
    #uls para las respuesta 
    path('responses/', ViewReply.as_view(), name='responses-GET'),
    path('responses/create', CreateReply.as_view(), name='responses-POST')
    ]