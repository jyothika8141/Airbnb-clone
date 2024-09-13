'use client'

import { useState } from 'react'
import Image from 'next/image'
import useSearchModal, { SearchQuery } from '../hooks/useSearchModal'

const Categories = () => {
    const searchModal = useSearchModal();
    const [category, setCategory] = useState('');

    const _setCategory = (_category: string) => {
        setCategory(_category);

        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category
        }

        searchModal.setQuery(query);
    }

    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div
                onClick={() => _setCategory('')} 
                className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950"
            >
                <Image 
                    src="/all.png"
                    alt="Category-all"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>All</span>
            </div>
            <div
                onClick={() => _setCategory('tropical')} 
                className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950"
            >
                <Image 
                    src="/tropical.png"
                    alt="Category-tropical"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Tropical</span>
            </div>

            <div
                onClick={() => _setCategory('beachside')} 
                className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950"
            >
                <Image 
                    src="/beachside.png"
                    alt="Category-beachside"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Beachside</span>
            </div>


            <div
                onClick={() => _setCategory('pool')} 
                className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950"
            >
                <Image 
                    src="/pool.png"
                    alt="Category-pool"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Pool</span>
            </div>

            <div 
                onClick={() => _setCategory('countryside')}
                className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950"
            >
                <Image 
                    src="/countryside.png"
                    alt="Category-countryside"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Countryside</span>
            </div>

            <div 
                onClick={() => _setCategory('desert')}
                className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950"
            >
                <Image 
                    src="/desert.png"
                    alt="Category-desert"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Desert</span>
            </div>

            <div
                onClick={() => _setCategory('mansions')} 
                className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950"
            >
                <Image 
                    src="/mansions.png"
                    alt="Category-mansions"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Mansions</span>
            </div>

            <div 
                onClick={() => _setCategory('camping')}
                className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950"
            >
                <Image 
                    src="/camping.png"
                    alt="Category-camping"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Camping</span>
            </div>

            <div 
                onClick={() => _setCategory('omg')}
                className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950"
            >
                <Image 
                    src="/omg.png"
                    alt="Category-OMG!"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>OMG!</span>
            </div>
        </div>
    )
}
export default Categories;