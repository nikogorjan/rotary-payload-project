import type { Block } from 'payload'
import { linkGroup } from '../../fields/linkGroup'

export const ImpactBlock: Block = {
  slug: 'impact',
  interfaceName: 'ImpactBlock',
  imageURL: '/media/images/blocks/impactBlock.webp',
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
          label: 'Sub Heading Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Sub Heading Description',
        },
      ],
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
  ],
  labels: {
    singular: 'Impact Block',
    plural: 'Impact Blocks',
  },
}
