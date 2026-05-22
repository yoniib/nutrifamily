import { Link, useLocation } from 'react-router-dom'

function BottomNav() {
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/recipes', label: 'Recipes', icon: '📖' },
    { to: '/planner', label: 'Planner', icon: '📅' },
    { to: '/pantry', label: 'Pantry', icon: '🥫' },
    { to: '/shopping', label: 'Shopping', icon: '🛒' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-50">
      {links.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className={`flex flex-col items-center text-xs gap-1 px-3 py-2 rounded-lg transition-colors ${
            location.pathname === link.to
              ? 'text-green-600 font-semibold'
              : 'text-gray-400'
          }`}
        >
          <span className="text-xl">{link.icon}</span>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default BottomNav