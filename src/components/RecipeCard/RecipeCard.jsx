import { useState } from 'react'

function RecipeCard({ name, mealType, cuisine, prepMinutes }) {
  const [isFavourite, setIsFavourite] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <button
          onClick={() => setIsFavourite(!isFavourite)}
          className="text-xl"
        >
          {isFavourite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="flex gap-2 mt-2">
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
          {mealType}
        </span>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          {cuisine}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-2">⏱ {prepMinutes} min prep</p>
    </div>
  )
}

export default RecipeCard