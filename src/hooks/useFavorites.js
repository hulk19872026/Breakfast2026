import { useState, useEffect } from 'react'

const STORAGE_KEY = 'breakfast-bible-favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch (error) {
      console.error('Could not save favorites to localStorage:', error)
    }
  }, [favorites])

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const isFavorite = (id) => favorites.includes(id)

  const clearFavorites = () => setFavorites([])

  return { favorites, toggleFavorite, isFavorite, clearFavorites }
}
