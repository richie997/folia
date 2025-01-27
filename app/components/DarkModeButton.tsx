'use client'

import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Apply dark mode class to html element on mount
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {darkMode ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  )
} 