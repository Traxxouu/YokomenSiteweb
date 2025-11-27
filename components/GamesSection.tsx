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
    <section className="py-20 px-6 bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Nos Jeux</h2>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Chez Yokomen Team, on aime la variété. Plutôt que de grinder un seul jeu H24, 
          on préfère découvrir, tester et s&apos;amuser sur plein de trucs différents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Link
              key={game._id}
              href={`/jeux/${game.slug.current}`}
              className="bg-dark rounded-lg p-6 hover:bg-dark-card transition-all border border-primary/20 hover:border-primary/50 group"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {game.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{game.shortDescription}</p>
              
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

        <div className="text-center mt-12">
          <Link
            href="/jeux"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-light transition-all rounded-lg text-white font-semibold"
          >
            Voir tous les jeux
          </Link>
        </div>
      </div>
    </section>
  )
}