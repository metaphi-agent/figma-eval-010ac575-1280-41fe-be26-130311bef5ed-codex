import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx('mx-auto w-full max-w-[1170px] px-6', className)}
    />
  )
}
