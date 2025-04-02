'use client'

import { useState, useEffect } from 'react'
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@relume_io/relume-ui'
import clsx from 'clsx'
import { Media } from '@/components/Media'
import type { Team as TeamProps } from '@/payload-types'

export const Team: React.FC<TeamProps> = ({ heading, description, teamMembers }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="team" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bebas md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="font-karla font-light md:text-md">{description}</p>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            loop: false,
            align: 'start',
          }}
        >
          <CarouselContent className="ml-0">
            {(teamMembers ?? []).map((member, index) => (
              <CarouselItem
                key={index}
                className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-1/3"
              >
                <TeamMember member={member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-12 flex items-center justify-between">
            <div className="mt-5 flex w-full items-start justify-start">
              {(teamMembers ?? []).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx('mx-[3px] inline-block size-2 rounded-full', {
                    'bg-neutral-black': current === index + 1,
                    'bg-neutral-light': current !== index + 1,
                  })}
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

type TeamMemberType = NonNullable<TeamProps['teamMembers']>[number]

const TeamMember = ({ member }: { member: TeamMemberType }) => {
  return (
    <div className="flex flex-col">
      <div className="relative mb-5 aspect-square size-full overflow-hidden md:mb-6 md:pt-[100%]">
        <Media
          fill
          imgClassName="relative size-full object-cover rounded-medium"
          priority
          resource={member.image}
        />
      </div>
      <div className="mb-3 md:mb-4">
        <h5 className="text-md font-bebas md:text-lg">{member.name}</h5>
        <h6 className="font-karla font-normal md:text-md">{member.jobTitle}</h6>
      </div>
      <p className="font-karla font-light">{member.description}</p>
    </div>
  )
}
