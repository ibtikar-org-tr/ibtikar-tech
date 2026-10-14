import { SectionLabel } from '@/components/section-label'
import { useLocale } from '@/i18n/locale-provider'

export function RequirementsSection() {
  const { t } = useLocale()

  return (
    <section id="requirements" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.07" title={t.requirements.label} tone="light" />

        <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
          {t.requirements.title}
        </h2>

        <ul className="mt-12 grid divide-y divide-border border-t border-b border-border sm:grid-cols-2 sm:divide-x rtl:sm:divide-x-reverse">
          {t.requirements.items.map((item, i) => (
            <li key={item} className="flex items-center justify-between gap-4 py-5 sm:px-8">
              <span className="text-base font-medium leading-snug tracking-tight text-foreground">{item}</span>
              <span className="shrink-0 font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
