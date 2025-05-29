import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Clients from './components/Clients'
import Projects from './components/Projects'
import Contact from './components/Contact'
import type { Project } from './types'
import { getProjects } from './data/mockProjects'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme ? savedTheme === 'dark' : true
  })

  // Use local mock data
  const [projects] = useState<Project[]>(getProjects())

  // Save theme to localStorage (theme data is small, safe to use)
  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : 'light'}`}
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Clients />
        <Projects projects={projects} />
        <Contact />
      </main>
    </div>
  )
}

export default App
