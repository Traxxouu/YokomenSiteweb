import Hero from '@/components/Hero'
import WhatWeOffer from '@/components/WhatWeOffer'
import GamesSection from '@/components/GamesSection'
import UpcomingEvents from '@/components/UpcomingEvents'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeOffer />
      <GamesSection />
      <UpcomingEvents />
      
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Prêt à nous rejoindre ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8">
            Rejoins notre Discord et fais partie de l&apos;aventure Yokomen Team
          </p>
          <a
            href="https://discord.gg/yokomen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 bg-white hover:bg-gray-200 transition-all rounded-lg text-black font-bold text-base sm:text-lg md:text-xl shadow-lg"
          >
            Rejoindre Discord
          </a>
        </div>
      </section>
    </main>
  )
}