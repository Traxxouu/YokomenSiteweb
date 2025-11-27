import { sanityFetch } from '@/lib/sanity/fetch'
import { gameBySlugQuery } from '@/lib/sanity/queries'
import type { Game, Event } from '@/types/sanity'
import { notFound } from 'next/navigation'
import CopyButton from '@/components/CopyButton'

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  const game = await sanityFetch<Game & { relatedEvents?: Event[] }>({
    query: gameBySlugQuery,
    params: { slug },
    tags: ['game', 'event'],
  })

  if (!game) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold mb-4">{game.name}</h1>
          <p className="text-xl text-gray-400">{game.description}</p>
        </div>

        {/* Serveurs */}
        {game.servers && game.servers.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Serveurs disponibles</h2>
            <div className="space-y-6">
              {game.servers.map((server, index) => (
                <div
                  key={index}
                  className="bg-dark-lighter rounded-lg p-6 border border-primary/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{server.serverName}</h3>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${server.isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                      <span className="text-sm font-semibold">
                        {server.isOnline ? 'En ligne' : 'Hors ligne'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-gray-500 text-sm">IP du serveur</span>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="bg-dark px-3 py-2 rounded text-primary font-mono">
                          {server.ip}
                        </code>
                        <CopyButton text={server.ip} />
                      </div>
                    </div>

                    {server.port && (
                      <div>
                        <span className="text-gray-500 text-sm">Port</span>
                        <div className="mt-1">
                          <code className="bg-dark px-3 py-2 rounded text-primary font-mono">
                            {server.port}
                          </code>
                        </div>
                      </div>
                    )}

                    {server.version && (
                      <div>
                        <span className="text-gray-500 text-sm">Version</span>
                        <div className="mt-1">
                          <code className="bg-dark px-3 py-2 rounded text-primary font-mono">
                            {server.version}
                          </code>
                        </div>
                      </div>
                    )}
                  </div>

                  {server.mods && server.mods.length > 0 && (
                    <div className="mb-4">
                      <span className="text-gray-500 text-sm block mb-2">Mods installés</span>
                      <div className="flex flex-wrap gap-2">
                        {server.mods.map((mod, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
                          >
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {server.rules && (
                    <div>
                      <span className="text-gray-500 text-sm block mb-2">Règles</span>
                      <p className="text-gray-300">{server.rules}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Guide de connexion */}
        {game.connectionGuide && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Comment rejoindre</h2>
            <div className="bg-dark-lighter rounded-lg p-6 prose prose-invert max-w-none">
              <p className="text-gray-300">Guide de connexion à venir...</p>
            </div>
          </section>
        )}

        {/* Événements liés */}
        {game.relatedEvents && game.relatedEvents.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Événements à venir</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {game.relatedEvents.map((event) => (
                <div
                  key={event._id}
                  className="bg-dark-lighter rounded-lg p-6 border border-secondary/20"
                >
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-400">
                    {new Date(event.startDate).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}