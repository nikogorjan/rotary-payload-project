import type { Expectations as ExpectationsProps } from '@/payload-types'
import { Media } from '@/components/Media'

export const Expectations: React.FC<ExpectationsProps> = ({ heading, description, sections }) => {
  return (
    <section id="expectations" className="px-[5%] py-16 md:py-24 lg:py-28 bg-chatmansBlue">
      <div className="container">
        {/* top copy */}
        <div className="mb-12 md:mb-18 lg:mb-20 max-w-lg">
          <h2 className="mb-5 text-white text-5xl font-bebas md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md text-white font-karla">{description}</p>
        </div>

        {/* four‑up grid */}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {(sections ?? []).map((section) => {
            // ── derive a safe alt string ──────────────────────────────────────────────
            const altText: string | undefined =
              typeof section.icon === 'object' &&
              section.icon &&
              'alt' in section.icon &&
              section.icon.alt
                ? section.icon.alt
                : section.heading
            // ──────────────────────────────────────────────────────────────────────────
            return (
              <div key={section.id} className="flex gap-6">
                <div className="h-auto w-16 relative">
                  <Media resource={section.icon} alt={altText} imgClassName="object-contain" fill />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
                    {section.heading}
                  </h3>
                  <p className="text-white">{section.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
