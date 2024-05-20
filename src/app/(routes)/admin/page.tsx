import { getAuthSession } from "@/lib/auth"
import { notFound } from "next/navigation"

const page = async () => {
  const auth = await getAuthSession()
  if (!auth?.user.id) return notFound()

  if (auth?.user.role !== 'ADMIN') return notFound()

  return <div>
    Admin page
    ## This page should be protected
  </div>
}

export default page