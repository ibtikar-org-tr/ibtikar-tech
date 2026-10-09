import { ArrowUpRight } from 'lucide-react'
import { useLocale } from '@/i18n/locale-provider'
import { LINKS } from '@/lib/links'
import { cn } from '@/lib/utils'

export function Hero() {
  const { t, dir } = useLocale()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-32 pb-16 text-navy-foreground md:pt-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#F5F5F7_1px,transparent_1px),linear-gradient(to_bottom,#F5F5F7_1px,transparent_1px)] bg-size-[44px_44px] opacity-[0.15]"
      />
      <div
        aria-hidden="true"
        className={cn(
          'absolute top-24 h-[420px] w-[560px] bg-[url("/images/hero-schematic.svg")] bg-contain bg-no-repeat opacity-90 md:top-16',
          dir === 'rtl'
            ? '-left-40 bg-left md:left-[-120px]'
            : '-right-40 bg-right md:right-[-120px]',
        )}
      />
      <div
        className={cn(
          'absolute inset-0 to-transparent',
          dir === 'rtl'
            ? 'bg-gradient-to-l from-navy via-navy/95'
            : 'bg-gradient-to-r from-navy via-navy/95',
        )}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
          <span className="font-display text-sm font-bold leading-none md:text-base">
            {t.hero.titleLine1}
            {t.hero.titleLine2Before ? ` ${t.hero.titleLine2Before}` : ''}{' '}
            <span className="text-accent">{t.hero.titleLine2Accent}</span>
            <span className="text-accent" aria-hidden="true">
              _
            </span>
          </span>
          <span aria-hidden="true" className="text-navy-foreground/35">
            —
          </span>
          <span className="font-mono text-xs tracking-[0.18em] text-navy-foreground/70">
            {t.hero.eyebrow}
          </span>
        </div>

        <h1 className="mt-8 max-w-3xl text-balance font-mono text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
          {t.hero.brandTitle}
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-navy-foreground/80">
          {t.hero.body}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={LINKS.register}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.1em] text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            {t.hero.registerNow}
            <ArrowUpRight
              className={cn(
                'size-4 transition-transform',
                dir === 'rtl'
                  ? 'group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 -scale-x-100'
                  : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
              )}
            />
          </a>
          <a
            href="#tracks"
            className="inline-flex items-center gap-2 border border-navy-foreground/30 px-6 py-3.5 font-mono text-sm uppercase tracking-[0.1em] text-navy-foreground transition-colors hover:border-navy-foreground/70"
          >
            {t.hero.exploreTracks}
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px border border-navy-foreground/15 bg-navy-foreground/15 sm:grid-cols-4">
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="bg-navy px-5 py-6">
              <dt className="font-mono text-xs uppercase tracking-[0.15em] text-navy-foreground/60">
                {stat.label}
              </dt>
              <dd className="mt-2 font-mono text-3xl font-bold text-navy-foreground md:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
