import Image from 'next/image'
import Link from 'next/link';
import apiService from '../services/apiService'

const MyReservationPage = async () => {
    const reservationsArray = await apiService.get('/api/auth/myreservations');
    // const reservationsArray = Array.isArray(reservations) ? reservations : [];

    const baseUrl = 'http://localhost:8000';

    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <h1 className='mt-6 mb-12 text-3xl'>My reservations</h1>

            <div className="space-y-8">
                {reservationsArray.map((reservation: any) => {
                    return (
                        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                            <div className="col-span-1">
                                <div className="relative overflow-hidden aspect-square rounded-xl "> 
                                    <Image
                                        fill
                                        src={`${baseUrl}${reservation.property.image}`}
                                        alt="Beach house"
                                        className="hover:scale-110 object cover"
                                    />
                                </div>
                            </div>
                            <div> 
                                <div className="col-span-3 ml-8">
                                    <h2 className="my-4 text-2xl">{reservation.property.title}</h2>

                                    <p className='mb-2'><strong>Check in date: </strong> {reservation.start_date}</p>
                                    <p className='mb-2'><strong>Check out date: </strong> {reservation.end_date}</p>
                                    <p className='mb-2'><strong>Number of nights: </strong> {reservation.number_of_nights}</p>
                                    <p className='mb-2'><strong>Total price: </strong> ${reservation.total_price}</p>

                                    <Link 
                                        href={`/properties/${reservation.property.id}`}
                                        className="mt-6 inline-block cursor-pointer p-6 bg-airbnb text-white rounded-xl"
                                    >
                                        See Property
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}                
            </div>
        </main>
    )
}

export default MyReservationPage