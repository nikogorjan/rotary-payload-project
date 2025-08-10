import type { HistoryStats as HistoryStatsBlock } from '@/payload-types'

export const HistoryStats: React.FC<HistoryStatsBlock> = ({
  tagline,
  heading,
  description,
  stats,
}) => {
  return (
    <section id="history-stats" className="px-[5%] py-16 md:py-24 lg:py-28 bg-chatmansBlue">
      <div className="container">
        {/* header */}
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-[5.25rem]">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-white">{tagline}</p>
            <h2 className="text-5xl font-bebas md:text-7xl lg:text-8xl text-white">{heading}</h2>
          </div>

          <div>
            <p className="md:text-md text-white">{description}</p>
          </div>
        </div>

        {/* stats grid */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {(stats ?? []).map((stat, i) => (
            <div key={stat.id ?? i} className="border-l-2 border-border-white pl-8">
              <p className="mb-2 text-10xl font-bebas leading-[1.3] md:text-[4rem] lg:text-[5rem] text-white">
                {stat.percentage}
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl text-white">
                {stat.heading}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
