// blocks/Vrednote/Component.tsx
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import type { Vrednote as VrednoteBlock } from '@/payload-types'

type FeatureProps = NonNullable<VrednoteBlock['featureSections']>[number]

const Feature: React.FC<FeatureProps> = ({ icon, heading, description, links }) => {
  const alt = typeof icon === 'object' && icon && 'alt' in icon && icon.alt ? icon.alt : heading
  const primaryLink = links?.[0]?.link

  return (
    <div className="flex flex-col justify-center border border-border-primary/15 p-6 rounded-2xl bg-[#F8FBFD]">
      {/* icon */}
      <div className="mb-3 md:mb-4">
        <div className="relative size-12">
          <Media fill resource={icon} alt={alt} imgClassName="object-contain" />
        </div>
      </div>

      {/* copy */}
      <h3 className="mb-2 text-lg font-bebas leading-[1.4] md:text-2xl">{heading}</h3>
      <p>{description}</p>

      {/* single button */}
      {primaryLink && (
        <div className="mt-5 md:mt-6">
          <CMSLink {...primaryLink} className="w-full sm:w-auto" />
        </div>
      )}
    </div>
  )
}

export const Vrednote: React.FC<VrednoteBlock> = ({
  tagline,
  heading,
  description,
  featureSections,
}) => (
  <section id="vrednote" className="px-[5%] py-16 md:py-24 lg:py-28 bg-scheme1Background">
    <div className="container">
      {/* top copy */}
      <div className="mb-12 md:mb-18 lg:mb-20">
        <div className="mx-auto max-w-lg text-center">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bebas md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
      </div>

      {/* features grid */}
      <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
        {(featureSections ?? []).map((feat) => (
          <Feature key={feat.id} {...feat} />
        ))}
      </div>
    </div>
  </section>
)
