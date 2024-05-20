import { buttonVariants } from "@/components/ui/button"
import { getAuthSession } from "@/lib/auth"
import { ArrowLeft, Command } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import AuthImage from '../../../../public/auth.jpg'
import HandleForm from "./_comps/HandleForm"
import { redirect } from "next/navigation"

const page = async () => {
    const auth = await getAuthSession()
    if (auth?.user.id) redirect(process.env.REDIRECT_AFTER_LOGIN || '/') 
        
    return <main className="flex dark:bg-neutral-900 justify-between w-screen h-screen">
        <div className="md:max-w-[40%] w-full">
            <header className="p-5">
                <Link href={'/'} className={buttonVariants({ variant: "ghost" })}>
                    <ArrowLeft className="cursor-pointer" size={24} />
                </Link>
            </header>
            <section>
                <div className="mx-auto flex-col mt-10 md:mt-24 flex justify-center items-center w-full">
                    <div className="flex items-center justify-center flex-col">
                        <Command size={50} />
                        <h1 className="text-xl md:text-3xl font-bold">Welcome back</h1>
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <HandleForm />
                    </Suspense>
                </div>
            </section>
        </div>
        <div className="max-w-[70%] w-full md:flex hidden">
            <div className="w-full relative h-full">
                <Image src={AuthImage} className="object-cover" placeholder="blur" alt="login-image" fill />
            </div>
        </div>
    </main>
}

export default page