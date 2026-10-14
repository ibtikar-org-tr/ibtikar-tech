import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { useLocale } from '@/i18n/locale-provider'
import { LINKS } from '@/lib/links'
import { cn } from '@/lib/utils'

export function ComingSoonSection() {
  const { t, dir } = useLocale()

  return (
    <section id="coming-soon" className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.02" title={t.comingSoon.label} tone="light" />

        <div className="mt-10 grid items-stretch gap-px border border-border bg-border md:grid-cols-12">
          <div className="bg-card p-8 md:col-span-7 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{t.comingSoon.kicker}</p>
            <h2 className="mt-4 max-w-2xl text-balance font-mono text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl">
              {t.comingSoon.title}
            </h2>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {t.comingSoon.body}
            </p>
          </div>

          <aside className="flex flex-col justify-between gap-8 bg-navy p-8 text-navy-foreground md:col-span-5 md:p-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-navy-foreground/50">
                {t.comingSoon.partnerRole}
              </span>
              <img
                src="/partners/saae_logo.jpeg"
                alt={t.comingSoon.partnerName}
                className="mt-6 w-full max-w-sm bg-navy-foreground object-contain p-4"
              />
              <p className="mt-5 text-pretty font-medium leading-snug">{t.comingSoon.partnerName}</p>
            </div>
            <a
              href={LINKS.saae}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start border border-navy-foreground/30 px-5 py-3 font-mono text-sm uppercase tracking-[0.1em] transition-colors hover:border-accent hover:text-accent"
            >
              {t.comingSoon.cta}
              <ArrowUpRight className={cn('size-4', dir === 'rtl' && '-scale-x-100')} />
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
