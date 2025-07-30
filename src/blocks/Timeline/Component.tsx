'use client'

import type { Timeline as TimelineBlock } from '@/payload-types'

type Item = NonNullable<TimelineBlock['timelineItems']>[number]

/* ─── card with fixed dot ──────────────────────────────────────────────── */
const TimelineCard: React.FC<{ item: Item }> = ({ item }) => (
  <div className="relative pl-8 md:pl-12">
    {/* dot */}
    <div className="absolute left-[0.625rem] top-9 md:left-[1.125rem] md:top-12">
      <div className="size-[0.9375rem] rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
    </div>

    {/* card */}
    <div className="border border-border-primary/15 bg-[#F8FBFD] p-6 rounded-2xl md:p-8">
      <h3 className="mb-3 text-4xl font-bebas leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
        {item.heading}
      </h3>
      <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{item.title}</h4>
      <p>{item.description}</p>
    </div>
  </div>
)

/* ─── main timeline section ────────────────────────────────────────────── */
export const Timeline: React.FC<TimelineBlock> = ({ heading, description, timelineItems }) => (
  <section id="timeline" className="px-[5%] py-16 md:py-24 lg:py-28 bg-scheme1Background">
    <div className="container max-w-lg">
      {/* header */}
      <div className="mb-12 md:mb-18 lg:mb-20">
        <h2 className="mb-5 text-5xl font-bebas md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
        <p className="md:text-md">{description}</p>
      </div>

      {/* timeline wrapper */}
      <div className="relative">
        {/* full‑height line */}
        <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-neutral-black md:left-[1.5rem]" />

        {/* cards */}
        <div className="grid gap-8 sm:gap-12 md:gap-20">
          {(timelineItems ?? []).map((item) => (
            <TimelineCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  </section>
)
