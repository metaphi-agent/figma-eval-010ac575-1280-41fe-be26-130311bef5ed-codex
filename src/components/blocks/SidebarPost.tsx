import clsx from 'clsx'

type SidebarPostProps = {
  title: string
  date: string
  imageSrc: string
  imageAlt: string
  className?: string
}

export function SidebarPost({
  title,
  date,
  imageSrc,
  imageAlt,
  className,
}: SidebarPostProps) {
  return (
    <article className={clsx('flex gap-5', className)}>
      <img
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        className="h-[105px] w-[170px] shrink-0 rounded-[10px] object-cover"
      />
      <div className="min-w-0">
        <p className="text-[16px] leading-[26px] text-[var(--color-heading)]">
          {title}
        </p>
        <p className="mt-1 text-[16px] leading-[26px] text-[var(--color-muted)]">
          {date}
        </p>
      </div>
    </article>
  )
}
