import type { HowToBullets as HowToBulletsProps } from '@/payload-types'
import RichText from '@/components/RichText'

export const HowToBullets: React.FC<HowToBulletsProps> = ({ heading, description, features }) => {
  return (
    <section id="howtobullets" className="px-[5%] py-16 md:py-24 lg:py-28 bg-abbeyBackground">
      <div className="container">
        {/* two‑column layout on desktop */}
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
          {/* Heading column */}
          <h3 className="text-4xl  leading-[1.2] md:text-5xl lg:text-6xl font-bebas text-white">
            {heading}
          </h3>

          {/* Body column */}
          <div>
            <p className="mb-5 md:mb-6 md:text-md text-white">{description}</p>

            <ul className="my-4 list-decimal pl-5 text-white">
              {(features ?? []).map((feature) => (
                <li key={feature.id} className="my-1 self-start pl-2">
                  <RichText
                    data={feature.content}
                    enableGutter={false}
                    enableProse={false}
                    className="text-white"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
