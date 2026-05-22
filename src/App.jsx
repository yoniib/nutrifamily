import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Dashboard from './pages/Dashboard'
import RecipeBook from './pages/RecipeBook'
import WeeklyPlanner from './pages/WeeklyPlanner'
import Pantry from './pages/Pantry'
import ShoppingList from './pages/ShoppingList'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-green-50 pb-16">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recipes" element={<RecipeBook />} />
          <Route path="/planner" element={<WeeklyPlanner />} />
          <Route path="/pantry" element={<Pantry />} />
          <Route path="/shopping" element={<ShoppingList />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}

export default App