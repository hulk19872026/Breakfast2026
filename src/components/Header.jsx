import { RECIPES, ALL_COUNTRIES, ALL_CONTINENTS } from '../data/recipes'

export default function Header() {
  return (
    <header className="header">
      <h1>🍳 Global Breakfast Bible</h1>
      <p>Search by ingredients · Explore by country · Save your favorites</p>
      <div className="header-badges">
        <span className="badge">{RECIPES.length} Recipes</span>
        <span className="badge">{ALL_COUNTRIES.length} Countries</span>
        <span className="badge">{ALL_CONTINENTS.length} Continents</span>
        <span className="badge">AI-Powered</span>
      </div>
    </header>
  )
}
