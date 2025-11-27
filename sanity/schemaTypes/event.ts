import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Événements',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de l\'événement',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventType',
      title: 'Type d\'événement',
      type: 'string',
      options: {
        list: [
          { title: 'Tournoi', value: 'tournament' },
          { title: 'Stream collectif', value: 'collective-stream' },
          { title: 'Event serveur', value: 'server-event' },
          { title: 'Soirée découverte', value: 'discovery' },
          { title: 'Autre', value: 'other' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image/Bannière',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Date de début',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Date de fin',
      type: 'datetime',
    }),
    defineField({
      name: 'relatedGames',
      title: 'Jeux concernés',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'game' }] }],
    }),
    defineField({
      name: 'gameTags',
      title: 'Tags de jeux',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Pour lier avec les jeux (ex: vintage-story, valorant)',
    }),
    defineField({
      name: 'participants',
      title: 'Streamers participants',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'streamer' }] }],
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Lien d\'inscription (Discord/Google Form)',
      type: 'url',
    }),
    defineField({
      name: 'practicalInfo',
      title: 'Infos pratiques',
      type: 'text',
    }),
    defineField({
      name: 'isPast',
      title: 'Événement passé',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'eventType',
      date: 'startDate',
    },
  },
})