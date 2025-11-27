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
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-sm border-b border-primary/20 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/image.png"
                alt="YMTM Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              YMTM
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-secondary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/rejoindre"
              className="px-6 py-2 bg-primary hover:bg-primary-light transition-all rounded-lg text-white font-semibold"
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
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-secondary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/rejoindre"
              className="block w-full text-center px-6 py-2 bg-primary hover:bg-primary-light transition-all rounded-lg text-white font-semibold"
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