'use client'

import { motion } from 'framer-motion'
import { Gamepad2, Video, Trophy } from 'lucide-react'

export default function WhatWeOffer() {
  const features = [
    {
      icon: Gamepad2,
      title: 'Des jeux variés',
      description: 'Vintage Story, Arc Raiders, WoW Ascension, Valorant... On change souvent selon les envies. Si tu veux découvrir un nouveau jeu avec du monde, t\'es au bon endroit.'
    },
    {
      icon: Video,
      title: 'Des streams accessibles',
      description: 'Nos streamers sont des petits/moyens créateurs qui se lancent. Ambiance décontractée, interaction garantie, et du contenu varié entre gameplay, divertissement et vlogs.'
    },
    {
      icon: Trophy,
      title: 'Des événements réguliers',
      description: 'Tournois fun, streams collectifs, events communautaires... On organise régulièrement des trucs pour se retrouver et délirer ensemble.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center"
        >
          Ce qu&apos;on propose
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 sm:p-6 bg-neutral-900 rounded-lg border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}