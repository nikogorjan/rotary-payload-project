import type { Benefits as BenefitsProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

export const Benefits: React.FC<BenefitsProps> = ({
  heading,
  description,
  links,
  image,
  subHeadings,
}) => {
  return (
    <section id="benefits" className="px-[5%] py-16 md:py-24 lg:py-28 bg-scheme1Background">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-5xl font-bebas leading-[1.2] md:text-7xl lg:text-8xl">{heading}</h3>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md font-karla font-light">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {(subHeadings ?? []).map((subHeading, index) => (
                <div key={index}>
                  <div className="relative mb-3 md:mb-4 aspect-square size-12">
                    <Media
                      fill
                      imgClassName="relative size-full object-cover rounded-medium"
                      priority
                      resource={subHeading.icon}
                    />
                  </div>
                  <h6 className="mb-3 text-md font-bebas leading-[1.4] md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="font-karla font-light">{subHeading.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {(links || []).map(({ link }, i) => {
                return <CMSLink key={i} size="lg" {...link} />
              })}
            </div>
          </div>
        </div>
        <div className="relative w-full aspect-[16/7]">
          <Media
            fill
            imgClassName="relative size-full object-cover rounded-2xl"
            priority
            resource={image}
          />
        </div>
      </div>
    </section>
  )
}
