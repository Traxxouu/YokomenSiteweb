import { defineField, defineType } from 'sanity'

export const gameType = defineType({
  name: 'game',
  title: 'Jeux',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom du jeu',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Description courte (pour la carte)',
      type: 'text',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo du jeu',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isActive',
      title: 'Jeu actif',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags pour lier les événements (ex: vintage-story, valorant, etc.)',
    }),
    defineField({
      name: 'servers',
      title: 'Serveurs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'serverName',
              title: 'Nom du serveur',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'ip',
              title: 'IP du serveur',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'port',
              title: 'Port',
              type: 'string',
            },
            {
              name: 'version',
              title: 'Version',
              type: 'string',
            },
            {
              name: 'mods',
              title: 'Mods installés',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'rules',
              title: 'Règles du serveur',
              type: 'text',
            },
            {
              name: 'isOnline',
              title: 'Serveur en ligne',
              type: 'boolean',
              initialValue: true,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'connectionGuide',
      title: 'Guide de connexion',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Comment rejoindre le serveur (rich text)',
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Pour trier les jeux (1 = premier)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
      subtitle: 'shortDescription',
    },
  },
})