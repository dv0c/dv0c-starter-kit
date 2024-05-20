import { getAuthSession } from "@/lib/auth"
import { redirect } from "next/navigation"

const page = async () => {
    const auth = await getAuthSession()
    if (!auth?.user.id) redirect('/auth')

    return <div>Dashboard</div>
}

export default page