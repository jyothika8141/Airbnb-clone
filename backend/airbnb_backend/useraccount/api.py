from django.http import JsonResponse

from rest_framework.decorators import api_view, permission_classes, authentication_classes

from .models import User
from .serializers import UserDetailSerializer

from property.serializers import ReservationListSerializer

@api_view(['GET'])
@permission_classes([])
@authentication_classes([])
def landlord_detail(request, pk):
    user = User.objects.get(pk=pk)
    serializer = UserDetailSerializer(user)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def reservations_list(request):
    reservations = request.user.reservations.all()
    serializer = ReservationListSerializer(reservations, many=True)
    return JsonResponse(serializer.data, safe=False)
