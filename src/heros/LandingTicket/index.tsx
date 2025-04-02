import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const LandingTicket: React.FC<Page['hero']> = ({ landingTicketProps }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-scheme1Background">
      <div className="container">
        <div className="flex flex-col">
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bebas md:mb-6 md:text-9xl lg:text-10xl">
                {landingTicketProps?.heading}
              </h1>
              <p className="md:text-md font-karla font-light">{landingTicketProps?.description}</p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {(landingTicketProps?.links ?? []).map(({ link }, i) => (
                  <CMSLink {...link} key={i} className="w-full sm:w-auto" />
                ))}
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-[18/6]">
            <Media
              fill
              imgClassName="relative size-full object-cover rounded-2xl"
              priority
              resource={landingTicketProps?.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
