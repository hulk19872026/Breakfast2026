import { useState, useCallback } from 'react'
import Header from './components/Header'
import TabBar from './components/TabBar'
import IngredientSearch from './components/IngredientSearch'
import CountrySearch from './components/CountrySearch'
import Favorites from './components/Favorites'
import RecipeModal from './components/RecipeModal'
import Toast from './components/Toast'
import { useFavorites } from './hooks/useFavorites'
import { askClaude, scoreRecipeByIngredients } from './utils/claude'
import { RECIPES } from './data/recipes'

export default function App() {
  // ── Tab state ──────────────────────────────────────────────────────────────
  const [tab, setTab] = useState('ingredients')

  // ── Ingredient search state ────────────────────────────────────────────────
  const [ingredients, setIngredients] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [ingredientAiText, setIngredientAiText] = useState('')

  // ── Country search state ───────────────────────────────────────────────────
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [countryRecipes, setCountryRecipes] = useState([])
  const [countryAiText, setCountryAiText] = useState('')

  // ── Shared state ───────────────────────────────────────────────────────────
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [toastMsg, setToastMsg] = useState('')

  const { favorites, toggleFavorite, isFavorite, clearFavorites } = useFavorites()

  // ── Helpers ────────────────────────────────────────────────────────────────
  const showToast = useCallback((msg) => {
    setToastMsg(msg)
    setTimeout(() => setToastMsg(''), 2500)
  }, [])

  const handleToggleFavorite = useCallback((id) => {
    const recipe = RECIPES.find(r => r.id === id)
    const willBeFavorited = !isFavorite(id)
    toggleFavorite(id)
    showToast(willBeFavorited ? `❤️  Saved ${recipe?.name}!` : `Removed ${recipe?.name}`)
  }, [isFavorite, toggleFavorite, showToast])

  // ── Ingredient search ──────────────────────────────────────────────────────
  const searchByIngredients = useCallback(async () => {
    if (!ingredients.length) return
    setIsLoading(true)
    setIngredientAiText('')

    const scored = RECIPES
      .map(r => ({ ...r, score: scoreRecipeByIngredients(r, ingredients) }))
      .filter(r => r.score.matches > 0)
      .sort((a, b) => b.score.pct - a.score.pct || b.score.matches - a.score.matches)

    setSearchResults(scored)

    const topList = scored.slice(0, 6).map(r =>
      `- ${r.flag} ${r.name} (${r.country}): ${r.score.matches}/${r.score.total} ingredients matched`
    ).join('\n')

    const prompt = `The user has these ingredients in their kitchen: ${ingredients.join(', ')}

Top matching recipes from the Global Breakfast Bible:
${topList || 'No close matches found'}

In 2–3 warm, enthusiastic sentences: celebrate what they CAN make right now, and mention one recipe that needs just 1–2 more ingredients. Talk like a chef friend giving advice!`

    try {
      const text = await askClaude(prompt)
      setIngredientAiText(text)
    } catch {
      setIngredientAiText(
        scored.length
          ? `You can make ${scored[0].name} right now! Check the recipe cards below for more options.`
          : 'Try adding a few more ingredients to find matching recipes!'
      )
    }

    setIsLoading(false)
  }, [ingredients])

  // ── Country search ─────────────────────────────────────────────────────────
  const searchByCountry = useCallback(async (country) => {
    setSelectedCountry(country)
    const recipes = RECIPES.filter(r => r.country === country)
    setCountryRecipes(recipes)
    setIsLoading(true)
    setCountryAiText('')

    const flag = recipes[0]?.flag || ''
    const prompt = `Tell me about ${flag} ${country}'s breakfast traditions from the Global Breakfast Bible. The book includes these ${country} recipes: ${recipes.map(r => r.name).join(', ')}. Write a warm, vivid 2-sentence cultural introduction to the morning food of ${country} — what makes it special and which dish to try first.`

    try {
      const text = await askClaude(prompt)
      setCountryAiText(text)
    } catch {
      setCountryAiText(`Explore the wonderful breakfast traditions of ${country}! Each dish tells the story of the country's culture and morning rituals.`)
    }

    setIsLoading(false)
  }, [])

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="app">
      <Header />

      <TabBar
        activeTab={tab}
        onTabChange={setTab}
        favoritesCount={favorites.length}
      />

      <main className="content">
        {tab === 'ingredients' && (
          <IngredientSearch
            ingredients={ingredients}
            onIngredientsChange={setIngredients}
            onSearch={searchByIngredients}
            isLoading={isLoading}
            results={searchResults}
            aiText={ingredientAiText}
            onRecipeClick={setSelectedRecipe}
            onFavoriteToggle={handleToggleFavorite}
            isFavorite={isFavorite}
          />
        )}

        {tab === 'country' && (
          <CountrySearch
            selectedCountry={selectedCountry}
            onCountrySelect={searchByCountry}
            recipes={countryRecipes}
            aiText={countryAiText}
            isLoading={isLoading}
            onRecipeClick={setSelectedRecipe}
            onFavoriteToggle={handleToggleFavorite}
            isFavorite={isFavorite}
          />
        )}

        {tab === 'favorites' && (
          <Favorites
            favorites={favorites}
            recipes={RECIPES}
            onRecipeClick={setSelectedRecipe}
            onFavoriteToggle={handleToggleFavorite}
            isFavorite={isFavorite}
            onClearAll={clearFavorites}
            onTabChange={setTab}
          />
        )}
      </main>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          isFavorite={isFavorite(selectedRecipe.id)}
          onFavoriteToggle={handleToggleFavorite}
          userIngredients={ingredients}
        />
      )}

      <Toast message={toastMsg} />
    </div>
  )
}
