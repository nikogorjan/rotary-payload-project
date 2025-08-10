import type { Block } from 'payload'

export const HistoryPresidents: Block = {
  slug: 'historyPresidents',
  interfaceName: 'HistoryPresidents',
  imageURL: '/media/images/blocks/history-presidents.webp',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Naslov',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Opis',
      required: true,
    },
    {
      name: 'presidents',
      type: 'array',
      label: 'Predsedniki in mandati',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Ime in priimek',
          required: true,
        },
        {
          name: 'term',
          type: 'text',
          label: 'Mandat (npr. 2025–2026)',
          required: true,
          admin: {
            description: 'Uporabite obliko: YYYY–YYYY (en-dash, ne vezaj)',
          },
        },
      ],
    },
  ],
  labels: {
    singular: 'Tabela predsednikov',
    plural: 'Tabele predsednikov',
  },
}
