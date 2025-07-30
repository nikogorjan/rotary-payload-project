// blocks/HistoryHero/Component.tsx
import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'

export const HistoryHero: React.FC<Page['hero']> = ({ historyHeroProps }) => {
  if (!historyHeroProps) return null

  const { heading, description, image } = historyHeroProps

  const altText: string | undefined =
    typeof image === 'object' && image && 'alt' in image && image.alt
      ? image.alt // string
      : heading || undefined // fallback, never null

  return (
    <section
      id="history-hero"
      className="px-[5%] pb-16 pt-32 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36 bg-scheme1Background"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          {/* text + buttons (left) */}
          <div>
            <h1 className="mb-5 text-6xl font-bebas md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
          </div>

          {/* image (right) */}
          <div className="relative w-full aspect-[1/1]">
            {' '}
            {/* ← makes the cell relative & sized */}
            <Media
              resource={image}
              alt={altText}
              fill
              imgClassName="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
