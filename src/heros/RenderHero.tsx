import type React from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'
import { LandingHero } from '@/heros/LandingHero'
import { LandingTicket } from '@/heros/LandingTicket'
import { HowToHero } from './HowToHero'
import { AboutHero } from './AboutHero'
import { HistoryHero } from './HistoryHero'
import { ContactHero } from './ContactHero'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
  landingHero: LandingHero,
  landingTicket: LandingTicket,
  howToHero: HowToHero,
  aboutHero: AboutHero,
  historyHero: HistoryHero,
  contactHero: ContactHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
