export interface Article {
  _id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  tag: string
  slug: string
  body: { html: string }
}

export const allArticles: Article[] = []
