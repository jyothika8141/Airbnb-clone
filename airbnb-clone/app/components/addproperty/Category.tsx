import Image from "next/image";

interface CateforiesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CateforiesProps> = ({ 
    dataCategory, setCategory 
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                <div
                    onClick={() => setCategory('tropical')} 
                    className={`pb-4 flex flex-col items-center border-b-2 ${dataCategory == 'tropical' ? 'border-gray-800' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-950`}
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
                    onClick={() => setCategory('beachside')} 
                    className={`pb-4 flex flex-col items-center border-b-2 ${dataCategory == 'beachside' ? 'border-gray-800' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-950`}
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
                    onClick={() => setCategory('pool')} 
                    className={`pb-4 flex flex-col items-center border-b-2 ${dataCategory == 'pool' ? 'border-gray-800' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-950`}
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
                    onClick={() => setCategory('countryside')} 
                    className={`pb-4 flex flex-col items-center border-b-2 ${dataCategory == 'countryside' ? 'border-gray-800' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-950`}
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
                    onClick={() => setCategory('desert')} 
                    className={`pb-4 flex flex-col items-center border-b-2 ${dataCategory == 'desert' ? 'border-gray-800' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-950`}
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
                    onClick={() => setCategory('mansions')} 
                    className={`pb-4 flex flex-col items-center border-b-2 ${dataCategory == 'mansions' ? 'border-gray-800' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-950`}
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
                    onClick={() => setCategory('camping')} 
                    className={`pb-4 flex flex-col items-center border-b-2 ${dataCategory == 'camping' ? 'border-gray-800' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-950`}
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
                    onClick={() => setCategory('omg')} 
                    className={`pb-4 flex flex-col items-center border-b-2 ${dataCategory == 'omg' ? 'border-gray-800' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-950`}
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
        </>
    )
}

export default Categories;