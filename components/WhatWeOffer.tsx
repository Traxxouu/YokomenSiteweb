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
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Ce qu&apos;on propose</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-secondary">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}