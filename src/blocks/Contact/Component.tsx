'use client'

import type { ContactCards as ContactCardsBlock } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi'

const iconMap = {
  email: <BiEnvelope className="size-12" />,
  phone: <BiPhone className="size-12" />,
  map: <BiMap className="size-12" />,
} as const

export const ContactCards: React.FC<ContactCardsBlock> = ({ contacts }) => {
  if (!contacts?.length) return null

  return (
    <section id="contact-cards" className="px-[5%] py-16 md:py-24 lg:py-28 bg-chatmansBlue">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          {contacts.map(({ id, icon, title, description, links }) => (
            <div key={id}>
              <div className="mb-5 lg:mb-6  text-white">
                {iconMap[icon as keyof typeof iconMap]}
              </div>

              <h3 className="mb-3 text-2xl font-bebas text-white leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
                {title}
              </h3>

              <p className="mb-5 md:mb-6 text-white">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
