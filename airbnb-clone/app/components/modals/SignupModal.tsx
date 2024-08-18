'use client'

import Modal from "./Modal"

import { useState } from "react"
import useSignupModal from "@/app/hooks/useSignupModal"
import Custombutton from "../forms/CustomButton"

const SignupModal = () => {
    const SignupModal = useSignupModal()

    const content = (
        <>
            <h2 className="mb-8 text-2xl">Welome to Airbnb-clone, please log in</h2>

            <form>
                <input placeholder="Your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 outline-none rounded-xl" />
                <input placeholder="Your password" type="password" className="w-full h-[54px] mt-8 px-4 border border-gray-300 outline-none rounded-xl" />
                <input placeholder="Repeat your password" type="password" className="w-full h-[54px] mt-8 px-4 border border-gray-300 outline-none rounded-xl" />

                <div className="p-5 text-airbnbDark">
                    the error message
                </div>

                <Custombutton
                    label="Submit"
                    onClick={() => console.log("Test")}
                />
            </form>
        </>
    )
    return (
        <Modal 
            isOpen={SignupModal.isOpen}
            close={SignupModal.close}
            label="Log in "

            content={content}
        />
    )
}

export default SignupModal