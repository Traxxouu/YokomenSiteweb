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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">Événements à venir</h2>
        <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-10 md:mb-12">
          Rejoins-nous pour nos prochains events !
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {events.slice(0, 3).map((event) => (
            <Link
              key={event._id}
              href={`/evenements/${event.slug.current}`}
              className="bg-black rounded-lg overflow-hidden hover:ring-2 hover:ring-white/30 transition-all group"
            >
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 sm:px-3 py-1 bg-white/10 text-gray-300 rounded-full">
                    {eventTypeLabels[event.eventType]}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-white transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                  📅 {formatDate(event.startDate)}
                </p>

                {event.relatedGames && event.relatedGames.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {event.relatedGames.map((game) => (
                      <span key={game.slug.current} className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded">
                        {game.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link
            href="/evenements"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white hover:bg-gray-200 transition-all rounded-lg text-black font-semibold text-sm sm:text-base"
          >
            Voir tous les événements
          </Link>
        </div>
      </div>
    </section>
  )
}