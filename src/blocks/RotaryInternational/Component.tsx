import type { RotaryInternational as RotaryInternationalProps } from '@/payload-types'
import { Media } from '@/components/Media'

export const RotaryInternational: React.FC<RotaryInternationalProps> = ({
  heading,
  description,
  sections,
}) => {
  return (
    <section id="rotary-international" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h2 className="text-4xl font-bebas leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h2>
          <p className="font-karla font-light md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4 lg:gap-y-16">
          {(sections ?? []).map((section, index) => (
            <div key={index}>
              <div className="relative mb-5 md:mb-6 aspect-[16/9]">
                <Media
                  fill
                  imgClassName="relative size-full object-cover rounded-medium"
                  priority
                  resource={section.image}
                />
              </div>
              <h3 className="mb-3 text-xl font-bebas md:mb-4 md:text-2xl">{section.heading}</h3>
              <p className="font-karla font-light">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
