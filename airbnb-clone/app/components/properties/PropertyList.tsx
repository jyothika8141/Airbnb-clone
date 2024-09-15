'use client';

import { format } from 'date-fns';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import PropertyListItem from "./PropertyListItem";
import apiService from '@/app/services/apiService';
import useSearchModal from '@/app/hooks/useSearchModal';


export type PropertyType = {
    id: string;
    title: string
    price_per_night: number,
    image: string 
}

interface PropertyListProps {
    landlord_id: string | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
    landlord_id
}) => {
    const params = useSearchParams();
    const searchModal = useSearchModal();
    const country = searchModal.query.country;
    const numGuests = searchModal.query.guests;
    const numBedrooms = searchModal.query.bedrooms;
    const numBathrooms = searchModal.query.bathrooms;
    const checkinDate = searchModal.query.checkIn;
    const checkoutDate = searchModal.query.checkOut;
    const category = searchModal.query.category;
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        console.log("i am here in landlord page");
        let url = `/api/properties/`;

        if (landlord_id) {
            url += `?landlord_id=${landlord_id}`;
        } else {
            let urlQuery = '';
            if (country) {
                urlQuery += '&country=' + country;
            }
            if (numGuests) {
                urlQuery += '&numGuests=' + numGuests;
            }
            if (numBedrooms) {
                urlQuery += '&numBedrooms=' + numBedrooms;
            }
            if (numBathrooms) {
                urlQuery += '&numBathrooms=' + numBathrooms;
            }
            if (category) {
                urlQuery += '&category=' + category;
            }
            if (checkinDate) {
                urlQuery += '&checkin=' + format(checkinDate, 'yyyy-MM-dd');
            }
            if (checkoutDate) {
                urlQuery += '&checkout=' + format(checkoutDate, 'yyyy-MM-dd');
            }

            if (urlQuery.length) {
                urlQuery = '?' + urlQuery.substring(1);

                url += urlQuery;
            }
            
        }

        console.log("url123:", url);
    
        const temProperties = await apiService.get(url);

        setProperties(temProperties.data);
    };

    useEffect(() => {
        getProperties();
    }, [category, searchModal.query, params]);
    
    return(
        <>  
            {properties.map((property) => {
                return (
                    <PropertyListItem 
                        key={property.id}
                        property={property}
                    />
                )
            })}           
        </>

    )
}

export default PropertyList;