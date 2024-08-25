from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes, authentication_classes


from .models import Property
from .serializers import PropertiesListSerializer

@api_view(['GET'])
@authentication_classes([]) #no need to authenticate to get the properties page
@permission_classes([])

def properties_list(request):
    properties = Property.objects.all()
    serializer = PropertiesListSerializer(properties, many=True)
    print("hello")
    print(serializer.data)

    # return JsonResponse({'data': 'You have subscribed to the Newsletter'}) 

    return JsonResponse({
        "data": serializer.data
    })