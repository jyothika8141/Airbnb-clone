'use server'

import { cookies } from "next/headers"

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
    cookies().set('user_id', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,   // 1 week
        path: '/'
    });
    cookies().set('access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 ,   // 60 minutes
        path: '/'
    });
    cookies().set('refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,   // 1 week
        path: '/'
    });
}

export async function resetAuthCookies() {
    cookies().set('user_id', '');
    cookies().set('access_token', '');
    cookies().set('refresh_token', '');
}

// get data
export async function getUserId() {
    const userId = cookies().get('user_id')?.value;
    return userId ? userId : null;
}