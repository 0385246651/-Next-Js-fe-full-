'use client'
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
import { LoginBody, LoginBodyType } from '@/schemaValidations/auth.schema'
import { useToast } from "@/components/ui/use-toast"
import authAPiRequest from "@/apiRequests/auth"
import { useRouter } from "next/navigation"
import { clientSessionToken } from "@/lib/http"


export default function LoginForm() {
    const { toast } = useToast()
    const router = useRouter()

    const form = useForm<LoginBodyType>({
        resolver: zodResolver(LoginBody),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: LoginBodyType) {
        try {
            const result = await authAPiRequest.login(values)
            toast({
                description: result.payload.message,
            })
            await authAPiRequest.auth({ sessionToken: result.payload.data.token })
            router.push('/me')
        }
        catch (error: any) {
            const errors = error.payload?.errors as { field: string, message: string }[]
            const status = error.status as number
            if (status === 422) {
                errors.forEach((error) => {
                    form.setError(error.field as ('email' | 'password'), {
                        type: 'server',
                        message: error?.message,
                    })
                })
            } else {
                toast({
                    title: "Lỗi !!",
                    description: error.payload?.message,
                    variant: "destructive"
                })
            }
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, (err) => {
                console.error(err)
            })}
                className="space-y-2 max-w-[800px] w-full flex-shrink-0" noValidate>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Vui lòng nhập Email của bạn" {...field} type='email' />
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
                                <Input placeholder="Vui lòng nhập mật khẩu" {...field} type='password' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className='text-center !mt-8 w-full'>Đăng nhập</Button>
            </form>
        </Form>
    )
}