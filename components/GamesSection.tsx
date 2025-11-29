import { sanityFetch } from '@/lib/sanity/fetch'
import { gamesQuery } from '@/lib/sanity/queries'
import type { Game } from '@/types/sanity'
import Link from 'next/link'

export default async function GamesSection() {
  const games = await sanityFetch<Game[]>({
    query: gamesQuery,
    tags: ['game'],
  })

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">Nos Jeux</h2>
        <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          Chez Yokomen Team, on aime la variété. Plutôt que de grinder un seul jeu H24, 
          on préfère découvrir, tester et s&apos;amuser sur plein de trucs différents.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {games.map((game) => (
            <Link
              key={game._id}
              href={`/jeux/${game.slug.current}`}
              className="bg-black rounded-lg p-4 sm:p-6 hover:bg-neutral-900 transition-all border border-white/10 hover:border-white/30 group"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-white transition-colors">
                {game.name}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{game.shortDescription}</p>
              
              {game.servers && game.servers.length > 0 && (
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${game.servers[0].isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-xs text-gray-500">
                    {game.servers[0].isOnline ? 'Serveur en ligne' : 'Serveur hors ligne'}
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link
            href="/jeux"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white hover:bg-gray-200 transition-all rounded-lg text-black font-semibold text-sm sm:text-base"
          >
            Voir tous les jeux
          </Link>
        </div>
      </div>
    </section>
  )
}