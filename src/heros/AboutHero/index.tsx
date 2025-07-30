// blocks/AboutHero/Component.tsx
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const AboutHero: React.FC<Page['hero']> = ({ aboutHeroProps }) => {
  if (!aboutHeroProps) return null

  const { heading, description, links, image } = aboutHeroProps
  return (
    <section
      id="relume"
      className="px-[5%] pb-16 pt-32 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36 bg-scheme1Background"
    >
      <div className="container">
        <div className="flex flex-col">
          {/* copy + buttons */}
          <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bebas md:mb-6 md:text-9xl lg:text-10xl">
                {heading}
              </h1>

              <p className="md:text-md font-karla font-light">{description}</p>

              {Array.isArray(links) && links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  {(links ?? []).map(({ link }) => (
                    <CMSLink key={link.label} {...link} className="w-full sm:w-auto" />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* hero image */}
          <div className="relative w-full aspect-[16/9]">
            <Media
              fill
              resource={image}
              imgClassName="relative size-full object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
