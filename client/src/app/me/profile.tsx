'use client'

import accountApiRequest from "@/apiRequests/account";
import { handleErrorApi } from "@/lib/utils";
import { useEffect } from "react";

export default function Profile() {
    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const result = await accountApiRequest.meClient();
            } catch (error) {
                handleErrorApi({ error })
            }
        };
        fetchRequest(); // Gọi hàm async
    }, []);

    return (
        <div>
            Profile
        </div>
    )
}
