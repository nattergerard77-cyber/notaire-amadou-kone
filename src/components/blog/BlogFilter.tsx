'use client'

interface Props {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function BlogFilter({ categories, activeCategory, onCategoryChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-10" aria-label="Filtrer les articles par catégorie">
      <button
        onClick={() => onCategoryChange('tous')}
        className={`blog-category-btn ${activeCategory === 'tous' ? 'active' : ''}`}
      >
        Tous les articles
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`blog-category-btn ${activeCategory === cat ? 'active' : ''}`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
