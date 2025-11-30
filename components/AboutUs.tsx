'use client'

import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-neutral-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-white"
        >
          Qui sommes-nous ?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed"
        >
          <p>
            On est une bande de streamers et gamers francophones (France, Belgique, Suisse, Québec) qui ont décidé de monter leur propre communauté. Pas de prise de tête, pas d&apos;élitisme, juste des gens cool qui aiment jouer ensemble et découvrir de nouveaux jeux.
          </p>

          <p>
            Que tu sois spectateur, joueur casual ou futur streamer, tu trouveras ta place chez nous. On est 280+ membres sur Discord, plusieurs streamers actifs, et des serveurs de jeux où l&apos;ambiance est toujours bonne.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
