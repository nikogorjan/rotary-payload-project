import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const HowToBullets: Block = {
  slug: 'howToBullets',
  interfaceName: 'HowToBullets',
  imageURL: '/media/images/blocks/how-to-bullets.webp',
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
      name: 'features',
      type: 'array',
      label: 'Bullet Points',
      minRows: 1,
      fields: [
        {
          name: 'content',
          type: 'richText',
          label: 'Bullet Content',
          required: true,
          editor: lexicalEditor({
            features: ({ rootFeatures }) => [
              ...rootFeatures,
              HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
        },
      ],
    },
  ],
  labels: {
    singular: 'How‑to Bullets',
    plural: 'How‑to Bullets',
  },
}
