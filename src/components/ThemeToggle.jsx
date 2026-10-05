import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // Theme switching remains available when browser storage is disabled.
    }
  }, [theme])

  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <FiSun size={20} aria-hidden="true" /> : <FiMoon size={20} aria-hidden="true" />}
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default ThemeToggle
