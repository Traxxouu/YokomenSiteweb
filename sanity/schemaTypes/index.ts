import { type SchemaTypeDefinition } from 'sanity'
import { gameType } from './game'
import { streamerType } from './streamer'
import { eventType } from './event'
import { articleType } from './article'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gameType, streamerType, eventType, articleType],
}