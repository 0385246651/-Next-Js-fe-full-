'use client'

import { useEffect } from "react"
import acccountApiRequest from "@/apiRequests/account";
import { handleErrorApi } from "@/lib/utils";

function Profile() {
    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const result = await acccountApiRequest.meClient();
            } catch (error) {
                handleErrorApi({ error });
            }
        }
        fetchRequest()
    }, [])

    return (
        <div>Profile</div>
    )
}

export default Profile