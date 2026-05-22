import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import RecipeCard from './components/RecipeCard/RecipeCard'

function App() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRecipes() {
      const { data, error } = await supabase.from('recipes').select('*')
      if (error) console.log(error)
      else setRecipes(data)
      setLoading(false)
    }
    fetchRecipes()
  }, [])

  if (loading) return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <p className="text-green-700">Loading...</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">NutriFamily 🥗</h1>
      <div className="grid grid-cols-1 gap-4">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            mealType={recipe.meal_type}
            cuisine={recipe.cuisine}
            prepMinutes={recipe.prep_minutes}
          />
        ))}
      </div>
    </div>
  )
}

export default App