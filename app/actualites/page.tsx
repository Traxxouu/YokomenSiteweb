import { sanityFetch } from '@/lib/sanity/fetch'
import { recentArticlesQuery } from '@/lib/sanity/queries'
import type { Article } from '@/types/sanity'
import Link from 'next/link'

export const metadata = {
  title: 'Actualités - Yokomen Team',
  description: 'Toutes les actualités de Yokomen Team',
}

export default async function ActualitesPage() {
  const articles = await sanityFetch<Article[]>({
    query: recentArticlesQuery,
    tags: ['article'],
  })

  const categoryLabels = {
    announcement: 'Annonce',
    tournament: 'Tournoi',
    'new-member': 'Nouveau membre',
    event: 'Événement',
    other: 'Autre'
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">Actualités</h1>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Suis l&apos;actualité de Yokomen Team : nouveaux membres, annonces d&apos;events, 
          récaps de tournois, changements de jeux... Tout ce qui bouge chez nous, c&apos;est ici !
        </p>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article._id}
                href={`/actualites/${article.slug.current}`}
                className="bg-dark-lighter rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all group"
              >
                <div className="p-6">
                  {article.category && (
                    <span className="text-xs px-3 py-1 bg-secondary/20 text-secondary rounded-full">
                      {categoryLabels[article.category]}
                    </span>
                  )}
                  
                  <h2 className="text-2xl font-bold mt-3 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{formatDate(article.publishedAt)}</span>
                    {article.author && (
                      <span>Par {article.author.pseudo}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 mb-4">Aucun article pour le moment</p>
            <p className="text-gray-400">Les actualités arrivent bientôt !</p>
          </div>
        )}
      </div>
    </main>
  )
}