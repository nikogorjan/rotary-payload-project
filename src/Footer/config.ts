import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'group',
      label: 'Logo',
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'Logo URL',
        },
        {
          name: 'src',
          type: 'upload',
          label: 'Logo Image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'address',
      type: 'group',
      label: 'Address',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Address Label',
          required: true,
        },
        {
          name: 'value',
          type: 'textarea',
          label: 'Address Value',
          required: true,
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Contact Label',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          required: true,
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email Address',
          required: true,
        },
      ],
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'Social Media URL',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Social Media Icon',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'YouTube', value: 'youtube' },
          ],
          required: true,
        },
      ],
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'footerText',
      type: 'textarea',
      label: 'Footer Text',
    },
    {
      name: 'footerLinks',
      type: 'array',
      label: 'Footer Links',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Link Title',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Link URL',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
