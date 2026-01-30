import type { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

export function TextInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        'h-12 w-full rounded-full border border-[var(--color-border)] bg-white px-5 text-sm text-[color:var(--color-heading)] placeholder:text-[color:var(--color-muted)]',
        'transition-[border-color,box-shadow] duration-150 focus:border-[color-mix(in_oklab,var(--color-accent),black_5%)] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-accent),transparent_75%)] focus:outline-none',
        className,
      )}
      {...props}
    />
  )
}

