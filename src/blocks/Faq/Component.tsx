import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from '@relume_io/relume-ui'
import type { Faq as FaqProps } from '@/payload-types'

import { RxPlus } from 'react-icons/rx'

export const Faq: React.FC<FaqProps> = ({ heading, description, questions }) => {
  return (
    <section id="faq" className="px-[5%] py-16 md:py-24 lg:py-28 bg-abbeyBackground">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bebas md:mb-6 md:text-7xl lg:text-8xl text-white">
            {heading}
          </h2>
          <p className="md:text-md font-karla font-light text-white">{description}</p>
        </div>
        <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
          {(questions ?? []).map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-faqBorder rounded-medium px-5 md:px-6 bg-faqBackground"
            >
              <AccordionTrigger
                icon={
                  <RxPlus className="size-7 shrink-0 text-white transition-transform duration-300 md:size-8" />
                }
                className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45 font-karla font-semibold text-white"
              >
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 font-karla font-light text-white">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
