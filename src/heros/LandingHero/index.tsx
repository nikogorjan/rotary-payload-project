import type { ButtonProps } from '@relume_io/relume-ui'
import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

type ImageProps = {
  src: string
  alt?: string
}

type Props = {
  heading: string
  description: string
  buttons: ButtonProps[]
  image: ImageProps
}

export const LandingHero: React.FC<Page['hero']> = ({ landingHeroProps }) => {
  return (
    <section
      id="relume"
      className="px-[5%] pb-16 pt-32 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36 bg-scheme1Background"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-fit border border-neutralDarkest15 rounded-large bg-white pl-2 pr-3 py-2 gap-2 mb-6">
                <div className="relative size-4 sm:size-5 rounded-full">
                  <Media
                    fill
                    imgClassName="w-full"
                    priority
                    resource={landingHeroProps?.tagline.media}
                  />
                </div>
                <p className="font-karla text-xs sm:text-sm">{landingHeroProps?.tagline.label}</p>
              </div>
              <h1 className="font-bebas mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl max-w-md">
                {landingHeroProps?.heading}
              </h1>
              <p className="md:text-md font-karla max-w-md font-light">
                {landingHeroProps?.description}
              </p>
              <div className="mt-6 mb-7 flex flex-col sm:flex-row w-full items-center justify-center gap-4 md:mt-8">
                {(landingHeroProps?.links ?? []).map(({ link }, i) => (
                  <CMSLink {...link} key={i} className="w-full sm:w-auto" />
                ))}
              </div>
              <div className="flex flex-row gap-4 items-center justify-center">
                <div className="relative mb-2 h-9 w-9">
                  <Media
                    fill
                    imgClassName="relative size-full object-cover"
                    priority
                    resource={landingHeroProps?.logos?.martjanciLogo}
                  />
                </div>
                <div className="relative mb-2 w-24 h-9">
                  <Media
                    fill
                    imgClassName="relative size-full object-cover"
                    priority
                    resource={landingHeroProps?.logos?.rotaryLogo}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-[16/7]">
            <Media
              fill
              imgClassName="relative size-full object-cover rounded-2xl"
              priority
              resource={landingHeroProps?.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
