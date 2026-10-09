import { ArrowUpRight, Share2, Mail, MessageCircle, GitBranch, FileText, GraduationCap } from 'lucide-react'
import { BrandLockup } from '@/components/logomark'
import { LinkedInIcon, TelegramIcon } from '@/components/social-icons'
import { useLocale } from '@/i18n/locale-provider'
import { LINKS } from '@/lib/links'
import { cn } from '@/lib/utils'

const CONNECT_HREFS = [
  { href: LINKS.instagram, key: 'instagram' as const, icon: Share2 },
  { href: LINKS.linkedin, key: 'linkedin' as const, icon: LinkedInIcon },
  { href: LINKS.telegramChannel, key: 'telegramChannel' as const, icon: TelegramIcon },
  { href: LINKS.telegramContact, key: 'telegramContact' as const, icon: TelegramIcon },
  { href: LINKS.whatsapp, key: 'whatsapp' as const, icon: MessageCircle },
  { href: LINKS.email, key: 'email' as const, icon: Mail },
  { href: LINKS.github, key: 'github' as const, icon: GitBranch },
  { href: LINKS.lms, key: 'lms' as const, icon: GraduationCap },
  { href: LINKS.bylaws, key: 'bylaws' as const, icon: FileText },
]

type Partner = {
  name: string
  href?: string
  logo: string
}

const PARTNERS: Partner[] = [
  {
    name: 'تجمع المهندسين السوريين في تركيا',
    href: 'http://mtd.ngo/',
    logo: '/partners/mtd.png',
  },
  {
    name: 'TechRise',
    href: 'https://www.instagram.com/techrise5',
    logo: '/partners/techrise.png',
  },
  {
    name: 'Youth Affairs',
    href: 'https://www.facebook.com/Youthafairs/',
    logo: '/partners/youth-affairs.png',
  },
  {
    name: 'Tulip Technologies',
    href: 'https://www.tuliptechs.com/',
    logo: '/partners/tulip.png',
  },
  {
    name: 'Happy Center',
    href: 'https://www.happycenter.com.tr/',
    logo: '/partners/happy-center.png',
  },
  {
    name: 'Bina',
    href: 'https://binaprogram.org/',
    logo: '/partners/bina.png',
  },
  {
    name: 'Atölye Üsküdar',
    href: 'https://atolyeuskudar.com/',
    logo: '/partners/atolye-uskudar.png',
  },
  {
    name: 'MAPS',
    href: undefined,
    logo: '/partners/maps.png',
  },
  {
    name: 'Babi Alem',
    href: 'https://babialem.org/',
    logo: '/partners/babi-alem.png',
  },
  {
    name: 'Tollabi',
    href: undefined,
    logo: '/partners/tollabi.png',
  },
]

export function SiteFooter() {
  const { t, dir } = useLocale()

  return (
    <footer id="contact" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="inline-block">
              <BrandLockup dark />
            </a>
            <p className="mt-6 max-w-sm text-pretty leading-relaxed text-navy-foreground/70">
              {t.footer.blurb}
            </p>
            <a
              href={LINKS.email}
              className="mt-8 inline-flex items-center gap-2 border border-navy-foreground/30 px-6 py-3.5 font-mono text-sm uppercase tracking-[0.1em] transition-colors hover:border-accent hover:text-accent"
            >
              {t.footer.getInTouch}
              <ArrowUpRight className={cn('size-4', dir === 'rtl' && '-scale-x-100')} />
            </a>
          </div>

          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-navy-foreground/50">
              {t.footer.connect}
            </span>
            <ul className="mt-5 flex flex-col gap-3">
              {CONNECT_HREFS.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="inline-flex items-center gap-2 text-navy-foreground/80 hover:text-accent"
                  >
                    <item.icon className="size-4" /> {t.footer[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-navy-foreground/50">
              {t.footer.partners}
            </span>
            <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {PARTNERS.map((partner) => {
                const content = (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-full object-contain opacity-90 transition-opacity hover:opacity-100"
                  />
                )

                return (
                  <li
                    key={partner.name}
                    className="flex items-center justify-center rounded-sm border border-navy-foreground/10 bg-navy-foreground/5 px-3 py-4"
                  >
                    {partner.href ? (
                      <a
                        href={partner.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full"
                        aria-label={partner.name}
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-navy-foreground/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs tracking-[0.05em] text-navy-foreground/50">{t.footer.rights}</p>
          <p className="font-mono text-xs tracking-[0.05em] text-navy-foreground/50">
            {t.footer.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
