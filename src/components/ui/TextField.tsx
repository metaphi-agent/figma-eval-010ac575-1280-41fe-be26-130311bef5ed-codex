import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'

export type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  error?: string
}

export function TextField({ className, error, disabled, ...props }: TextFieldProps) {
  return (
    <div className={clsx('w-full', className)}>
      <input
        {...props}
        disabled={disabled}
        className={clsx(
          'h-[50px] w-full rounded-full bg-transparent px-6 text-[18px] leading-[26px]',
          'text-[var(--color-heading)] placeholder:text-[rgba(21,20,57,0.4)]',
          'border-2 border-[var(--color-border)]',
          'transition-colors duration-150',
          'focus-visible:outline-none focus-visible:border-[rgba(30,14,98,0.35)] focus-visible:ring-2 focus-visible:ring-[rgba(30,14,98,0.20)]',
          'disabled:bg-black/5 disabled:text-black/40 disabled:placeholder:text-black/30',
          error && 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-200'
        )}
      />
      {error ? (
        <p className="mt-2 px-2 text-sm text-red-600">{error}</p>
      ) : null}
    </div>
  )
}
