import Image from 'next/image'

const MyReservationPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <h1 className='mt-6 mb-12 text-3xl'>My reservations</h1>
            <div className="space-y-8">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl "> 
                            <Image
                                fill
                                src="/beach1.jpeg"
                                alt="Beach house"
                                className="hover:scale-110 object cover"
                            />
                        </div>
                    </div>
                    <div> 
                        <div className="col-span-3 ml-8">
                            <h2 className="my-4 text-2xl">Property name</h2>

                            <p className='mb-2'><strong>Check in date: </strong> 15/08/2024</p>
                            <p className='mb-2'><strong>Check out date: </strong> 18/08/2024</p>
                            <p className='mb-2'><strong>Number of nights: </strong> 2</p>
                            <p className='mb-2'><strong>Total price: </strong> $200</p>

                            <div className="mt-6 inline-block cursor-pointer p-6 bg-airbnb text-white rounded-xl">See Property</div>
                        </div>
                    </div>
                </div>

                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl "> 
                            <Image
                                fill
                                src="/beach1.jpeg"
                                alt="Beach house"
                                className="hover:scale-110 object cover"
                            />
                        </div>
                    </div>
                    <div> 
                        <div className="col-span-3 ml-8">
                            <h2 className="my-4 text-2xl">Property name</h2>

                            <p className='mb-2'><strong>Check in date: </strong> 15/08/2024</p>
                            <p className='mb-2'><strong>Check out date: </strong> 18/08/2024</p>
                            <p className='mb-2'><strong>Number of nights: </strong> 2</p>
                            <p className='mb-2'><strong>Total price: </strong> $200</p>

                            <div className="mt-6 inline-block cursor-pointer p-6 bg-airbnb text-white rounded-xl">See Property</div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default MyReservationPage