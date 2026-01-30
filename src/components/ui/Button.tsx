import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type Variant = 'accent' | 'pink' | 'ghost'

export function Button({
  className,
  variant = 'accent',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}) {
  const base =
    'inline-flex items-center justify-center rounded-full text-sm font-bold transition-colors duration-150 disabled:opacity-60 disabled:pointer-events-none'

  const variants: Record<Variant, string> = {
    accent:
      'bg-[var(--color-accent)] text-white hover:bg-[color-mix(in_oklab,var(--color-accent),black_8%)] active:bg-[color-mix(in_oklab,var(--color-accent),black_14%)]',
    pink:
      'bg-[var(--color-pink)] text-white hover:bg-[color-mix(in_oklab,var(--color-pink),black_8%)] active:bg-[color-mix(in_oklab,var(--color-pink),black_14%)]',
    ghost:
      'bg-transparent text-[color:var(--color-heading)] hover:bg-black/5 active:bg-black/10',
  }

  return <button className={clsx(base, variants[variant], className)} {...props} />
}

