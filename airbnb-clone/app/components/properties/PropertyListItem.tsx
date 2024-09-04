import Image from 'next/image';
import { PropertyType } from './PropertyList';
import { useRouter } from 'next/navigation';

interface PropertyProps {
    property: PropertyType,
}

const PropertyListItem: React.FC<PropertyProps> = ({
    property
}) => {
    const router = useRouter();

    const baseUrl = 'http://localhost:8000';
    const relativePath = property.image;
    const fullUrl = `${baseUrl}${relativePath}`;

    return (
        <div 
            className="cursor-pointer"
            onClick={() => router.push(`/properties/${property.id}`)} 
        >
            {/* tailwind will make the square */}
            <div className="m-3 relative overflow-hidden aspect-square rounded-xl">
                <Image 
                    fill
                    src={fullUrl}
                    sizes="(max-width: 768px) 768px, (max-width:1200px): 768px, 768px"
                    alt="beach house"
                    className='hover:scale-110 object cover transition h-full w-full'
                />
            </div>

            <div className='m-3'>
                <p className='text-lg font-bold'>{property.title}</p>
            </div>

            <div className="m-3">
                <p className='text-sm text-gray-500'>${property.price_per_night}</p>
            </div>

        </div>
    )
}

export default PropertyListItem;