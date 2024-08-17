import Image from 'next/image'

const PropertyListItem = () => {
    return (
        <div className="cursor-pointer">
            {/* tailwind will make the square */}
            <div className="m-3 relative overflow-hidden aspect-square rounded-xl">
                <Image 
                    fill
                    src="/beach1.jpeg"
                    sizes="(max-width: 768px) 768px, (max-width:1200px): 768px, 768px"
                    alt="beach house"
                    className='hover:scale-110 object cover transition h-full w-full'
                />
            </div>

            <div className='mt-2'>
                <p className='text-lg font-bold'>Proprty name</p>
            </div>

            <div className="mt-2">
                <p className='text-sm text-gray-500'>$200 per night</p>
            </div>

        </div>
    )
}

export default PropertyListItem;