'use client'

import { motion } from 'framer-motion'
import { Users, Globe, Target, Megaphone, Mic, Trophy } from 'lucide-react'

export default function RejoindreDiscordPage() {
  const features = [
    {
      icon: Users,
      title: 'Une communauté active',
      description: 'Des vocaux actifs en soirée, des gens cool pour jouer ensemble, et une ambiance sans prise de tête.'
    },
    {
      icon: Globe,
      title: 'Francophone diverse',
      description: 'France, Belgique, Suisse, Québec... On accueille tous les francophones avec plaisir.'
    },
    {
      icon: Target,
      title: 'Des jeux variés',
      description: 'On ne se limite pas à un seul jeu. Si tu aimes la variété et découvrir de nouveaux titres, tu vas kiffer.'
    },
    {
      icon: Megaphone,
      title: 'Annonces en avant-première',
      description: 'Events, streams, nouveaux serveurs... Tu seras au courant de tout en premier.'
    },
    {
      icon: Mic,
      title: 'Streamers accessibles',
      description: 'Nos streamers sont actifs sur le Discord et interagissent régulièrement avec la communauté.'
    },
    {
      icon: Trophy,
      title: 'Événements réguliers',
      description: 'Tournois, soirées gaming, découverte de nouveaux jeux... Y\'a toujours un truc qui se passe.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold mb-6 text-center text-white"
        >
          Prêt à nous rejoindre ?
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-400 text-center mb-16"
        >
          Le Discord de Yokomen Team, c&apos;est 280+ membres francophones qui partagent la même passion du gaming
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Ce que tu trouveras sur notre Discord
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-neutral-900 rounded-lg p-8 hover:ring-2 hover:ring-white/20 transition-all"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-400 text-center">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-neutral-900 rounded-lg p-8 sm:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Pourquoi nous rejoindre ?</h2>
          <div className="space-y-6 text-base sm:text-lg text-gray-300 mb-12">
            <p>
              T&apos;en as marre des communautés élitistes où faut être GM pour avoir le droit de parler ? 
              Chez nous, tout le monde est le bienvenu. Que tu sois un gamer casual qui joue 2h par semaine 
              ou un no-life qui farm 12h par jour, tu trouveras ta place.
            </p>
            <p>
              On est là pour s&apos;amuser, découvrir de nouveaux jeux ensemble, et pourquoi pas aider ceux 
              qui veulent se lancer dans le stream. Pas de drama, pas de toxicité, juste une bonne ambiance 
              entre francophones.
            </p>
          </div>
          <motion.a
            href="https://discord.gg/yokomen"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 sm:px-16 py-4 sm:py-5 bg-white hover:bg-gray-200 transition-all rounded-lg text-black font-bold text-xl sm:text-2xl shadow-lg"
          >
            Rejoindre l&apos;aventure
          </motion.a>
        </motion.div>
      </div>
    </main>
  )
}