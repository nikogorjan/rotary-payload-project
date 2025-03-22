import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Landing Hero',
          value: 'landingHero',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'landingHeroProps',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'landingHero',
      },
      fields: [
        {
          name: 'tagline',
          type: 'group',
          label: 'Tagline',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Tagline Label',
              required: true,
            },
            {
              name: 'media',
              type: 'upload',
              label: 'Tagline Media',
              relationTo: 'media',
              required: false,
            },
          ],
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
        },
        linkGroup({
          overrides: {
            maxRows: 2,
          },
        }),
        {
          name: 'logos',
          type: 'group',
          label: 'Logos',
          fields: [
            {
              name: 'martjanciLogo',
              type: 'upload',
              label: 'Martjanci Logo',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'rotaryLogo',
              type: 'upload',
              label: 'Rotary Logo',
              relationTo: 'media',
              required: false,
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
      admin: {
        condition: (_, siblingData) => siblingData?.type !== 'landingHero',
      },
    },
    linkGroup({
      overrides: {
        maxRows: 2,
        admin: {
          condition: (_, siblingData) => siblingData?.type !== 'landingHero',
        },
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
