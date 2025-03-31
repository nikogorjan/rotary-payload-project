import type { Block } from 'payload'
import { linkGroup } from '../../fields/linkGroup'

export const Benefits: Block = {
  slug: 'benefits',
  interfaceName: 'Benefits',
  imageURL: '/media/images/blocks/benefits.webp',
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
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'subHeadings',
      type: 'array',
      label: 'Sub Headings',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          label: 'Icon',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Subheading Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Subheading Description',
          required: true,
        },
      ],
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
  labels: {
    singular: 'Benefits',
    plural: 'Benefits',
  },
}
