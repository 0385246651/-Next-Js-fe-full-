import React from 'react'
import { ModeToggle } from './toggle-theme'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='mt-6 ml-6'>
            <ul>
                <li className='flex gap-6'>
                    <Link href={'/register'}>
                        Đăng ký
                    </Link>
                    <Link href={'/login'}>
                        Đăng nhập
                    </Link>
                </li>
            </ul>
            <div className='flex gap-2 items-center mt-4'>
                <ModeToggle />
                &nbsp; Đổi màu giao diện
            </div>
        </div>
    )
}
