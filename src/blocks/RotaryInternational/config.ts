import type { Block } from 'payload'

export const RotaryInternational: Block = {
  slug: 'rotaryInternational',
  interfaceName: 'RotaryInternational',
  imageURL: '/media/images/blocks/rotaryInternational.webp',
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
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Sections',
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Section Heading',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Section Description',
        },
      ],
    },
  ],
  labels: {
    singular: 'Rotary International',
    plural: 'Rotary Internationals',
  },
}
