import { useEffect } from 'react'
import { supabase } from './lib/supabase'

function App() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from('recipes').select('*')
      console.log('Recipes:', data)
      console.log('Error:', error)
    }
    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700">NutriFamily 🥗</h1>
        <p className="text-gray-500 mt-2">Building something good.</p>
      </div>
    </div>
  )
}

export default App