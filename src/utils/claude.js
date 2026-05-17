const SYSTEM_PROMPT = `You are the Global Breakfast Bible assistant — a warm, enthusiastic food expert with deep knowledge of 770+ breakfast recipes from 72 countries across 6 continents. You love food, culture, and helping people discover delicious breakfasts. Be concise, encouraging, and friendly — like a knowledgeable chef friend.`

export async function askClaude(userMessage) {
  try {
    const response = await fetch('/api/claude', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userMessage }],
        max_tokens: 900,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'API request failed')
    }

    return data.content?.[0]?.text || ''
  } catch (error) {
    console.error('Claude API error:', error)
    throw error
  }
}

export function scoreRecipeByIngredients(recipe, userIngredients) {
  if (!userIngredients.length) {
    return { matches: 0, total: recipe.ingredients.length, pct: 0 }
  }

  const matches = recipe.ingredients.filter(ri => {
    const riLower = ri.toLowerCase()
    return userIngredients.some(ui => {
      const uiLower = ui.toLowerCase()
      return (
        riLower.includes(uiLower) ||
        uiLower.includes(riLower) ||
        (uiLower.length > 3 && riLower.includes(uiLower.slice(0, -1)))
      )
    })
  })

  return {
    matches: matches.length,
    total: recipe.ingredients.length,
    pct: matches.length / recipe.ingredients.length,
  }
}
