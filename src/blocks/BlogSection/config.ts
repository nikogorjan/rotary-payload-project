import type { Block } from 'payload'
import { linkGroup } from '../../fields/linkGroup'

export const BlogSection: Block = {
  slug: 'blogSection',
  interfaceName: 'BlogSection',
  imageURL: '/media/images/blocks/blogSection.webp',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: true,
    },
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
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'blogPosts',
      type: 'array',
      label: 'Blog Posts',
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'URL',
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
          name: 'category',
          type: 'text',
          label: 'Category',
          required: true,
        },
        {
          name: 'readTime',
          type: 'text',
          label: 'Read Time',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Post Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Post Description',
          required: true,
        },
        linkGroup({
          appearances: ['default', 'blogLink'],
          overrides: {
            maxRows: 2,
          },
        }),
      ],
    },
  ],
  labels: {
    singular: 'Blog Section',
    plural: 'Blog Sections',
  },
}
