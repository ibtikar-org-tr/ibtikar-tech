import { Factory, BarChart3, Bot, ArrowUpRight } from 'lucide-react'
import { LecturerPortrait } from '@/components/lecturer-portrait'
import { SectionLabel } from '@/components/section-label'
import type { LecturerId } from '@/data/lecturers'
import type { TrackId, TrackWeek } from '@/i18n/types'
import { useLocale } from '@/i18n/locale-provider'
import { cn } from '@/lib/utils'

function uniqueLecturerIds(weeks: TrackWeek[]): LecturerId[] {
  const seen = new Set<LecturerId>()
  const ids: LecturerId[] = []
  for (const week of weeks) {
    if (week.lecturerId && !seen.has(week.lecturerId)) {
      seen.add(week.lecturerId)
      ids.push(week.lecturerId)
    }
  }
  return ids
}

const TRACK_ICONS = {
  engineering: Factory,
  research: BarChart3,
  ai: Bot,
} as const

interface TracksSectionProps {
  onOpenCurriculum: (id: TrackId) => void
}

export function TracksSection({ onOpenCurriculum }: TracksSectionProps) {
  const { t, dir } = useLocale()

  return (
    <section id="tracks" className="border-t border-border bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="N.04" title={t.tracks.label} tone="light" />
            <h2 className="mt-6 max-w-xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
              {t.tracks.title}
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-3">
          {t.tracks.items.map((track) => {
            const Icon = TRACK_ICONS[track.id]
            const lecturerIds = uniqueLecturerIds(track.weeks)

            return (
              <article key={track.id} className="flex flex-col bg-card p-7">
                <div className="flex items-center justify-between gap-4">
                  <Icon className="size-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {track.kicker}
                  </span>
                </div>
                <h3 className="mt-5 font-mono text-lg font-bold uppercase leading-snug tracking-tight text-foreground">
                  {track.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{track.body}</p>

                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {t.tracks.audienceLabel}
                </p>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{track.audience}</p>

                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {t.tracks.projectLabel}
                </p>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{track.project}</p>

                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {t.tracks.topicsLabel}
                </p>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {track.topics.map((topic) => (
                    <li key={topic} className="text-pretty text-sm leading-relaxed text-muted-foreground">
                      {topic}
                    </li>
                  ))}
                </ul>

                {lecturerIds.length ? (
                  <>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      {t.tracks.lecturersLabel}
                    </p>
                    <ul className="mt-3 flex flex-col gap-2.5">
                      {lecturerIds.map((id) => {
                        const person = t.lecturers.people[id]
                        return (
                          <li key={id} className="flex items-center gap-3">
                            <LecturerPortrait
                              id={id}
                              name={person.name}
                              className="size-11 shrink-0 rounded-full"
                            />
                            <span>
                              <span className="block text-sm font-medium leading-snug text-foreground">
                                {person.name}
                              </span>
                              <span className="block text-pretty text-xs leading-relaxed text-muted-foreground">
                                {person.role}
                              </span>
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                ) : null}

                <ul className="mt-6 flex flex-wrap gap-2">
                  {track.tools.map((tag) => (
                    <li
                      key={tag}
                      className="border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onOpenCurriculum(track.id)}
                  className="group mt-8 inline-flex items-center gap-2 self-start border border-foreground px-4 py-2 font-mono text-[13px] uppercase tracking-[0.1em] text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {t.tracks.weeklyPlan}
                  <ArrowUpRight
                    className={cn('size-3.5', dir === 'rtl' && '-scale-x-100')}
                  />
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
