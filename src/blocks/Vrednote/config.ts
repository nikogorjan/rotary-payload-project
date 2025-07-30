// blocks/Vrednote/config.ts
import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup' // ← add this import

export const Vrednote: Block = {
  slug: 'vrednote',
  interfaceName: 'Vrednote',
  imageURL: '/media/images/blocks/vrednote.webp',
  fields: [
    { name: 'tagline', type: 'text', required: true },
    { name: 'heading', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },

    {
      name: 'featureSections',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media', required: true },
        { name: 'heading', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },

        /* single CMS link */
        linkGroup({
          overrides: {
            maxRows: 1, // exactly one button per feature
            labels: { singular: 'Button', plural: 'Buttons' },
          },
        }),
      ],
    },
  ],
  labels: { singular: 'Vrednote', plural: 'Vrednote' },
}
