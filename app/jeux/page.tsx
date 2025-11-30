'use client'

import { useState, useEffect } from 'react'
import { sanityFetch } from '@/lib/sanity/fetch'
import { gamesQuery } from '@/lib/sanity/queries'
import type { Game } from '@/types/sanity'
import Link from 'next/link'
import SanityImage from '@/components/SanityImage'
import { motion } from 'framer-motion'

// Descriptions pour chaque jeu
const gameDescriptions: Record<string, string> = {
  'vintage-story': 'Notre serveur principal en ce moment. Du survival/craft médiéval-fantastique avec une vraie communauté active dessus.',
  'arc-raiders': 'Le nouveau shoot coop qu\'on test ensemble. Parfait pour se retrouver en vocal et taper du robot.',
  'wow-ascension': 'On a même notre propre guilde : La Compagnie Givreacier. Du custom WoW avec des builds délirants, c\'est cool.',
  'valorant': 'Pour ceux qui aiment le tac-FPS. On a des groupes qui grindent régulièrement, niveau casual à semi-tryhard.'
}

export default function JeuxPage() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    sanityFetch<Game[]>({
      query: gamesQuery,
      tags: ['game'],
    }).then(setGames)
  }, [])

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-center"
        >
          Nos Jeux
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          Chez Yokomen Team, on aime la variété. Plutôt que de grinder un seul jeu H24, 
          on préfère découvrir, tester et s&apos;amuser sur plein de trucs différents. 
          Voici nos jeux du moment et les serveurs qu&apos;on héberge.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {games.map((game, index) => (
            <motion.div
              key={game._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
            >
              <Link
                href={`/jeux/${game.slug.current}`}
                className="block bg-neutral-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-white/20 transition-all group"
              >
                {game.mainImage && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <SanityImage 
                      image={game.mainImage} 
                      alt={game.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                    {game.name}
                  </h2>
                  <p className="text-gray-400 mb-6">
                    {gameDescriptions[game.slug.current] || game.shortDescription}
                  </p>
                  
                  {game.servers && game.servers.length > 0 ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${game.servers[0].isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                        <span className="text-sm font-semibold">
                          {game.servers[0].isOnline ? 'Serveur en ligne' : 'Serveur hors ligne'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {game.servers.length} serveur{game.servers.length > 1 ? 's' : ''} disponible{game.servers.length > 1 ? 's' : ''}
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">
                      Aucun serveur pour le moment
                    </div>
                  )}

                  <div className="mt-6 text-white/80 group-hover:text-white transition-colors">
                    Voir les détails →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}