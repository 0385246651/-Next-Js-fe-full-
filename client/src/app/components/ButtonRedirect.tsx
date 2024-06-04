'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function ButtonRedirect() {
    const router = useRouter() // chi dung cho client component

    const handleNavigate = () => {
        router.push('/login')
    }
    return (
        <button type="button" onClick={() => handleNavigate()}>Chuyen sang trang Login</button>
    )
}
