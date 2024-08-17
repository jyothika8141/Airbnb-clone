import Image from 'next/image'

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950">
                <Image 
                    src="/tropical.png"
                    alt="Category-tropical"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Tropical</span>
            </div>

            <div className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950">
                <Image 
                    src="/beachside.png"
                    alt="Category-beachside"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Beachside</span>
            </div>


            <div className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950">
                <Image 
                    src="/pool.png"
                    alt="Category-pool"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Pool</span>
            </div>

            <div className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950">
                <Image 
                    src="/countryside.png"
                    alt="Category-countryside"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Countryside</span>
            </div>

            <div className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950">
                <Image 
                    src="/desert.png"
                    alt="Category-desert"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Desert</span>
            </div>

            <div className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950">
                <Image 
                    src="/mansions.png"
                    alt="Category-mansions"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Mansions</span>
            </div>

            <div className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950">
                <Image 
                    src="/camping.png"
                    alt="Category-camping"
                    width={20}
                    height={20}
                />

                <span className='text pt-2'>Camping</span>
            </div>

            <div className="pb-4 flex flex-col items-center border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-950">
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