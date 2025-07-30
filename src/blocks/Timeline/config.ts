import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

/**
 * Timeline section with scroll‑animated dots (a.k.a. “Timeline 6”)
 */
export const Timeline: Block = {
  slug: 'timeline', // blockType
  interfaceName: 'Timeline', // appears in payload‑types.ts
  imageURL: '/media/images/blocks/timeline.webp',
  fields: [
    /* ───────── top copy ───────── */
    { name: 'heading', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },

    /* ───────── timeline items ─── */
    {
      name: 'timelineItems',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'heading', type: 'text', required: true }, // date / year
        { name: 'title', type: 'text', required: true }, // short heading
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
  labels: { singular: 'Timeline', plural: 'Timelines' },
}
