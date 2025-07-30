import type { Block } from 'payload'

export const RotaryPledge: Block = {
  slug: 'pledgeSection',
  interfaceName: 'RotaryPledge',
  imageURL: '/media/images/blocks/pledge.webp',
  fields: [
    /** FIRST PART — PROMISES **************************************************/
    {
      name: 'headingOne',
      type: 'text',
      label: 'Heading (Promises)',
      required: true,
    },
    {
      name: 'promises',
      type: 'array',
      label: 'Promises / Bullet Points',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'textarea', // switch to richText if you need formatting
          label: 'Promise',
          required: true,
        },
      ],
    },

    /** SECOND PART — FOUR‑WAY TEST ********************************************/
    {
      name: 'headingTwo',
      type: 'text',
      label: 'Heading (Four‑Way Test)',
      required: true,
    },
    {
      name: 'intro',
      type: 'textarea',
      label: 'Introductory Sentence',
      required: true,
    },
    {
      name: 'questions',
      type: 'array',
      label: 'Four Questions',
      minRows: 4,
      maxRows: 4, // always exactly four; remove if you want flexibility
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Question',
          required: true,
        },
      ],
    },
  ],
  labels: {
    singular: 'Rotary Pledge',
    plural: 'Rotary Pledges',
  },
}
