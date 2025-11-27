import { sanityFetch } from '@/lib/sanity/fetch'
import { upcomingEventsQuery } from '@/lib/sanity/queries'
import type { Event } from '@/types/sanity'
import Link from 'next/link'

export const metadata = {
  title: 'Événements - Yokomen Team',
  description: 'Tous les événements de la communauté Yokomen Team',
}

export default async function EvenementsPage() {
  const events = await sanityFetch<Event[]>({
    query: upcomingEventsQuery,
    tags: ['event'],
  })

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
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">Événements</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          On organise régulièrement des events pour rassembler la communauté : tournois avec 
          cashprizes, streams collectifs où tout le monde se retrouve sur le même jeu, soirées 
          découverte de nouveaux titres...
        </p>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Link
                key={event._id}
                href={`/evenements/${event.slug.current}`}
                className="bg-dark-lighter rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-3 py-1 bg-secondary/20 text-secondary rounded-full">
                      {eventTypeLabels[event.eventType]}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h2>
                  
                  <p className="text-sm text-gray-400 mb-4">
                    📅 {formatDate(event.startDate)}
                  </p>

                  {event.relatedGames && event.relatedGames.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.relatedGames.map((game) => (
                        <span key={game.slug.current} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                          {game.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {event.participants && event.participants.length > 0 && (
                    <div className="text-sm text-gray-500">
                      {event.participants.length} participant{event.participants.length > 1 ? 's' : ''}
                    </div>
                  )}

                  {event.registrationUrl && (
                    <div className="mt-4">
                      <span className="text-sm text-secondary">✓ Inscriptions ouvertes</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 mb-4">Aucun événement prévu pour le moment</p>
            <p className="text-gray-400">Reviens bientôt ou rejoins notre Discord pour être informé !</p>
          </div>
        )}
      </div>
    </main>
  )
}