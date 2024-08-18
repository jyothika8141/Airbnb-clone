import PropertyList from '../components/properties/PropertyList'


const MyPropertiesPage= () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <h1 className='mt-6 mb-12 text-3xl'>My properties</h1>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 ">
                <PropertyList />
            </div>
        </main>
    )
}

export default MyPropertiesPage;