import { LecturerPortrait } from '@/components/lecturer-portrait'
import { SectionLabel } from '@/components/section-label'
import type { TrackId } from '@/i18n/types'
import { useLocale } from '@/i18n/locale-provider'
import { cn } from '@/lib/utils'

interface CurriculumSectionProps {
  activeTrack: TrackId
  onChangeTrack: (id: TrackId) => void
}

export function CurriculumSection({ activeTrack, onChangeTrack }: CurriculumSectionProps) {
  const { t } = useLocale()
  const track = t.tracks.items.find((item) => item.id === activeTrack) ?? t.tracks.items[0]

  return (
    <section id="curriculum" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel index="N.05" title={t.curriculum.label} tone="light" />
        <h2 className="mt-6 max-w-2xl text-balance font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-4xl">
          {t.curriculum.title}
        </h2>

        <div
          role="tablist"
          aria-label={t.tracks.label}
          className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3"
        >
          {t.tracks.items.map((item) => {
            const selected = item.id === track.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => onChangeTrack(item.id)}
                className={cn(
                  'bg-card px-5 py-4 text-start transition-colors',
                  selected ? 'bg-navy text-navy-foreground' : 'hover:bg-background',
                )}
              >
                <span
                  className={cn(
                    'font-mono text-[11px] uppercase tracking-[0.2em]',
                    selected ? 'text-accent' : 'text-muted-foreground',
                  )}
                >
                  {item.kicker}
                </span>
                <span className="mt-1 block font-mono text-sm font-bold uppercase tracking-tight">
                  {item.title}
                </span>
              </button>
            )
          })}
        </div>

        <ol className="mt-10 divide-y divide-border border-y border-border">
          {track.weeks.map((week) => (
            <li key={`${track.id}-${week.week}`} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {t.curriculum.weekLabel} {week.week}
                </span>
                <h3 className="mt-2 font-mono text-lg font-bold uppercase leading-snug tracking-tight text-foreground">
                  {week.title}
                </h3>
                <div className="mt-4 flex items-center gap-3">
                  <LecturerPortrait
                    id={week.lecturerId}
                    name={
                      week.lecturerId
                        ? t.lecturers.people[week.lecturerId].name
                        : t.lecturers.tba
                    }
                    className="size-12 shrink-0 rounded-full"
                  />
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {t.curriculum.lecturerLabel}
                    </span>
                    <span className="mt-0.5 block text-sm font-medium leading-snug text-foreground">
                      {week.lecturerId
                        ? t.lecturers.people[week.lecturerId].name
                        : t.lecturers.tba}
                    </span>
                  </span>
                </div>
              </div>
              <div className="md:col-span-9">
                <p className="text-pretty leading-relaxed text-muted-foreground">{week.body}</p>
                {week.practice ? (
                  <p className="mt-4 border-s-2 border-accent ps-4 text-pretty text-sm leading-relaxed text-foreground/80">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      {t.curriculum.practiceLabel}
                    </span>
                    <span className="mt-1 block">{week.practice}</span>
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
