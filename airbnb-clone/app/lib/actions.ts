'use server'

import { set } from "date-fns";
import { cookies } from "next/headers"

export async function handleRefresh() {
    console.log("handle refresh token");

    const refreshToken = await getRefreshToken();

    const token = await fetch('http://localhost:8000/api/token/refresh/', {
        method: 'POST',
        body: JSON.stringify({
            refresh: refreshToken 
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(json => {
            console.log("Response - refresh: ", json);

            if (json.access) {
                cookies().set('access_token', json.access, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 60 * 60 ,   // 60 minutes
                    path: '/'
                });

                return json.access;
            } else {
                resetAuthCookies();
            }
        })
        .catch(err => {
            console.error('erroe', err);
            resetAuthCookies();
        });

    return token;
}

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

export async function getAccessToken() {
    let accessToken = cookies().get('access_token')?.value;

    if (!accessToken) {
        accessToken = await handleRefresh();
    }

    return accessToken ? accessToken : null;
}

export async function getRefreshToken() {
    let refreshToken = cookies().get('refresh_token')?.value;

    return refreshToken;
}
