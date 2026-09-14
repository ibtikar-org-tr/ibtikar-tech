import { cn } from '@/lib/utils'
import { useLocale } from '@/i18n/locale-provider'

export function Logomark({ className, dark }: { className?: string; dark?: boolean }) {
  const { t } = useLocale()

  return (
    <img
      src={dark ? '/white_long_logo.svg' : '/blue_long_logo.svg'}
      alt={t.brand}
      className={cn('h-7 w-auto sm:h-8', className)}
    />
  )
}

export function BrandLockup({
  className,
  dark,
  compact,
}: {
  className?: string
  dark?: boolean
  compact?: boolean
}) {
  const { t } = useLocale()
  const techSrc = compact
    ? dark
      ? '/ibtikar-tech-logo-compact-light.png'
      : '/ibtikar-tech-logo-compact.png'
    : dark
      ? '/ibtikar-tech-logo-light.png'
      : '/ibtikar-tech-logo.png'

  return (
    <span className={cn('flex items-center gap-2.5 sm:gap-3.5', className)}>
      <Logomark dark={dark} className="shrink-0" />
      <span
        aria-hidden="true"
        className={cn(
          'w-px shrink-0',
          compact ? 'h-8 sm:h-10' : 'h-10 sm:h-14',
          dark ? 'bg-navy-foreground/35' : 'bg-foreground/15',
        )}
      />
      <img
        src={techSrc}
        alt={t.techLogoAlt}
        className={cn('w-auto shrink-0', compact ? 'h-9 sm:h-11' : 'h-12 sm:h-16')}
      />
    </span>
  )
}
