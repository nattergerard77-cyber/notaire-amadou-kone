'use client'

import React, { useState, useEffect } from 'react'

interface Testimonial {
  text: string
  author: string
  location: string
}

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [mounted, setMounted] = useState(false)
  const [itemsToShow, setItemsToShow] = useState(3)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayIndex, setDisplayIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1)
      else if (window.innerWidth < 1024) setItemsToShow(2)
      else setItemsToShow(3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalPages = Math.ceil(testimonials.length / itemsToShow)

  useEffect(() => {
    if (mounted && currentIndex >= totalPages) {
      setCurrentIndex(0)
      setDisplayIndex(0)
    }
  }, [itemsToShow, currentIndex, totalPages, mounted])

  useEffect(() => {
    if (displayIndex !== currentIndex) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setDisplayIndex(currentIndex)
        setIsAnimating(false)
      }, 250)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, displayIndex])

  const handleNext = () => {
    if (isAnimating) return
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentTestimonials = mounted 
    ? testimonials.slice(displayIndex * itemsToShow, (displayIndex + 1) * itemsToShow)
    : testimonials.slice(0, 3)

  return (
    <div>
      <div 
        style={{ 
          opacity: isAnimating ? 0 : 1, 
          transform: isAnimating ? 'translateY(10px)' : 'translateY(0)', 
          transition: 'all 0.25s ease-in-out',
          display: 'grid', 
          gridTemplateColumns: mounted ? `repeat(${itemsToShow}, minmax(0, 1fr))` : 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}
      >
        {currentTestimonials.map((t, i) => (
          <blockquote key={i} className="testimonial-card animate-card hover-lift">
            <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
              {Array(5).fill(0).map((_, j) => (
                <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#D8B26E" stroke="#D8B26E">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p style={{ color: '#667085', fontSize: '1rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.5rem' }}>"{t.text}"</p>
            <footer style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <cite style={{ fontFamily: "'Jost', sans-serif", color: '#081A2A', fontSize: '1rem', fontWeight: 600, fontStyle: 'normal' }}>— {t.author}</cite>
              <span style={{ color: '#9ca3af', fontSize: '0.85rem', marginTop: '0.25rem' }}>{t.location}</span>
            </footer>
          </blockquote>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
        <button onClick={handlePrev} aria-label="Témoignages précédents" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid #D8B26E', background: 'transparent', color: '#D8B26E', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hover-bg-gold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button onClick={handleNext} aria-label="Témoignages suivants" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid #D8B26E', background: 'transparent', color: '#D8B26E', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hover-bg-gold">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  )
}
