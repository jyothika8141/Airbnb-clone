'use client'

import { useRouter } from "next/navigation"

import {resetAuthCookies} from "@/app/lib/actions"

import MenuLink from './navbar/MenuLink'

const LogoutButton = () => {
    const router = useRouter();

    const submitLogout = () => {
        resetAuthCookies();
        router.push('/')
    }

    return (
        <MenuLink
            label="Log out"
            onClick={submitLogout}
        />
    )
}

export default LogoutButton