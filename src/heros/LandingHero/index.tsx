import { Button } from '@relume_io/relume-ui'
import type { ButtonProps } from '@relume_io/relume-ui'

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

export type LandingHeroProps = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

export const LandingHero = (props: LandingHeroProps) => {
  const { heading, description, buttons, image } = {
    ...LandingHeroDefaults,
    ...props,
  }
  return (
    <section
      id="relume"
      className="px-[5%] pb-16 pt-32 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36 bg-scheme1Background"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="font-bebas mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                {heading}
              </h1>
              <p className="font-karla md:text-md">{description}</p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <img src={image.src} className="size-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  )
}

export const LandingHeroDefaults: Props = {
  heading: 'Medium length hero heading goes here',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  buttons: [{ title: 'Button' }, { title: 'Button', variant: 'secondary' }],
  image: {
    src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
    alt: 'Relume placeholder image',
  },
}
