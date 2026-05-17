import { useState } from 'react'
import RecipeCard from './RecipeCard'
import { RECIPES } from '../data/recipes'
import { CONTINENT_MAP } from '../utils/continents'

export default function CountrySearch({
  selectedCountry,
  onCountrySelect,
  recipes,
  aiText,
  isLoading,
  onRecipeClick,
  onFavoriteToggle,
  isFavorite,
}) {
  const [search, setSearch] = useState('')

  const allCountries = [...new Set(RECIPES.map(r => r.country))]
  const fl = search.toLowerCase()

  const filteredGroups = Object.entries(CONTINENT_MAP)
    .map(([continent, countries]) => ({
      continent,
      countries: countries.filter(c =>
        allCountries.includes(c) && (!fl || c.toLowerCase().includes(fl))
      ),
    }))
    .filter(({ countries }) => countries.length > 0)

  const getFlag = country => RECIPES.find(r => r.country === country)?.flag || ''

  return (
    <div className="tab-pane">
      <h2 className="tab-title">Explore by country</h2>
      <p className="tab-sub">Choose a country to discover its morning traditions</p>

      {/* Country search input */}
      <div className="search-wrap">
        <span className="search-icon-prefix">🔍</span>
        <input
          className="text-input search-input"
          placeholder="Search countries..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Search countries"
        />
      </div>

      {/* Continent groups */}
      <div className="continent-groups">
        {filteredGroups.map(({ continent, countries }) => (
          <div key={continent} className="continent-group">
            <p className="continent-label">{continent}</p>
            <div className="country-pills">
              {countries.map(country => (
                <button
                  key={country}
                  className={`country-pill ${country === selectedCountry ? 'active' : ''}`}
                  onClick={() => onCountrySelect(country)}
                >
                  {getFlag(country)} {country}
                </button>
              ))}
            </div>
          </div>
        ))}

        {filteredGroups.length === 0 && (
          <p className="empty-state" style={{ textAlign: 'left', paddingTop: '1rem' }}>
            No countries match "{search}"
          </p>
        )}
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="loading-state">
          <div className="spinner large" />
          <p>Exploring breakfast traditions...</p>
        </div>
      )}

      {/* Country results */}
      {selectedCountry && !isLoading && (
        <div className="country-results">
          <div className="country-hero">
            <span className="country-flag-big">{getFlag(selectedCountry)}</span>
            <div>
              <h3 className="country-name">{selectedCountry}</h3>
              <p className="country-count">
                {recipes.length} recipe{recipes.length === 1 ? '' : 's'} · tap ♡ to save favorites
              </p>
            </div>
          </div>

          {aiText && (
            <div className="ai-box">
              {aiText.split('\n').filter(Boolean).map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}

          <div className="recipe-grid">
            {recipes.map(recipe => (
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
      )}
    </div>
  )
}
