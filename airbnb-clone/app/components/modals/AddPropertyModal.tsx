'use client';

import Image from 'next/image';

import { ChangeEvent, useState } from "react"
import Modal from "./Modal"
import Categories from "../addproperty/Category"
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"
import Custombutton from "../forms/CustomButton";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";

import apiService from '@/app/services/apiService';
import { useRouter } from 'next/navigation';

const AddPropertyModal = () => {
    //States
    const [currentStep, setCurrentStep] = useState(1);
    const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('');
    const [dataDescription, setDataDescription] = useState('');
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedrooms, setDataBedrooms] = useState('');
    const [dataBathrooms, setDataBathrooms] = useState('');
    const [dataGuests, setDataGuests] = useState('');
    const [dataCountry, setCountry] = useState<SelectCountryValue>();
    const [dataImage, setDataImage] = useState<File>();

    //
    const addPropertyModal = useAddPropertyModal();
    const router = useRouter();

    // set data's
    const setCategory = (category: string) => {
        setDataCategory(category);
    }

    const setImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setDataImage(file);
        }
    }

    //submit
    const submitForm = async () => {
        console.log('submitting form');
        if (
            dataCategory &&
            dataTitle &&
            dataDescription &&
            dataPrice &&
            dataCountry?.label &&
            dataImage
        ){
            console.log('price', dataPrice);
            const formData = new FormData();
            formData.append('category', dataCategory);
            formData.append('title', dataTitle);
            formData.append('description', dataDescription);
            formData.append('price_per_night', dataPrice);
            formData.append('bedrooms', dataBedrooms);
            formData.append('bathrooms', dataBathrooms);
            formData.append('guests', dataGuests);
            formData.append('country', dataCountry.label);
            formData.append('country_code', dataCountry.value);
            formData.append('image', dataImage);
            console.log("in here")
            const response = await apiService.postWithToken('/api/properties/create/', formData);
            
            if (response.success) {
                console.log('Property added successfully');

                router.push('/');

                addPropertyModal.close();
            }else {
                console.log('Error adding property');
            }
        }
        else{
            console.log('fill all fields');
            console.log(dataCategory);
            console.log(dataTitle);
            console.log(dataDescription);
            console.log(dataPrice);
            console.log(dataCountry);
        }
    }

    const content = (
        <>
            {currentStep == 1 ? (
                <>
                    <h2 className="mb-4 text-2xl"> Choose category</h2>

                    <Categories 
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)}
                    />
                   <Custombutton 
                        
                        label="Next"
                        onClick={() => setCurrentStep(2)}
                    />
                </>
            ) : currentStep == 2 ? (
                <>
                    <h2 className="mb-4 text-2xl"> Describe your  place</h2> 

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label> Title </label>
                            <input 
                                type="text"
                                value={dataTitle}
                                onChange={(e) => setDataTitle(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                                placeholder="Enter your title"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label> Description </label>
                            <textarea 
                                value={dataDescription}
                                onChange={(e) => setDataDescription(e.target.value)}
                                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                                placeholder="Enter your description"
                            />
                        </div>

                    </div>

                    <Custombutton 
                        label="Prev"
                        onClick={() => setCurrentStep(1)}
                    />

                    <Custombutton 
                        label="Next"
                        onClick={() => setCurrentStep(3)}
                    />
                </>
            ) : currentStep == 3 ? (
                <>
                    <h2 className="mb-4 text-2xl"> Describe your  place</h2> 

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label> Price per night </label>
                            <input 
                                type="number"
                                value={dataPrice}
                                onChange={(e) => setDataPrice(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                                placeholder="Enter the price per night"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label> No of bedrooms</label>
                            <input 
                                type="number"
                                value={dataBedrooms}
                                onChange={(e) => setDataBedrooms(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                                placeholder="Enter no. of bedrooms"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label> No of bathrooms</label>
                            <input 
                                type="number"
                                value={dataBathrooms}
                                onChange={(e) => setDataBathrooms(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                                placeholder="Enter no. of bathrooms"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label> No of guests</label>
                            <input 
                                type="number"
                                value={dataGuests}
                                onChange={(e) => setDataGuests(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                                placeholder="Enter no. of guests"
                            />
                        </div>

                    </div>

                    <Custombutton 
                        label="Prev"
                        onClick={() => setCurrentStep(2)}
                    />

                    <Custombutton 
                        label="Next"
                        onClick={() => setCurrentStep(4)}
                    />
                </>
            ) : currentStep == 4 ? (
                <>
                    <h2 className="mb-4 text-2xl"> Location</h2> 

                    <div className="pt-3 pb-6 space-y-4">
                        <SelectCountry 
                            value={dataCountry}
                            onChange={(value) => setCountry(value as SelectCountryValue)}
                        />
                    </div>

                    <Custombutton 
                        label="Prev"
                        onClick={() => setCurrentStep(3)}
                    />

                    <Custombutton 
                        label="Next"
                        onClick={() => setCurrentStep(5)}
                    />
                </>
            ):(
                <>
                    <h2 className="mb-2 text-2xl"> Image </h2> 

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="py-4 px-6 bg-gray-400 text-white rounded-xl">
                            <input 
                                type="file"
                                accept="image/*"
                                onChange={setImage}
                                placeholder="Upload image"
                            />
                        </div>
                    </div>

                    {dataImage && (
                        <div className="w-[200px] h-[150px] relative mb-4">
                            <Image 
                                fill
                                alt="property-image"
                                src={URL.createObjectURL(dataImage)}
                                className='w-full h-full object-cover rounded-xl'
                            />
                        </div>
                    )}


                    <Custombutton 
                        label="Prev"
                        onClick={() => setCurrentStep(3)}
                    />

                    <Custombutton 
                        label="Submit"
                        onClick={submitForm}
                    />
                </>
            )}
        </>
    )



    return(
        <>
            <Modal
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label="Add a property"
                content={content}
            />
        </>
    )
    
}

export default AddPropertyModal