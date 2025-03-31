import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'
import { RxChevronRight } from 'react-icons/rx'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        clear: '',
        default: 'h-10 px-4 py-2',
        icon: 'h-10 w-10',
        lg: 'h-11 rounded px-8',
        sm: 'h-9 rounded px-3',
      },
      variant: {
        default: 'bg-chatmansBlue font-karla border border-chatmansBlue rounded-xl text-white',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:bg-card hover:text-accent-foreground',
        link: 'font-bebas block py-3 text-4xl first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2',
        blogLink: 'font-karla font-bold block text-base',
        outline: 'font-karla bg-white border border-neutralDarkest15 rounded-xl',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  children,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'

  // For link variant, wrap children and icon in a <span> to avoid passing className to a fragment
  const content =
    variant === 'blogLink' ? (
      <span className="flex items-center justify-center py-0 pl-0">
        {children}
        <RxChevronRight className="ml-2" />
      </span>
    ) : (
      children
    )

  return (
    <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props}>
      {content}
    </Comp>
  )
}

export { Button, buttonVariants }
