import { sanityFetch } from '@/lib/sanity/fetch'
import { groq } from 'next-sanity'
import type { Article } from '@/types/sanity'
import { notFound } from 'next/navigation'

const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    content,
    category,
    tags,
    publishedAt,
    author->{
      pseudo,
      avatar
    }
  }
`

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  const article = await sanityFetch<Article>({
    query: articleBySlugQuery,
    params: { slug },
    tags: ['article'],
  })

  if (!article) {
    notFound()
  }

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
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          {article.category && (
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
              {categoryLabels[article.category]}
            </span>
          )}
          <h1 className="text-6xl font-bold mb-6">{article.title}</h1>
          
          <div className="flex items-center gap-4 text-gray-400">
            <span>{formatDate(article.publishedAt)}</span>
            {article.author && (
              <>
                <span>•</span>
                <span>Par {article.author.pseudo}</span>
              </>
            )}
          </div>
        </div>

        <div className="bg-dark-lighter rounded-lg p-8 mb-8">
          <p className="text-xl text-gray-300 italic">{article.excerpt}</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300">
            Le contenu de l&apos;article s&apos;affichera ici une fois que tu auras configuré 
            le rendu du contenu Portable Text de Sanity.
          </p>
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-gray-500 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-dark-lighter text-gray-400 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  )
}