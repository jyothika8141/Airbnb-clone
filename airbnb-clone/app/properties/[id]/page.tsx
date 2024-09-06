import ReservationSidebar from "@/app/components/properties/ReservationSidebar"
import Image from "next/image"
import Link from "next/link"

import apiService from "@/app/services/apiService"
import { getUserId } from "@/app/lib/actions"

const PropertyDetailsPage = async ({params}: {params: {id: string }}) => {
    const property = await apiService.get(`/api/properties/${params.id}`);
    const userId = await getUserId();

    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-8">
        <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
            <Image 
                fill
                src={`http://localhost:8000${property.image}`}
                className="object-cover w-full h-full"
                alt="Beach house"
            />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="py-6 pr-6 col-span-3">
                <h1 className="mb-4 text-4xl">{property.title}</h1>

                <span className="mb-6 text-lg text-gray-600">
                {property.guests} guests - {property.bedrooms} bedrooms - {property.bathroom} bathroom

                    
                </span>
                <hr className="mt-4" />

                <Link 
                    href={`/landlords/${property.landlord.id}`}
                    className="py-4 flex items-center space-x-4"
                >
                    {property.landlord.avatar && (
                        <Image 
                            src={property.landlord.avatar}
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="The user name"
                        />
                    )}                   

                    <p className="text-2xl"><strong>{property.landlord.name}</strong> is your host</p>

                </Link>

                <hr />

                <p className="mt-6 text-lg">
                    {property.description}
                </p>
            </div>

            
            <ReservationSidebar 
                userId={userId}
                property={property}
            />
            
        </div>
    </main>    
    )
}

export default PropertyDetailsPage