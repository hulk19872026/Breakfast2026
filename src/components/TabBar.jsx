const TABS = [
  { id: 'ingredients', icon: '🧂', label: 'What Can I Make?' },
  { id: 'country',     icon: '🌍', label: 'By Country' },
  { id: 'favorites',   icon: '❤️', label: 'Favorites' },
]

export default function TabBar({ activeTab, onTabChange, favoritesCount }) {
  return (
    <nav className="tabbar">
      {TABS.map(({ id, icon, label }) => (
        <button
          key={id}
          className={`tab ${activeTab === id ? 'active' : ''}`}
          onClick={() => onTabChange(id)}
        >
          <span className="tab-icon">{icon}</span>
          <span className="tab-label">{label}</span>
          {id === 'favorites' && favoritesCount > 0 && (
            <span className="tab-badge">{favoritesCount}</span>
          )}
        </button>
      ))}
    </nav>
  )
}
