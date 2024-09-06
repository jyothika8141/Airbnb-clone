'use client';

import { useState, useEffect } from 'react';
import PropertyListItem from "./PropertyListItem";
import apiService from '@/app/services/apiService';


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
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        console.log("i am here in landlord page");
        let url = `/api/properties/`;

        if (landlord_id) {
            url += `?landlord_id=${landlord_id}`;
        }

        console.log("url:", url);
    
        const temProperties = await apiService.get(url);

        setProperties(temProperties.data);
    };

    useEffect(() => {
        getProperties();
    }, []);
    
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