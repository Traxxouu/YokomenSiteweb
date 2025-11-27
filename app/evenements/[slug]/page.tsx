import { sanityFetch } from '@/lib/sanity/fetch'
import { groq } from 'next-sanity'
import type { Event } from '@/types/sanity'
import { notFound } from 'next/navigation'

const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
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
    participants[]->{
      pseudo,
      avatar,
      twitchUrl,
      youtubeUrl
    },
    registrationUrl,
    practicalInfo
  }
`

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  const event = await sanityFetch<Event>({
    query: eventBySlugQuery,
    params: { slug },
    tags: ['event'],
  })

  if (!event) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const eventTypeLabels = {
    tournament: 'Tournoi',
    'collective-stream': 'Stream collectif',
    'server-event': 'Event serveur',
    discovery: 'Soirée découverte',
    other: 'Autre'
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
            {eventTypeLabels[event.eventType]}
          </span>
          <h1 className="text-6xl font-bold mb-6">{event.title}</h1>
          <div className="text-xl text-gray-400 flex items-center gap-2">
            <span>📅</span>
            <span>{formatDate(event.startDate)}</span>
            {event.endDate && (
              <>
                <span>→</span>
                <span>{formatDate(event.endDate)}</span>
              </>
            )}
          </div>
        </div>

        {event.relatedGames && event.relatedGames.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Jeux concernés</h2>
            <div className="flex flex-wrap gap-3">
              {event.relatedGames.map((game) => (
                <span
                  key={game.slug.current}
                  className="px-4 py-2 bg-primary/20 text-primary rounded-lg font-semibold"
                >
                  {game.name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="bg-dark-lighter rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">Description</h2>
          <div className="text-gray-300 prose prose-invert max-w-none">
            <p>Détails de l&apos;événement à venir...</p>
          </div>
        </div>

        {event.practicalInfo && (
          <div className="bg-dark-lighter rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Infos pratiques</h2>
            <p className="text-gray-300">{event.practicalInfo}</p>
          </div>
        )}

        {event.participants && event.participants.length > 0 && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Participants</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {event.participants.map((participant) => (
                <div
                  key={participant.pseudo}
                  className="bg-dark-lighter rounded-lg p-4 text-center"
                >
                  <div className="w-16 h-16 bg-dark rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">
                    🎮
                  </div>
                  <div className="font-semibold">{participant.pseudo}</div>
                  <div className="flex justify-center gap-2 mt-2">
                    {participant.twitchUrl && (
                      <a href={participant.twitchUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                        🎥
                      </a>
                    )}
                    {participant.youtubeUrl && (
                      <a href={participant.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">
                        📺
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {event.registrationUrl && (
          <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Inscriptions ouvertes !</h2>
            <p className="text-gray-300 mb-6">
              Les inscriptions sont actuellement ouvertes pour cet événement.
            </p>
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-primary hover:bg-primary-light transition-all rounded-lg text-white font-bold text-xl"
            >
              S&apos;inscrire maintenant
            </a>
          </div>
        )}
      </div>
    </main>
  )
}