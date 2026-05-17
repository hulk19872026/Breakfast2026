import { useState } from 'react'
import RecipeCard from './RecipeCard'

export default function Favorites({
  favorites,
  recipes,
  onRecipeClick,
  onFavoriteToggle,
  isFavorite,
  onClearAll,
  onTabChange,
}) {
  const [confirmClear, setConfirmClear] = useState(false)

  const savedRecipes = recipes.filter(r => favorites.includes(r.id))
  const countries   = [...new Set(savedRecipes.map(r => r.country))]
  const continents  = [...new Set(savedRecipes.map(r => r.continent))]

  const handleSurprise = () => {
    if (!savedRecipes.length) return
    const random = savedRecipes[Math.floor(Math.random() * savedRecipes.length)]
    onRecipeClick(random)
  }

  const handleClear = () => {
    onClearAll()
    setConfirmClear(false)
  }

  // ── Empty state ────────────────────────────────────────────────────────────
  if (!savedRecipes.length) {
    return (
      <div className="tab-pane">
        <div className="fav-empty">
          <span className="fav-empty-heart">♡</span>
          <h2>Your recipe collection starts here</h2>
          <p>
            Browse recipes and tap the ♡ heart on any card to save it here for quick access
          </p>
          <div className="empty-cta-row">
            <button className="empty-cta-btn" onClick={() => onTabChange('ingredients')}>
              🧂 Find by ingredients
            </button>
            <button className="empty-cta-btn" onClick={() => onTabChange('country')}>
              🌍 Explore by country
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Filled state ───────────────────────────────────────────────────────────
  return (
    <div className="tab-pane">
      <h2 className="tab-title">Your Favorites</h2>
      <p className="tab-sub">Your personal breakfast collection</p>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-box">
          <span className="stat-num">{savedRecipes.length}</span>
          <span className="stat-label">Saved recipes</span>
        </div>
        <div className="stat-box">
          <span className="stat-num">{countries.length}</span>
          <span className="stat-label">Countries</span>
        </div>
        <div className="stat-box">
          <span className="stat-num">{continents.length}</span>
          <span className="stat-label">Continents</span>
        </div>
      </div>

      {/* Action bar */}
      <div className="fav-actions">
        <button className="surprise-btn" onClick={handleSurprise}>
          🎲 Surprise me!
        </button>

        {confirmClear ? (
          <div className="clear-confirm">
            <span>Remove all {savedRecipes.length} favorites?</span>
            <button className="confirm-yes" onClick={handleClear}>Yes, clear</button>
            <button className="confirm-no" onClick={() => setConfirmClear(false)}>Cancel</button>
          </div>
        ) : (
          <button className="clear-btn" onClick={() => setConfirmClear(true)}>
            Clear all
          </button>
        )}
      </div>

      {/* Recipe grid */}
      <div className="recipe-grid">
        {savedRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            score={{ matches: 0, total: 0, pct: 0 }}
            isFavorite={isFavorite(recipe.id)}
            onFavoriteToggle={onFavoriteToggle}
            onClick={onRecipeClick}
          />
        ))}
      </div>
    </div>
  )
}
