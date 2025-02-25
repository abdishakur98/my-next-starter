"use client"

import { ResetPasswordForm } from "@/components/auth/reset-password-form"
import { redirect, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function ResetPasswordPage() {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")

    // Redirect if no token is provided
    useEffect(() => {
        if (!token) {
            redirect("/forgot-password")
        }
    }, [token])

    if (!token) {
        return null // This prevents flash of content before redirect
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <ResetPasswordForm />
            </div>
        </div>
    )
} 