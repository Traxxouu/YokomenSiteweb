import { sanityFetch } from '@/lib/sanity/fetch'
import { upcomingEventsQuery } from '@/lib/sanity/queries'
import type { Event } from '@/types/sanity'
import Link from 'next/link'

export default async function UpcomingEvents() {
  const events = await sanityFetch<Event[]>({
    query: upcomingEventsQuery,
    tags: ['event'],
  })

  if (events.length === 0) {
    return null
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
    <section className="py-20 px-6 bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Événements à venir</h2>
        <p className="text-gray-400 text-center mb-12">
          Rejoins-nous pour nos prochains events !
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, 3).map((event) => (
            <Link
              key={event._id}
              href={`/evenements/${event.slug.current}`}
              className="bg-dark rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all group"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-3 py-1 bg-secondary/20 text-secondary rounded-full">
                    {eventTypeLabels[event.eventType]}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4">
                  📅 {formatDate(event.startDate)}
                </p>

                {event.relatedGames && event.relatedGames.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {event.relatedGames.map((game) => (
                      <span key={game.slug.current} className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                        {game.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/evenements"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-light transition-all rounded-lg text-white font-semibold"
          >
            Voir tous les événements
          </Link>
        </div>
      </div>
    </section>
  )
}