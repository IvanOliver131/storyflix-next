import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChild?: boolean
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp 
            className={clsx(
                'py-3 px-4 bg-red-500 rounded font-semibold text-black text-sm w-full h-12 transition-colors hover:bg-red-300',
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}