import ReservationSidebar from "@/app/components/properties/ReservationSidebar"
import Image from "next/image"

const PropertyDetailsPage = () => {
    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-8">
        <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
            <Image 
                fill
                src="/beach1.jpeg"
                className="object-cover w-full h-full"
                alt="Beach house"
            />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="py-6 pr-6 col-span-3">
                <h1 className="mb-4 text-4xl">Property name</h1>

                <span className="mb-6 text-lg text-gray-600">
                    4 guests - 2 bedrooms - 1 bathroom

                    
                </span>
                <hr className="mt-4" />

                <div className="py-4 flex items-center space-x-4">
                    <Image 
                        src="/"
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt="The user name"
                    />

                    <p className="text-2xl"><strong>Jyothika Manoj</strong> is your host</p>

                </div>

                <hr />

                <p className="mt-6 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad modi aliquid suscipit fugiat veritatis esse, qui beatae amet, nesciunt excepturi est accusamus autem vero ex reiciendis libero aperiam, molestias inventore?
                </p>
            </div>

            
            <ReservationSidebar />
            
        </div>
    </main>    
    )
}

export default PropertyDetailsPage