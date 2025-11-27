import { groq } from 'next-sanity'

// Query pour récupérer tous les jeux actifs
export const gamesQuery = groq`
  *[_type == "game" && isActive == true] | order(order asc) {
    _id,
    name,
    slug,
    description,
    shortDescription,
    mainImage,
    logo,
    tags,
    servers,
    isActive,
    order
  }
`

// Query pour un jeu spécifique
export const gameBySlugQuery = groq`
  *[_type == "game" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    shortDescription,
    mainImage,
    logo,
    tags,
    servers,
    connectionGuide,
    "relatedEvents": *[_type == "event" && references(^._id)] {
      _id,
      title,
      slug,
      eventType,
      startDate,
      mainImage
    }
  }
`

// Query pour tous les streamers actifs
export const streamersQuery = groq`
  *[_type == "streamer" && isActive == true] | order(order asc) {
    _id,
    pseudo,
    slug,
    avatar,
    bio,
    mainGames[]->{
      name,
      slug
    },
    twitchUrl,
    youtubeUrl,
    twitterUrl,
    stats,
    isActive
  }
`

// Query pour les événements à venir
export const upcomingEventsQuery = groq`
  *[_type == "event" && isPast == false] | order(startDate asc) {
    _id,
    title,
    slug,
    description,
    eventType,
    mainImage,
    startDate,
    endDate,
    relatedGames[]->{
      name,
      slug
    },
    gameTags,
    participants[]->{
      pseudo,
      avatar
    },
    registrationUrl
  }
`

// Query pour les articles récents
export const recentArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc)[0...6] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt,
    author->{
      pseudo,
      avatar
    }
  }
`