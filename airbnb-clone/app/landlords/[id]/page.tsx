import Image from 'next/image'
import ContactButton from '@/app/components/ContactButton'
import PropertyList from '@/app/components/properties/PropertyList'


const LandlordDefaultPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap4">
            <aside className="col-span-1 mb-4">
                <div className="flex flex-col items-center p-6 rounded-xl border-gray-300 shadow-xl">
                    <Image 
                        src="/"
                        width={200}
                        height={200}
                        alt="Landlord name"
                        className="rounded-full"
                    />

                    <h1 className='mt-6 text-2xl'>Landlord name</h1>

                    <ContactButton />
                </div>
            </aside>

            <aside className="col span-1 md:col-span-3 pl-0 md:pl-6">
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 ">
                    <PropertyList />
                </div>
            </aside>
        </div>
    </main>
  )
}


export default LandlordDefaultPage