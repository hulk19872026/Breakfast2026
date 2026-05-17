export default function RecipeCard({ recipe, score, isFavorite, onFavoriteToggle, onClick }) {
  const pct = Math.round((score?.pct || 0) * 100)
  const showBar = score?.total > 0
  const accentColor = pct >= 80 ? '#4A7C59' : pct >= 50 ? '#C4622D' : '#8B6914'

  return (
    <div
      className="recipe-card"
      style={{ '--card-accent': showBar ? accentColor : '#C4622D' }}
    >
      {/* Favorite heart button */}
      <button
        className={`heart-btn ${isFavorite ? 'favorited' : ''}`}
        onClick={e => { e.stopPropagation(); onFavoriteToggle(recipe.id) }}
        aria-label={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
      >
        {isFavorite ? '❤️' : '♡'}
      </button>

      {/* Card body — clicks open modal */}
      <div className="card-body" onClick={() => onClick(recipe)}>
        <span className="card-flag">{recipe.flag}</span>
        <h3 className="card-name">{recipe.name}</h3>
        <p className="card-country">{recipe.country}</p>

        {showBar && (
          <>
            <div className="match-track">
              <div
                className="match-fill"
                style={{ width: `${pct}%`, background: accentColor }}
              />
            </div>
            <p className="match-label">{score.matches}/{score.total} ingredients matched</p>
          </>
        )}

        <div className="card-tags">
          {(recipe.tags || []).slice(0, 2).map(tag => (
            <span key={tag} className="card-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
