from django.urls import path
from django.conf.urls.static import static

from . import api

urlpatterns = [
    path('', api.properties_list, name='api_properties_list'),
]


