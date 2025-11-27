import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec les images gaming */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/80 to-dark z-10" />
        <Image
          src="/images/persoJeux.png"
          alt="Gaming characters"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Contenu */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
          Yokomen Team
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
          La communauté gaming francophone où le fun prime sur le tryhard
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Une bande de streamers et gamers francophones (France, Belgique, Suisse, Québec) qui ont décidé de monter leur propre communauté. Pas de prise de tête, pas d&apos;élitisme, juste des gens cool qui aiment jouer ensemble.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://discord.gg/yokomen"
            target="_blank"
            className="px-8 py-4 bg-primary hover:bg-primary-light transition-all rounded-lg text-white font-semibold text-lg shadow-lg shadow-primary/50 hover:shadow-primary/80 hover:scale-105 transform duration-200"
          >
            Rejoindre Discord
          </Link>
          
          <Link
            href="/jeux"
            className="px-8 py-4 bg-dark-lighter hover:bg-secondary hover:text-dark transition-all rounded-lg text-white font-semibold text-lg border border-secondary/50 hover:border-secondary hover:scale-105 transform duration-200"
          >
            Voir nos jeux
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-secondary">280+</div>
            <div className="text-gray-400 mt-2">Membres Discord</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary">4</div>
            <div className="text-gray-400 mt-2">Jeux actifs</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary">15+</div>
            <div className="text-gray-400 mt-2">Streamers</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}