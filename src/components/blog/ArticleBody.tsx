'use client'

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function ArticleBody({ children }: Props) {
  return (
    <div className="prose prose-navy max-w-none 
                    prose-headings:font-serif prose-headings:font-normal prose-headings:text-navy
                    prose-p:text-gray-600 prose-p:leading-relaxed
                    prose-strong:text-navy prose-strong:font-semibold
                    prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                    prose-li:text-gray-600 prose-img:rounded-xl">
      {children}
    </div>
  )
}
