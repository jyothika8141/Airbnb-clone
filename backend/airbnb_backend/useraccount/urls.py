from django.urls import path

from dj_rest_auth.jwt_auth import get_refresh_view
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView, LogoutView, UserDetailsView
from rest_framework_simplejwt.views import TokenVerifyView

from . import api

urlpatterns = [
    path('register/', RegisterView.as_view(), name='api_rest_register'),
    path('login/', LoginView.as_view(), name='api_rest_login'),
    path('logout/', LogoutView.as_view(), name='api_rest_logout'),
    path('token/refresh/', get_refresh_view().as_view(), name='api_rest_refresh_token'),
    path('myreservations/', api.reservations_list, name='api_reservations_list'),
    path('<uuid:pk>/', api.landlord_detail, name='api_landlord_detail'),
]
