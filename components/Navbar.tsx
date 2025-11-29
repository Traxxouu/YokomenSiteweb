'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/jeux', label: 'Nos Jeux' },
    { href: '/equipe', label: 'Équipe' },
    { href: '/evenements', label: 'Événements' },
    { href: '/actualites', label: 'Actualités' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              <Image
                src="/images/image.png"
                alt="YMTM Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">
              YMTM
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/rejoindre"
              className="px-4 lg:px-6 py-2 bg-white hover:bg-gray-200 transition-all rounded-lg text-black font-semibold"
            >
              Rejoindre
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-400 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/rejoindre"
              className="block w-full text-center px-4 py-2 bg-white hover:bg-gray-200 transition-all rounded-lg text-black font-semibold mt-4"
              onClick={() => setIsOpen(false)}
            >
              Rejoindre
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}