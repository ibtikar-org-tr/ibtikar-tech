import type { LecturerId } from '@/data/lecturers'

export type Lang = 'ar' | 'en' | 'tr'
export type Dir = 'rtl' | 'ltr'
export type TrackId = 'engineering' | 'research' | 'ai'

export const LANGS: { code: Lang; label: string; dir: Dir }[] = [
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'tr', label: 'TR', dir: 'ltr' },
]

export const DEFAULT_LANG: Lang = 'ar'
export const STORAGE_KEY = 'ibtikar-tech-lang'
export const LANG_QUERY_PARAM = 'lang'

export type TrackWeek = {
  week: string
  title: string
  body: string
  practice: string
  lecturerId?: LecturerId
}

export type TrackItem = {
  id: TrackId
  title: string
  kicker: string
  body: string
  audience: string
  project: string
  topics: string[]
  tools: string[]
  weeks: TrackWeek[]
}

export type Dictionary = {
  dir: Dir
  locale: string
  brand: string
  techLogoAlt: string
  documentTitle: string
  metaDescription: string
  nav: {
    about: string
    tracks: string
    curriculum: string
    rules: string
    registerNow: string
    homeAria: string
    primaryNav: string
    mobileNav: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    eyebrow: string
    brandTitle: string
    titleLine1: string
    titleLine2Before: string
    titleLine2Accent: string
    body: string
    registerNow: string
    exploreTracks: string
    aboutProgram: string
    stats: { value: string; label: string }[]
  }
  about: {
    label: string
    title: string
    body: string
    vision: string
    visionBody: string
    mission: string
    missionBody: string
  }
  values: {
    label: string
    items: { title: string }[]
  }
  benefits: {
    label: string
    items: { title: string; body: string }[]
  }
  tracks: {
    label: string
    title: string
    weeklyPlan: string
    audienceLabel: string
    projectLabel: string
    topicsLabel: string
    lecturersLabel: string
    items: TrackItem[]
  }
  lecturers: {
    tba: string
    people: Record<LecturerId, { name: string; role: string }>
  }
  curriculum: {
    label: string
    title: string
    weekLabel: string
    practiceLabel: string
    lecturerLabel: string
  }
  requirements: {
    label: string
    title: string
    items: string[]
  }
  rules: {
    label: string
    title: string
    items: { metric: string; title: string; body: string }[]
  }
  footer: {
    blurb: string
    getInTouch: string
    connect: string
    partners: string
    rights: string
    location: string
    instagram: string
    linkedin: string
    telegramChannel: string
    telegramContact: string
    whatsapp: string
    email: string
    github: string
    bylaws: string
    lms: string
  }
}

export function isLang(value: string | null | undefined): value is Lang {
  return value === 'ar' || value === 'en' || value === 'tr'
}

export function isTrackId(value: string | null | undefined): value is TrackId {
  return value === 'engineering' || value === 'research' || value === 'ai'
}
