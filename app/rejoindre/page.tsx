export const metadata = {
  title: 'Rejoindre Discord - Yokomen Team',
  description: 'Rejoins la communauté Yokomen Team sur Discord',
}

export default function RejoindreDiscordPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Prêt à nous rejoindre ?
        </h1>
        <p className="text-2xl text-gray-400 text-center mb-16">
          Le Discord de Yokomen Team, c&apos;est 280+ membres francophones qui partagent la même passion du gaming
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-dark-lighter rounded-lg p-8">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold mb-3">Une communauté active</h3>
            <p className="text-gray-400">
              Des vocaux actifs en soirée, des gens cool pour jouer ensemble, et une ambiance sans prise de tête.
            </p>
          </div>

          <div className="bg-dark-lighter rounded-lg p-8">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-3">Francophone diverse</h3>
            <p className="text-gray-400">
              France, Belgique, Suisse, Québec... On accueille tous les francophones avec plaisir.
            </p>
          </div>

          <div className="bg-dark-lighter rounded-lg p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3">Des jeux variés</h3>
            <p className="text-gray-400">
              On ne se limite pas à un seul jeu. Si tu aimes la variété et découvrir de nouveaux titres, tu vas kiffer.
            </p>
          </div>

          <div className="bg-dark-lighter rounded-lg p-8">
            <div className="text-4xl mb-4">📢</div>
            <h3 className="text-2xl font-bold mb-3">Annonces en avant-première</h3>
            <p className="text-gray-400">
              Events, streams, nouveaux serveurs... Tu seras au courant de tout en premier.
            </p>
          </div>

          <div className="bg-dark-lighter rounded-lg p-8">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-2xl font-bold mb-3">Streamers accessibles</h3>
            <p className="text-gray-400">
              Nos streamers sont actifs sur le Discord et interagissent régulièrement avec la communauté.
            </p>
          </div>

          <div className="bg-dark-lighter rounded-lg p-8">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-3">Événements réguliers</h3>
            <p className="text-gray-400">
              Tournois, soirées gaming, découverte de nouveaux jeux... Y&apos;a toujours un truc qui se passe.
            </p>
          </div>
        </div>

        <div className="bg-dark-lighter rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Pourquoi nous rejoindre ?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            T&apos;en as marre des communautés élitistes où faut être GM pour avoir le droit de parler ? 
            Chez nous, tout le monde est le bienvenu. Que tu sois un gamer casual qui joue 2h par semaine 
            ou un no-life qui farm 12h par jour, tu trouveras ta place.
          </p>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            On est là pour s&apos;amuser, découvrir de nouveaux jeux ensemble, et pourquoi pas aider ceux 
            qui veulent se lancer dans le stream. Pas de drama, pas de toxicité, juste une bonne ambiance 
            entre francophones.
          </p>
          <a
            href="https://discord.gg/yokomen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-16 py-5 bg-primary hover:bg-primary-light transition-all rounded-lg text-white font-bold text-2xl shadow-lg shadow-primary/50 hover:scale-105 transform duration-200"
          >
            Rejoindre l&apos;aventure
          </a>
        </div>
      </div>
    </main>
  )
}