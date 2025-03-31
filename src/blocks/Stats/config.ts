import type { Block } from 'payload'

export const Stats: Block = {
  slug: 'Stats',
  interfaceName: 'Stats',
  imageURL: '/media/images/blocks/stats.webp',
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
      name: 'stats',
      type: 'array',
      label: 'Stats',
      fields: [
        {
          name: 'percentage',
          type: 'text',
          label: 'Stat',
          required: true,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Stat Heading',
          required: true,
        },
      ],
    },
  ],
  labels: {
    singular: 'Stats',
    plural: 'Statss',
  },
}
