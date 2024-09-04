from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes, authentication_classes

from .forms import PropertyForm
from .models import Property
from .serializers import PropertiesListSerializer
from .serializers import PropertyDetailSerializer


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

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def property_detail(request, pk):
    property = Property.objects.get(pk=pk)
    serializer = PropertyDetailSerializer(property, many=False)
    return JsonResponse(serializer.data)



@api_view(['POST', 'FILES'])
def create_property(request):
    print("in post api")
    form = PropertyForm(request.POST, request.FILES)
    if form.is_valid():
        property = form.save(commit=False)
        property.landlord = request.user
        property.save()
        return JsonResponse({'data': 'Property created successfully'})
    else:
        print('error', form.errors, form.non_field_errors)
        return JsonResponse({'errors': form.errors.as_json()}, status=400)