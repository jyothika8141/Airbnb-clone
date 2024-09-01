'use client'

import Modal from "./Modal"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { handleLogin } from "@/app/lib/actions"
import useLoginModal from "@/app/hooks/useLoginModal"
import Custombutton from "../forms/CustomButton"
import apiService from "@/app/services/apiService"

const LoginModal = () => {
    const router = useRouter()
    const loginModal = useLoginModal()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState<string[]>([])

    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password
        }

        const response = await apiService.post('/api/auth/login/', JSON.stringify(formData));
        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh)

            loginModal.close()

            router.push('/')
        } else {
            setErrors(response.non_field_errors)
        }
    }

    const content = (
        <>
            <form
                action={submitLogin}
                className="space-y-4"
            >
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 outline-none rounded-xl" />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] mt-8 px-4 border border-gray-300 outline-none rounded-xl" />

                {/* {errors.map((error, index) =>{ */}
                    {/* return ( */}
                        <div
                            // key={`error_${index}`}
                            className="mb-6 text-airbnbDark"
                        >
                            {errors}
                        </div>
                    {/* ) */}
                {/* })} */}

                <Custombutton
                    label="Submit"
                    onClick={submitLogin}
                />
            </form>
        </>
    )
    return (
        <Modal 
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in here"

            content={content}
        />
    )
}

export default LoginModal