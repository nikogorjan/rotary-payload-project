import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const HistoryStats: Block = {
  slug: 'historyStats',
  interfaceName: 'HistoryStats',
  imageURL: '/media/images/blocks/history-stats.webp',
  fields: [
    { name: 'tagline', type: 'text', label: 'Tagline', required: true },
    { name: 'heading', type: 'text', label: 'Heading', required: true },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },

    // Buttons (use your CMS link shape)
    linkGroup({
      overrides: {
        maxRows: 2,
        labels: { singular: 'Button', plural: 'Buttons' },
      },
    }),

    // Stats grid
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      fields: [
        {
          name: 'percentage',
          type: 'text',
          label: 'Številka / odstotek (npr. 30%)',
          required: true,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Opis',
          required: true,
        },
      ],
    },
  ],
  labels: { singular: 'History Stats', plural: 'History Stats' },
}
