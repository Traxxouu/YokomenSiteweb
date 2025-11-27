import type { Image } from 'sanity'

export interface Game {
  _id: string
  name: string
  slug: { current: string }
  description: string
  shortDescription: string
  mainImage: Image
  logo?: Image
  tags?: string[]
  servers?: Server[]
  connectionGuide?: string
  isActive: boolean
  order?: number
}

export interface Server {
  serverName: string
  ip: string
  port?: string
  version?: string
  mods?: string[]
  rules?: string
  isOnline: boolean
}

export interface Streamer {
  _id: string
  pseudo: string
  slug: { current: string }
  avatar: Image
  bio?: string
  mainGames?: Game[]
  twitchUrl?: string
  youtubeUrl?: string
  twitterUrl?: string
  instagramUrl?: string
  tiktokUrl?: string
  stats?: {
    followers?: number
    hoursStreamed?: number
  }
  isActive: boolean
}

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  description: Array<{
    _type: string
    children?: Array<{ text: string }>
    [key: string]: unknown
  }>
  eventType: 'tournament' | 'collective-stream' | 'server-event' | 'discovery' | 'other'
  mainImage: Image
  startDate: string
  endDate?: string
  relatedGames?: Game[]
  gameTags?: string[]
  participants?: Streamer[]
  registrationUrl?: string
  practicalInfo?: string
  isPast: boolean
}

export interface Article {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  mainImage: Image
  content: Array<{
    _type: string
    children?: Array<{ text: string }>
    [key: string]: unknown
  }>
  category?: 'announcement' | 'tournament' | 'new-member' | 'event' | 'other'
  tags?: string[]
  publishedAt: string
  author?: Streamer
}