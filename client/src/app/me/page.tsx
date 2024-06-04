import envConfig from '@/config';
import { cookies } from 'next/headers';
import React from 'react'
import Profile from './profile';
import acccountApiRequest from '@/apiRequests/account';

// export const metadata: Metadata = {
//     title: 'Hồ sơ người dùng'
// }

async function MeProfile() {
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('sessionToken')
    console.log('sessionToken', sessionToken);

    const result = await acccountApiRequest.me(sessionToken?.value ?? '')

    return (
        <div className='text-center'>
            <h1 className='mt-6'>
                Profile
            </h1>
            <div>
                Xin chào <span className='text-red-600'>{result.payload.data.name}</span> !!!!!!!!!!
            </div>
            <Profile />
        </div>
    )
}

export default MeProfile