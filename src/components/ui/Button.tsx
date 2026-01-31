import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

type Variant = 'teal' | 'pink' | 'ghost'
type Size = 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  isLoading?: boolean
}

export function Button({
  className,
  variant = 'teal',
  size = 'md',
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = Boolean(disabled || isLoading)

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={clsx(
        'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-heading)] focus-visible:ring-offset-white',
        'disabled:opacity-60 disabled:pointer-events-none',
        size === 'md' && 'h-10 px-5 text-[18px] leading-[26px]',
        size === 'lg' && 'h-[50px] px-6 text-[18px] leading-[26px]',
        variant === 'teal' && 'bg-[var(--color-teal)] text-white hover:brightness-95 active:brightness-90',
        variant === 'pink' && 'bg-[var(--color-pink)] text-white hover:brightness-95 active:brightness-90',
        variant === 'ghost' &&
          'bg-transparent text-[var(--color-heading)] hover:bg-black/5 active:bg-black/10',
        className
      )}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-white" />
          <span className="sr-only">Loading</span>
        </span>
      ) : (
        children
      )}
    </button>
  )
}
