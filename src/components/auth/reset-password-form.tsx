"use client"

import { FormField } from "@/components/form-field"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export function ResetPasswordForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const searchParams = useSearchParams()
    const token = searchParams.get("token") || ""
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (password !== passwordConfirm) {
            setError("Passwords do not match")
            return
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters")
            return
        }

        // Here you would call your API to reset the password
        console.log("Resetting password with token:", token)
        console.log("New password:", password)

        toast("Password reset successfully!", {
            description: "You can now login with your new password.",
        })
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Reset Password</CardTitle>
                    <CardDescription>
                        Create a new password for your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <input type="hidden" name="token" value={token} />

                            <FormField
                                label="New Password"
                                type="password"
                                placeholder="Must be at least 8 characters"
                                errors={{}}
                                name="password"
                            />

                            <FormField
                                label="Confirm Password"
                                type="password"
                                placeholder="Must be at least 8 characters"
                                errors={{}}
                                name="passwordConfirm"
                            />

                            {error && (
                                <div className="text-sm font-medium text-destructive">
                                    {error}
                                </div>
                            )}

                            <Button type="submit" className="w-full">
                                Reset Password
                            </Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <div className="text-center text-sm">
                        <Link href="/login" className="underline underline-offset-4">
                            Back to login
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}