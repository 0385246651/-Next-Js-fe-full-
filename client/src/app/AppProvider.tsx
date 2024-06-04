'use client'

import { clientSessionToken } from "@/lib/http";
import { useState } from "react";

export default function AppProvider({
    children,
    inititalsessionToken = ''
}: {
    children: React.ReactNode
    inititalsessionToken?: string
}) {

    useState(() => {
        if (typeof window !== 'undefined') {
            clientSessionToken.value = inititalsessionToken
        }
    })

    return <>{children}</>
};