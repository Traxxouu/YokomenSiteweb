import { sanityFetch } from '@/lib/sanity/fetch'
import { streamersQuery } from '@/lib/sanity/queries'
import type { Streamer } from '@/types/sanity'
import SanityImage from '@/components/SanityImage'

export const metadata = {
  title: 'Notre Équipe - Yokomen Team',
  description: 'Découvrez les streamers de Yokomen Team',
}

export default async function EquipePage() {
  const streamers = await sanityFetch<Streamer[]>({
    query: streamersQuery,
    tags: ['streamer'],
  })

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">Notre Équipe</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Nos streamers sont avant tout des passionnés qui se lancent dans l&apos;aventure du stream. 
          Pas de gros ego ici, juste des gens accessibles qui aiment partager leur passion du gaming 
          avec leur communauté.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {streamers.map((streamer) => (
            <div
              key={streamer._id}
              className="bg-dark-lighter rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all group"
            >
              <div className="p-6">
                {streamer.avatar ? (
                  <SanityImage 
                    image={streamer.avatar} 
                    alt={streamer.pseudo}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 bg-dark rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                    🎮
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-center mb-2 group-hover:text-primary transition-colors">
                  {streamer.pseudo}
                </h3>

                {streamer.bio && (
                  <p className="text-gray-400 text-sm text-center mb-4 line-clamp-3">
                    {streamer.bio}
                  </p>
                )}

                {streamer.mainGames && streamer.mainGames.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {streamer.mainGames.slice(0, 3).map((game) => (
                      <span
                        key={game.slug.current}
                        className="text-xs px-2 py-1 bg-primary/20 text-primary rounded"
                      >
                        {game.name}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-center gap-3 mt-4">
                  {streamer.twitchUrl && (
                    <a
                      href={streamer.twitchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-500 transition-colors"
                      title="Twitch"
                    >
                      <span className="text-2xl">🎥</span>
                    </a>
                  )}
                  {streamer.youtubeUrl && (
                    <a
                      href={streamer.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      title="YouTube"
                    >
                      <span className="text-2xl">📺</span>
                    </a>
                  )}
                  {streamer.twitterUrl && (
                    <a
                      href={streamer.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      title="Twitter/X"
                    >
                      <span className="text-2xl">🐦</span>
                    </a>
                  )}
                </div>

                {streamer.stats && (streamer.stats.followers || streamer.stats.hoursStreamed) && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="grid grid-cols-2 gap-2 text-center text-sm">
                      {streamer.stats.followers && (
                        <div>
                          <div className="text-secondary font-bold">{streamer.stats.followers}</div>
                          <div className="text-gray-500 text-xs">Followers</div>
                        </div>
                      )}
                      {streamer.stats.hoursStreamed && (
                        <div>
                          <div className="text-secondary font-bold">{streamer.stats.hoursStreamed}h</div>
                          <div className="text-gray-500 text-xs">Heures</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-dark-lighter rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Tu veux te lancer dans le stream ?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Rejoins-nous, on s&apos;entraide et on se met en avant mutuellement. L&apos;union fait la force !
          </p>
          <a
            href="https://discord.gg/yokomen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-light transition-all rounded-lg text-white font-semibold"
          >
            Rejoindre Discord
          </a>
        </div>
      </div>
    </main>
  )
}