import { client } from '@/sanity/lib/client'
import type { QueryParams } from 'next-sanity'

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: 60, // Revalide toutes les 60 secondes
      tags,
    },
  })
}