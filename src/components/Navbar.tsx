import React, { useState, useEffect } from 'react'
import { HiHome, HiUser, HiLightningBolt, HiBriefcase, HiMail, HiSun, HiMoon, HiMenuAlt3, HiX, HiOfficeBuilding } from 'react-icons/hi'

interface NavbarProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800' 
        : 'bg-black/10 backdrop-blur-md border-b border-gray-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Portfolio
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 hover:transform hover:-translate-y-1"
              style={{ color: 'var(--text-secondary)' }}
            >
              <HiHome className="w-5 h-5" />
              <span>Home</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('about')} 
              className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 hover:transform hover:-translate-y-1"
              style={{ color: 'var(--text-secondary)' }}
            >
              <HiUser className="w-5 h-5" />
              <span>About</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('skills')} 
              className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 hover:transform hover:-translate-y-1"
              style={{ color: 'var(--text-secondary)' }}
            >
              <HiLightningBolt className="w-5 h-5" />
              <span>Skills</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('clients')} 
              className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 hover:transform hover:-translate-y-1"
              style={{ color: 'var(--text-secondary)' }}
            >
              <HiOfficeBuilding className="w-5 h-5" />
              <span>Clients</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')} 
              className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 hover:transform hover:-translate-y-1"
              style={{ color: 'var(--text-secondary)' }}
            >
              <HiBriefcase className="w-5 h-5" />
              <span>Projects</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 hover:transform hover:-translate-y-1"
              style={{ color: 'var(--text-secondary)' }}
            >
              <HiMail className="w-5 h-5" />
              <span>Contact</span>
            </button>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center transition-all duration-200 hover:border-blue-500 hover:scale-110 hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-primary)' 
              }}
            >
              {isDarkMode ? (
                <HiSun className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
              ) : (
                <HiMoon className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-xl rounded-lg mt-2 border border-gray-800">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-white/10"
                style={{ color: 'var(--text-secondary)' }}
              >
                <HiHome className="w-5 h-5" />
                <span>Home</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('about')} 
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-white/10"
                style={{ color: 'var(--text-secondary)' }}
              >
                <HiUser className="w-5 h-5" />
                <span>About</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('skills')} 
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-white/10"
                style={{ color: 'var(--text-secondary)' }}
              >
                <HiLightningBolt className="w-5 h-5" />
                <span>Skills</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('clients')} 
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-white/10"
                style={{ color: 'var(--text-secondary)' }}
              >
                <HiOfficeBuilding className="w-5 h-5" />
                <span>Clients</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('projects')} 
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-white/10"
                style={{ color: 'var(--text-secondary)' }}
              >
                <HiBriefcase className="w-5 h-5" />
                <span>Projects</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-white/10"
                style={{ color: 'var(--text-secondary)' }}
              >
                <HiMail className="w-5 h-5" />
                <span>Contact</span>
              </button>
              
              <div className="pt-2">
                <button 
                  onClick={toggleDarkMode}
                  className="w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg border-2 transition-all duration-200"
                  style={{ 
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {isDarkMode ? (
                    <>
                      <HiSun className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <HiMoon className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 