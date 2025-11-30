'use client'

import { useState, useEffect } from 'react'
import { sanityFetch } from '@/lib/sanity/fetch'
import { upcomingEventsQuery } from '@/lib/sanity/queries'
import type { Event } from '@/types/sanity'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Users, Trophy, Tv, Server, Gamepad2 } from 'lucide-react'

type FilterType = 'all' | 'tournament' | 'collective-stream' | 'server-event' | 'discovery' | 'other'

export default function EvenementsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [filter, setFilter] = useState<FilterType>('all')

  useEffect(() => {
    sanityFetch<Event[]>({
      query: upcomingEventsQuery,
      tags: ['event'],
    }).then(setEvents)
  }, [])

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

  const eventTypeIcons = {
    tournament: Trophy,
    'collective-stream': Tv,
    'server-event': Server,
    discovery: Gamepad2,
    other: Calendar
  }

  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'Tous les événements' },
    { value: 'tournament', label: 'Tournois' },
    { value: 'collective-stream', label: 'Streams collectifs' },
    { value: 'server-event', label: 'Events serveur' },
    { value: 'discovery', label: 'Soirées découverte' },
  ]

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.eventType === filter)

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-center"
        >
          Événements
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-4 max-w-3xl mx-auto"
        >
          On organise régulièrement des events pour rassembler la communauté : tournois avec 
          cashprizes, streams collectifs où tout le monde se retrouve sur le même jeu, soirées 
          découverte de nouveaux titres...
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto"
        >
          Les inscriptions se font généralement sur Discord. Que tu participes ou que tu viennes juste matter, l&apos;ambiance est toujours au rendez-vous !
        </motion.p>

        {/* Filtres */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === f.value
                  ? 'bg-white text-black'
                  : 'bg-neutral-900 text-gray-400 hover:bg-neutral-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {filteredEvents.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event, index) => {
              const Icon = eventTypeIcons[event.eventType] || Calendar
              return (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Link
                    href={`/evenements/${event.slug.current}`}
                    className="block bg-neutral-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-white/20 transition-all group h-full"
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-4 h-4 text-white/60" />
                        <span className="text-xs px-3 py-1 bg-white/10 text-white/80 rounded-full">
                          {eventTypeLabels[event.eventType]}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                        {event.title}
                      </h2>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        {formatDate(event.startDate)}
                      </div>

                      {event.relatedGames && event.relatedGames.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.relatedGames.map((game) => (
                            <span key={game.slug.current} className="text-xs px-2 py-1 bg-white/10 text-white/80 rounded">
                              {game.name}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto">
                        {event.participants && event.participants.length > 0 && (
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <Users className="w-4 h-4" />
                            {event.participants.length} participant{event.participants.length > 1 ? 's' : ''}
                          </div>
                        )}

                        {event.registrationUrl && (
                          <div className="text-sm text-green-400">
                            ✓ Inscriptions ouvertes
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-500 mb-4">Aucun événement prévu pour le moment</p>
            <p className="text-gray-400">Reviens bientôt ou rejoins notre Discord pour être informé !</p>
          </motion.div>
        )}
      </div>
    </main>
  )
}