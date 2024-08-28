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

const PropertyList = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const url = 'http://localhost:8000/api/properties';
        
        await fetch(url, {
            method: 'GET', 
        })
            .then(response => response.json())
            .then((json) =>{
                console.log('json', json);

                setProperties(json.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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