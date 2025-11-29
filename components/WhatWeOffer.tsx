export default function WhatWeOffer() {
  const features = [
    {
      icon: '🎮',
      title: 'Des jeux variés',
      description: 'Vintage Story, Arc Raiders, WoW Ascension, Valorant... On change souvent selon les envies.'
    },
    {
      icon: '🎥',
      title: 'Des streams accessibles',
      description: 'Nos streamers sont des petits/moyens créateurs qui se lancent. Ambiance décontractée, interaction garantie.'
    },
    {
      icon: '🏆',
      title: 'Des événements réguliers',
      description: 'Tournois fun, streams collectifs, events communautaires... On organise régulièrement des trucs cool.'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">Ce qu&apos;on propose</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-neutral-900 rounded-lg border border-white/10 hover:border-white/20 transition-all">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}