import type { Block } from 'payload'

export const Team: Block = {
  slug: 'team',
  interfaceName: 'Team',
  imageURL: '/media/images/blocks/team.webp',
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
      name: 'teamMembers',
      type: 'array',
      label: 'Team Members',
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'jobTitle',
          type: 'text',
          label: 'Job Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
      ],
    },
  ],
  labels: {
    singular: 'Team',
    plural: 'Teams',
  },
}
