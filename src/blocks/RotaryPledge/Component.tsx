import type { RotaryPledge as RotaryPledgeBlock } from '@/payload-types'

export const RotaryPledge: React.FC<RotaryPledgeBlock> = ({
  headingOne,
  promises,
  headingTwo,
  intro,
  questions,
}) => {
  return (
    <section id="pledge" className="px-[5%] py-16 md:py-24 lg:py-28 bg-scheme1Background">
      <div className="container max-w-4xl">
        {/* FIRST PART -------------------------------------------------------- */}
        <h2 className="mb-6 text-2xl font-bebas md:mb-8 md:text-4xl lg:text-5xl">{headingOne}</h2>

        <ul className="mb-12 list-disc pl-5 space-y-2 md:mb-16 lg:mb-20">
          {(promises ?? []).map((p) => (
            <li key={p.id}>{p.text}</li>
          ))}
        </ul>

        {/* SECOND PART ------------------------------------------------------- */}
        <h3 className="mb-4 text-xl font-bebas md:mb-5 md:text-3xl lg:text-4xl">{headingTwo}</h3>

        <p className="mb-4 md:mb-6">{intro}</p>

        <ol className="list-decimal pl-5 space-y-2">
          {(questions ?? []).map((q) => (
            <li key={q.id}>{q.text}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}
