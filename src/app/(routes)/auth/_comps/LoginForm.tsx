"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    email: z.string().min(2, { message: "Email must be at least 2 characters" }).email({ message: "Email must be valid" }),
    password: z.string().min(6, {
        message: "Email must be at least 6 characters"
    }).max(50, {
        message: "Password must be less than 50 characters"
    })
})

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [error, setError] = useState<string | null>(null);
    const error = useSearchParams().get("error")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsLoading(true);
            await signIn("credentials", {
                email: values.email,
                password: values.password,
                callbackUrl: "/dashboard",
            }).finally(() => setIsLoading(false))
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    async function handleGoogle() {
        setIsLoading(true)
        await signIn("google", { callbackUrl: process.env.REDIRECT_AFTER_LOGIN || '/' }).finally(() => setIsLoading(false));
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-lg p-8 md:p-3">
                <div className="my-5">
                    <Button disabled={isLoading} type="button" onClick={handleGoogle} className="w-full" variant={'secondary'}>
                        {isLoading ? <Loader2 className="animate-spin" /> : "Login with Google"}
                    </Button>
                    <div className="relative border w-full my-10">
                        <span className="absolute -top-[12px] w-full text-center">
                            <span className="dark:bg-neutral-900 p-2">
                                OR
                            </span>
                        </span>
                    </div>
                </div>
                {error && <div>
                    <p className="text-xs w-full text-center text-red-300">{error}</p>
                </div>}

                <FormField disabled={isLoading}
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="*****" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="w-full flex justify-between">
                    <Link href={'/auth?state=register'} className="text-xs">Don't have an account?</Link>
                    <Link href={'/contact#forgot-my-password'} className="text-muted-foreground text-xs">Forgot your password?</Link>
                </div>
                <Button disabled={isLoading} className="w-full" type="submit">
                    {isLoading ? <Loader2 className="animate-spin" /> : "Login"}
                </Button>
            </form>
        </Form>
    )

}

export default LoginForm