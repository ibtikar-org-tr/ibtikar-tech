import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { PrinciplesSection } from '@/components/principles-section'
import { AimsSection } from '@/components/aims-section'
import { TracksSection } from '@/components/projects-section'
import { CurriculumSection } from '@/components/curriculum-section'
import { JourneyTimeline } from '@/components/journey-timeline'
import { RequirementsSection } from '@/components/clubs-section'
import { RulesSection } from '@/components/members-section'
import { SiteFooter } from '@/components/site-footer'
import type { TrackId } from '@/i18n/types'

function App() {
  const [activeTrack, setActiveTrack] = useState<TrackId>('engineering')

  function openCurriculum(id: TrackId) {
    setActiveTrack(id)
    const curriculum = document.getElementById('curriculum')
    curriculum?.scrollIntoView({ behavior: 'smooth' })
    const url = new URL(window.location.href)
    url.hash = 'curriculum'
    window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`)
  }

  return (
    <main className="bg-background">
      <SiteHeader />
      <Hero />
      <AboutSection />
      <PrinciplesSection />
      <AimsSection />
      <TracksSection onOpenCurriculum={openCurriculum} />
      <CurriculumSection activeTrack={activeTrack} onChangeTrack={setActiveTrack} />
      <JourneyTimeline />
      <RequirementsSection />
      <RulesSection />
      <SiteFooter />
    </main>
  )
}

export default App
