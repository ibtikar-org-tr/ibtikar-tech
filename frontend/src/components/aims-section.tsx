import { GraduationCap, Compass, Wrench, FolderKanban, Brain, Users2, Sparkles } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { useLocale } from '@/i18n/locale-provider'

const ICONS = [GraduationCap, Compass, Wrench, FolderKanban, Brain, Users2, Sparkles]

export function AimsSection() {
  const { t } = useLocale()

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.03" title={t.benefits.label} tone="light" />

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {t.benefits.items.map((aim, index) => {
            const Icon = ICONS[index] ?? Sparkles
            return (
              <div key={aim.title} className="border-t-2 border-accent pt-6">
                <Icon className="size-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 font-mono text-base font-bold uppercase leading-snug tracking-tight text-foreground">
                  {aim.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{aim.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
