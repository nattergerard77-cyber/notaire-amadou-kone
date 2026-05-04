import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface Props {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  tag: string
  slug: string
}

export default function BlogCard({ title, excerpt, date, author, category, tag, slug }: Props) {
  return (
    <article className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
      {/* Image placeholder */}
      <div className="h-20 bg-cream border-b border-gray-100 flex items-center justify-center">
        <span className="text-xs text-gray-400 border border-gray-200 px-3 py-1 rounded">
          {category}
        </span>
      </div>
      <div className="p-5">
        <p className="text-[10px] text-gray-400 mb-2">
          {formatDate(date)} · {author}
        </p>
        <h3 className="font-medium text-navy text-sm leading-snug mb-2 group-hover:text-gold-dark transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-[10px] bg-gold-pale text-gold-dark px-2.5 py-0.5 rounded">
            {tag}
          </span>
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-1 text-xs text-gold hover:gap-2 transition-all"
            aria-label={`Lire l'article : ${title}`}
          >
            Lire <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </article>
  )
}
