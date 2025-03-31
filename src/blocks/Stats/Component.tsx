import type { Stats as StatsProps } from '@/payload-types'

export const Stats: React.FC<StatsProps> = ({ heading, description, stats }) => {
  return (
    <section id="stats" className="px-[5%] py-16 md:py-24 lg:py-28 bg-chatmansBlue">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bebas md:mb-6 md:text-7xl lg:text-8xl text-white">
            {heading}
          </h2>
          <p className="md:text-md font-karla font-light text-white">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {(stats ?? []).map((stat, index) => (
            <div key={index} className="border-l-2 border-buttercupBackground pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem] font-karla text-white">
                {stat.percentage}
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl font-karla text-white">
                {stat.heading}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
