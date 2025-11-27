import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6">Page introuvable</h2>
        <p className="text-xl text-gray-400 mb-8">
          Oups, cette page n&apos;existe pas !
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-primary hover:bg-primary-light transition-all rounded-lg text-white font-semibold"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  )
}