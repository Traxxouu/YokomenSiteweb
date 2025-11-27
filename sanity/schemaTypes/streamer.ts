import { defineField, defineType } from 'sanity'

export const streamerType = defineType({
  name: 'streamer',
  title: 'Streamers',
  type: 'document',
  fields: [
    defineField({
      name: 'pseudo',
      title: 'Pseudo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'pseudo',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Photo/Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biographie',
      type: 'text',
    }),
    defineField({
      name: 'mainGames',
      title: 'Jeux principaux',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'game' }] }],
    }),
    defineField({
      name: 'twitchUrl',
      title: 'Lien Twitch',
      type: 'url',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'Lien YouTube',
      type: 'url',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Lien Twitter/X',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Lien Instagram',
      type: 'url',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'Lien TikTok',
      type: 'url',
    }),
    defineField({
      name: 'stats',
      title: 'Statistiques',
      type: 'object',
      fields: [
        {
          name: 'followers',
          title: 'Followers',
          type: 'number',
        },
        {
          name: 'hoursStreamed',
          title: 'Heures de stream',
          type: 'number',
        },
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Membre actif',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'pseudo',
      media: 'avatar',
      subtitle: 'bio',
    },
  },
})