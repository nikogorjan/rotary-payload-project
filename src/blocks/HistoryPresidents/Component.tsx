import type { HistoryPresidents as HistoryPresidentsBlock } from '@/payload-types'

export const HistoryPresidents: React.FC<HistoryPresidentsBlock> = ({
  heading,
  description,
  presidents,
}) => {
  return (
    <section id="history-presidents" className="px-[5%] py-16 md:py-24 lg:py-28 bg-chatmansBlue">
      <div className="container">
        {/* Header */}
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bebas md:mb-6 md:text-7xl lg:text-8xl text-white">
            {heading}
          </h2>
          <p className="md:text-md font-karla font-light text-white">{description}</p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-border-primary/15 bg-[#F8FBFD]">
          {/* Head row */}
          <div className="grid grid-cols-2 items-center bg-white/60 px-5 py-3 text-xs font-karla font-semibold uppercase tracking-wide text-black md:px-6 border-b border-border-primary/10">
            <span>Ime in priimek</span>
            <span className="text-right">Mandat</span>
          </div>

          {/* Body rows */}
          <ul>
            {(presidents ?? []).map((p, i) => (
              <li
                key={p.id ?? i}
                className="grid grid-cols-2 items-center px-5 py-4 md:px-6
                   border-b border-border-primary/10 last:border-b-0
                   [border-bottom-width:0.5px]"
              >
                <span className="font-karla">{p.name}</span>
                <span className="text-right font-karla font-semibold">{p.term}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
