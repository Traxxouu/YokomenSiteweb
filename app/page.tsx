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
      
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Prêt à nous rejoindre ?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Rejoins notre Discord et fais partie de l&apos;aventure Yokomen Team
          </p>
          <a
            href="https://discord.gg/yokomen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-primary hover:bg-primary-light transition-all rounded-lg text-white font-bold text-xl shadow-lg shadow-primary/50"
          >
            Rejoindre Discord
          </a>
        </div>
      </section>
    </main>
  )
}