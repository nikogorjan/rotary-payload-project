import type React from 'react'
import { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ImpactBlock } from '@/blocks/ImpactBlock/Component'
import { RotaryInternational } from './RotaryInternational/Component'
import { Team } from './Team/Component'
import { Benefits } from './Benefits/Component'
import { Faq } from './Faq/Component'
import { Stats } from './Stats/Component'
import { BlogSection } from './BlogSection/Component'
import { HowToBullets } from './HowToBullets/Component'
import { Expectations } from './Expectations/Component'
import { RotaryPledge } from './RotaryPledge/Component'
import { Vrednote } from './Vrednote/Component'
import { Timeline } from './Timeline/Component'
import { ContactCards } from './Contact/Component'
import { HistoryStats } from './HistoryStats/Component'
import { HistoryPresidents } from './HistoryPresidents/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  impact: ImpactBlock,
  rotaryInternational: RotaryInternational,
  team: Team,
  benefits: Benefits,
  faq: Faq,
  stats: Stats,
  Stats: Stats,
  blogSection: BlogSection,
  howToBullets: HowToBullets,
  expectations: Expectations,
  pledgeSection: RotaryPledge,
  vrednote: Vrednote,
  timeline: Timeline,
  contactCards: ContactCards,
  historyStats: HistoryStats,
  historyPresidents: HistoryPresidents,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={block.id}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
