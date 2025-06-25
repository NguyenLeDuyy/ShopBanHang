"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema"
import { toast } from "sonner"
import authApiRequest from "@/apiRequests/authApiRequest"
import { useRouter } from "next/navigation"
import { handleErrorApi } from "@/lib/utils"
import { useState } from "react"

const LoginForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();

    // 1. Define your form.
    const form = useForm<LoginBodyType>({
        resolver: zodResolver(LoginBody),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: LoginBodyType) {
        if (isLoading) return
        setIsLoading(true)
        try {
            const result = await authApiRequest.login(values)

            toast.success('Đăng nhập thành công', {
                description: 'Vui lòng chờ trong giây lát',
            })

            await authApiRequest.auth({ sessionToken: result.payload.data.token })

            router.push('/me')
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            handleErrorApi({
                error,
                setError: form.setError
            })
        }
        finally {
            setIsLoading(false)
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-[600px] flex-shrink-0 w-full"
                noValidate
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="you@example.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mật khẩu</FormLabel>
                            <FormControl>
                                <Input placeholder="Mật khẩu" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="!mt-8 w-full" type="submit">Đăng nhập</Button>
            </form>
        </Form>
    )
}

export default LoginForm