import type { ImpactBlock as ImpactBlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const ImpactBlock: React.FC<ImpactBlockProps> = ({
  heading,
  description,
  links,
  image,
  subHeadings,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-scheme1Background">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="font-bebas rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="font-karla font-light mb-6 md:mb-8 md:text-md">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {(subHeadings ?? []).map((subHeading, index) => (
                <div key={index}>
                  <div className="mb-3 md:mb-4">
                    <div className="relative size-12">
                      <Media
                        fill
                        imgClassName="relative size-full object-cover rounded-2xl"
                        priority
                        resource={subHeading.icon}
                      />
                    </div>
                  </div>
                  <h6 className="font-bebas mb-3 text-md leading-[1.4] md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="font-karla font-light">{subHeading.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {(links ?? []).map(({ link }, i) => (
                <CMSLink {...link} key={i} className="w-full sm:w-auto" />
              ))}
            </div>
          </div>
          <div className="relative w-full aspect-[1/1]">
            <Media
              fill
              imgClassName="relative size-full object-cover rounded-2xl"
              priority
              resource={image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
