import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import WhatWeOffer from '@/components/WhatWeOffer'
import GamesSection from '@/components/GamesSection'
import UpcomingEvents from '@/components/UpcomingEvents'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhatWeOffer />
      <GamesSection />
      <UpcomingEvents />
      
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Rejoins-nous sur Discord
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8">
            Fais partie de l&apos;aventure Yokomen Team
          </p>
          <Link
            href="/rejoindre"
            className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 bg-white hover:bg-gray-200 transition-all rounded-lg text-black font-bold text-base sm:text-lg md:text-xl shadow-lg hover:scale-105 transform duration-200"
          >
            Rejoindre Discord
          </Link>
        </div>
      </section>
    </main>
  )
}