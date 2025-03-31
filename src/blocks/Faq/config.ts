import type { Block } from 'payload'

export const Faq: Block = {
  slug: 'faq',
  interfaceName: 'Faq',
  imageURL: '/media/images/blocks/faq.webp',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'questions',
      type: 'array',
      label: 'Questions',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Question Title',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer',
          required: true,
        },
      ],
    },
  ],
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
  },
}
