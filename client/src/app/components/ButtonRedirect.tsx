"use client";

import { redirect, useRouter } from 'next/navigation';
import React from 'react'
const isAuth = false;

export default function ButtonRedirect() {
    if (!isAuth) {
        redirect('/login')
    }
    const router = useRouter();
    const handleNavigate = () => {
        router.push("/login");
    };
    return (
        <button onClick={handleNavigate}>Chuyển sang trang Login</button>
    )
}
