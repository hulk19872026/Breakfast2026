import { useEffect } from 'react'

export default function RecipeModal({ recipe, onClose, isFavorite, onFavoriteToggle, userIngredients }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const hasIngredient = ing => {
    const ingLower = ing.toLowerCase()
    return userIngredients.some(ui => {
      const uiLower = ui.toLowerCase()
      return ingLower.includes(uiLower) || uiLower.includes(ingLower)
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={e => e.stopPropagation()}>

        {/* Header row */}
        <div className="modal-header">
          <div>
            <span className="modal-flag">{recipe.flag}</span>
            <h2 className="modal-title">{recipe.name}</h2>
            <p className="modal-meta">{recipe.country} · {recipe.continent}</p>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close">×</button>
        </div>

        {/* Favorite button */}
        <button
          className={`fav-modal-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={() => onFavoriteToggle(recipe.id)}
        >
          {isFavorite ? '❤️  Saved to Favorites' : '♡  Add to Favorites'}
        </button>

        {/* Timing chips */}
        <div className="timing-row">
          {recipe.prepTime  && <span className="timing-chip"><b>Time</b> {recipe.prepTime}</span>}
          {recipe.servings  && <span className="timing-chip"><b>Serves</b> {recipe.servings}</span>}
          {recipe.calories  && <span className="timing-chip"><b>~{recipe.calories} cal</b></span>}
        </div>

        {/* Description */}
        {recipe.description && (
          <section className="modal-section">
            <h4 className="section-label">About This Dish</h4>
            <p className="modal-desc">{recipe.description}</p>
          </section>
        )}

        {/* Ingredients */}
        <section className="modal-section">
          <h4 className="section-label">
            Ingredients
            {userIngredients.length > 0 && (
              <span className="have-hint"> · green = you have it</span>
            )}
          </h4>
          <div className="pill-row">
            {recipe.ingredients.map(ing => (
              <span
                key={ing}
                className={`ing-pill ${userIngredients.length && hasIngredient(ing) ? 'have' : ''}`}
              >
                {ing}
              </span>
            ))}
          </div>
        </section>

        {/* Steps */}
        {recipe.steps?.length > 0 && (
          <section className="modal-section">
            <h4 className="section-label">How to Make It</h4>
            <ol className="steps-list">
              {recipe.steps.map((step, i) => (
                <li key={i} className="step-item">
                  <span className="step-num">{i + 1}</span>
                  <span className="step-text">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Tags */}
        {recipe.tags?.length > 0 && (
          <section className="modal-section">
            <div className="pill-row">
              {recipe.tags.map(tag => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  )
}
