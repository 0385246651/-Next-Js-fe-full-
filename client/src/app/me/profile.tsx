'use client'

import { useEffect } from "react"
import acccountApiRequest from "@/apiRequests/account";

function Profile() {
    useEffect(() => {
        const fetchRequest = async () => {
            const result = await acccountApiRequest.meClient();
        }
        fetchRequest()
    }, [])

    return (
        <div>Profile</div>
    )
}

export default Profile