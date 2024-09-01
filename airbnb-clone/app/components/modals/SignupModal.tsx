'use client'

import Modal from "./Modal"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { handleLogin } from "@/app/lib/actions"
import useSignupModal from "@/app/hooks/useSignupModal"
import Custombutton from "../forms/CustomButton"
import apiService from "@/app/services/apiService"

const SignupModal = () => {
    
    //variables
    const router = useRouter()
    const signupModal = useSignupModal()
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [errors, setErrors] = useState<string[]>([])


    // Submit function
    const submitSignup = async () => {
        const formData = {
            email: email,
            password1: password1,
            password2: password2
        }
        
        const response = await apiService.post('/api/auth/register/', JSON.stringify(formData));
        
        if (response.access){
            // handle login
            handleLogin(response.user.pk, response.access, response.refresh);

            signupModal.close()

            router.push('/')
        } else {
            const tempErrors: string[] = Object.values(response).map((error: any) => {
                return error
            })

            setErrors(tempErrors)
        }
    }

    const content = (
        <>
            <form>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 outline-none rounded-xl" />
                <input  onChange={(e) => setPassword1(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] mt-6 px-4 border border-gray-300 outline-none rounded-xl" />
                <input onChange={(e) => setPassword2(e.target.value)}  placeholder="Repeat your password" type="password" className="w-full h-[54px] my-6 px-4 border border-gray-300 outline-none rounded-xl" />

                {errors.map((error, index) => {
                    return (
                        <div 
                            key={`error_${index}`}
                            className="mb-6 text-airbnbDark"
                        >
                            {error}
                        </div>
                    )
                })}
                

                <Custombutton
                    label="Submit"
                    onClick={submitSignup}
                />
            </form>
        </>
    )
    return (
            <Modal 
                isOpen={signupModal.isOpen}
                close={signupModal.close}
                label="Sign up "
    
                content={content}
            />
        )
}

export default SignupModal