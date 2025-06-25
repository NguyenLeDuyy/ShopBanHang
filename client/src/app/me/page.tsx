import accountApiRequest from "@/apiRequests/account"
import Profile from "@/app/me/profile"
import { cookies } from "next/headers"

export default async function MeProfile() {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('sessionToken')
    // console.log("session token: ", sessionToken)

    const result = accountApiRequest.me(sessionToken?.value ?? '')
    return <div>
        <h1>Profile</h1>
        {/* <div>Xin chào {result?.payload?.data?.name}</div> */}
        <Profile />
    </div>
}