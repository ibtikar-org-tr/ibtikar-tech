import { SectionLabel } from '@/components/section-label'
import { useLocale } from '@/i18n/locale-provider'

export function RulesSection() {
  const { t } = useLocale()

  return (
    <section id="rules" className="border-t border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.07" title={t.rules.label} tone="light" />

        <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
          {t.rules.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.rules.items.map((item, index) => (
            <div key={item.title} className="border border-border bg-card p-7">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-2xl font-bold text-foreground">{item.metric}</span>
              </div>
              <h3 className="mt-3 font-mono text-lg font-bold uppercase tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
