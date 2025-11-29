import { sanityFetch } from '@/lib/sanity/fetch'
import { gamesQuery } from '@/lib/sanity/queries'
import type { Game } from '@/types/sanity'
import Link from 'next/link'
import SanityImage from '@/components/SanityImage'

export const metadata = {
  title: 'Nos Jeux - Yokomen Team',
  description: 'Découvrez tous les jeux sur lesquels joue la communauté Yokomen Team',
}

export default async function JeuxPage() {
  const games = await sanityFetch<Game[]>({
    query: gamesQuery,
    tags: ['game'],
  })

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">Nos Jeux</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Chez Yokomen Team, on aime la variété. Plutôt que de grinder un seul jeu H24, 
          on préfère découvrir, tester et s&apos;amuser sur plein de trucs différents. 
          Voici nos jeux du moment et les serveurs qu&apos;on héberge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Link
              key={game._id}
              href={`/jeux/${game.slug.current}`}
              className="bg-dark-lighter rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all group"
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
              
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {game.name}
                </h2>
                <p className="text-gray-400 mb-6">{game.shortDescription}</p>
                
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

                <div className="mt-6 text-primary group-hover:text-primary-light transition-colors">
                  Voir les détails →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}