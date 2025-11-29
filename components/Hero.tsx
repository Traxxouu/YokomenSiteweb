import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background avec les images gaming */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black z-10" />
        <Image
          src="/images/persoJeux.png"
          alt="Gaming characters"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Contenu */}
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-white">
          Yokomen Team
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4 font-light px-4">
          La communauté gaming francophone où le fun prime sur le tryhard
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
          Une bande de streamers et gamers francophones (France, Belgique, Suisse, Québec) qui ont décidé de monter leur propre communauté. Pas de prise de tête, pas d&apos;élitisme, juste des gens cool qui aiment jouer ensemble.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link
            href="https://discord.gg/yokomen"
            target="_blank"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-200 transition-all rounded-lg text-black font-semibold text-base sm:text-lg shadow-lg hover:scale-105 transform duration-200"
          >
            Rejoindre Discord
          </Link>
          
          <Link
            href="/jeux"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-neutral-900 hover:bg-neutral-800 transition-all rounded-lg text-white font-semibold text-base sm:text-lg border border-white/20 hover:border-white/40 hover:scale-105 transform duration-200"
          >
            Voir nos jeux
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-2xl mx-auto px-4">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">280+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-2">Membres Discord</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">4</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-2">Jeux actifs</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">15+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-2">Streamers</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}