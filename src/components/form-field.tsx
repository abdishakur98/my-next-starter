import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FormField({
    label,
    type,
    placeholder,
    errors,
    name,
}: {
    label: string;
    type: string;
    placeholder: string;
    errors: any;
    name: string;
}) {
    return (
        <div className="grid gap-2">
            <Label htmlFor={name}>{label}</Label>
            <Input
                id={name}
                type={type}
                placeholder={placeholder}
            />
            {errors[name] && (
                <p className="text-sm text-destructive">{errors[name].message}</p>
            )}
        </div>
    )
} 