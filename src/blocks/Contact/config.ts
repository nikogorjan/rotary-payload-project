import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

/** Three‑up contact cards with icon, text, and link */
export const ContactCards: Block = {
  slug: 'contactCards',
  interfaceName: 'ContactCards',
  imageURL: '/media/images/blocks/contact-cards.webp',
  fields: [
    {
      name: 'contacts',
      type: 'array',
      label: 'Contact Cards',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'phone' },
            { label: 'Office', value: 'map' },
          ],
        },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },

        /* single link */
        linkGroup({
          overrides: {
            maxRows: 1,
            labels: { singular: 'Link', plural: 'Link' },
          },
        }),
      ],
    },
  ],
  labels: { singular: 'Contact Cards', plural: 'Contact Cards' },
}
