import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'

export const HowToHero: React.FC<Page['hero']> = ({ howToHeroProps }) => {
  if (!howToHeroProps) return null

  const { heading, description, image } = howToHeroProps

  // Strip null → undefined so <Media alt> is typed correctly
  const altText: string | undefined =
    typeof image === 'object' && image && 'alt' in image && image.alt
      ? image.alt
      : heading || undefined

  return (
    <section
      id="relume"
      className="px-[5%] pb-16 pt-32 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36 bg-scheme1Background"
    >
      <div className="container">
        {/* 2‑col grid on desktop, single‑column stack below md */}
        <div className="grid gap-x-16 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          {/* Left column — text */}
          <div>
            <h1 className="mb-5 text-6xl  md:mb-6 md:text-9xl lg:text-10xl font-bebas">
              {heading}
            </h1>
            {description && <p className="md:text-md font-karla">{description}</p>}
          </div>

          {/* Right column — square image */}
          <div className="relative w-full aspect-square">
            <Media
              fill
              imgClassName="object-cover rounded-2xl" // customise radius if needed
              priority
              alt={altText}
              resource={image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
