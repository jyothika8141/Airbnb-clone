from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes, authentication_classes

from .forms import PropertyForm
from .models import Property, Reservation
from .serializers import PropertiesListSerializer
from .serializers import PropertyDetailSerializer, ReservationListSerializer


@api_view(['GET'])
@authentication_classes([]) #no need to authenticate to get the properties page
@permission_classes([])

def properties_list(request):
    properties = Property.objects.all()
    serializer = PropertiesListSerializer(properties, many=True)

    #
    # Filter
    landloard_id = request.GET.get('landlord_id', '')
    
    if landloard_id :
        properties = properties.filter(landlord_id=landloard_id)

    return JsonResponse({
        "data": serializer.data
    })
    #
    #

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def property_detail(request, pk):
    property = Property.objects.get(pk=pk)
    serializer = PropertyDetailSerializer(property, many=False)
    return JsonResponse(serializer.data)


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def property_reservation(request, pk):
    property = Property.objects.get(pk=pk)
    reservation = property.reservations.all()
    serializer = ReservationListSerializer(reservation, many=True)

    return JsonResponse(serializer.data, safe=False)



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
    
    
@api_view(['POST'])
def book_property(request, pk):
    try:
        start_date = request.POST.get('start_date', '')
        end_date = request.POST.get('end_date', '')
        number_of_nights = request.POST.get('number_of_nights', '')
        total_price = request.POST.get('total_price', '')
        guest = request.POST.get('guests', '')

        property = Property.objects.get(pk=pk)

        Reservation.objects.create(
            property=property,
            start_date=start_date,
            end_date=end_date,
            number_of_nights=number_of_nights,
            total_price=total_price,
            guest=guest,
            created_by=request.user
        )
        return JsonResponse({"success": True})

    except Exception as e:
        print('Error', e)

        return JsonResponse({'success': False})