import type { Block } from 'payload'

export const Expectations: Block = {
  slug: 'expectations',
  interfaceName: 'Expectations',
  imageURL: '/media/images/blocks/expectations.webp',
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
      name: 'sections',
      type: 'array',
      label: 'Sections',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon',
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
          required: true,
        },
      ],
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Buttons',
      maxRows: 2,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Variant',
          defaultValue: 'secondary',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Link', value: 'link' },
          ],
        },
      ],
    },
  ],
  labels: {
    singular: 'Expectations',
    plural: 'Expectations',
  },
}
