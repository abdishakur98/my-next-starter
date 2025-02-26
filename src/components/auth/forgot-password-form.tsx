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

export function ForgotPasswordForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Forgot Password</CardTitle>
                    <CardDescription>
                        Enter your email address and we'll send you a link to reset your password
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <FormField
                                label="Email"
                                type="email"
                                placeholder="m@example.com"
                                errors={{}}
                                name="email"
                            />
                            <Button type="submit" className="w-full">
                                Send Reset Link
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