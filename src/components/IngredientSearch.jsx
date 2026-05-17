import { useState } from 'react'
import RecipeCard from './RecipeCard'

const QUICK_ITEMS = [
  'eggs', 'butter', 'flour', 'milk', 'oats', 'bread', 'rice',
  'tomatoes', 'onion', 'garlic', 'cheese', 'yogurt', 'olive oil',
  'potatoes', 'lemon', 'mushrooms', 'avocado', 'honey', 'berries', 'cream',
]

export default function IngredientSearch({
  ingredients,
  onIngredientsChange,
  onSearch,
  isLoading,
  results,
  aiText,
  onRecipeClick,
  onFavoriteToggle,
  isFavorite,
}) {
  const [inputVal, setInputVal] = useState('')

  const addIngredients = val => {
    if (!val.trim()) return
    const toAdd = val
      .split(',')
      .map(v => v.trim().toLowerCase())
      .filter(v => v && !ingredients.includes(v))
    if (toAdd.length) onIngredientsChange([...ingredients, ...toAdd])
    setInputVal('')
  }

  const removeIngredient = ing => {
    onIngredientsChange(ingredients.filter(i => i !== ing))
  }

  const handleKey = e => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addIngredients(inputVal)
    }
  }

  const handleQuickAdd = ing => {
    if (!ingredients.includes(ing)) {
      onIngredientsChange([...ingredients, ing])
    }
  }

  const hasResults = results.length > 0
  const hasSearched = aiText.length > 0 || (isLoading === false && ingredients.length > 0 && results.length === 0)

  return (
    <div className="tab-pane">
      <h2 className="tab-title">What's in your kitchen?</h2>
      <p className="tab-sub">Add your ingredients and I'll find what you can make right now</p>

      {/* Ingredient input box */}
      <div className="ing-box">
        <div className="chips-area">
          {ingredients.length === 0 ? (
            <span className="chips-placeholder">Your ingredients will appear here...</span>
          ) : (
            ingredients.map(ing => (
              <span key={ing} className="chip">
                {ing}
                <button
                  className="chip-x"
                  onClick={() => removeIngredient(ing)}
                  aria-label={`Remove ${ing}`}
                >
                  ×
                </button>
              </span>
            ))
          )}
        </div>
        <div className="input-row">
          <input
            className="text-input"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={handleKey}
            placeholder="e.g. eggs, butter, garlic..."
            aria-label="Add ingredients"
          />
          <button className="add-btn" onClick={() => addIngredients(inputVal)}>
            Add
          </button>
        </div>
      </div>

      {/* Quick-add chips */}
      <p className="quick-label">Quick add common pantry items:</p>
      <div className="quick-pills">
        {QUICK_ITEMS.map(ing => (
          <button
            key={ing}
            className={`quick-pill ${ingredients.includes(ing) ? 'used' : ''}`}
            onClick={() => handleQuickAdd(ing)}
          >
            {ing}
          </button>
        ))}
      </div>

      {/* Search button */}
      <button
        className="search-btn"
        onClick={onSearch}
        disabled={isLoading || ingredients.length === 0}
      >
        {isLoading
          ? <><span className="spinner" /> Searching...</>
          : <>✨ Find My Breakfast!</>
        }
      </button>

      {/* AI response */}
      {aiText && (
        <div className="ai-box">
          <h3 className="ai-title">Your Kitchen, Your Breakfast</h3>
          {aiText.split('\n').filter(Boolean).map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}

      {/* Results */}
      {hasResults && (
        <>
          <p className="results-meta">
            {results.length} recipe{results.length === 1 ? '' : 's'} found
            {' '}· tap any card to view · tap ♡ to save
          </p>
          <div className="recipe-grid">
            {results.slice(0, 12).map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                score={recipe.score}
                isFavorite={isFavorite(recipe.id)}
                onFavoriteToggle={onFavoriteToggle}
                onClick={onRecipeClick}
              />
            ))}
          </div>
        </>
      )}

      {/* Empty state */}
      {!isLoading && hasSearched && !hasResults && (
        <div className="empty-state">
          <span className="empty-icon">🥣</span>
          <p>No close matches yet — try adding a few more ingredients!</p>
        </div>
      )}
    </div>
  )
}
