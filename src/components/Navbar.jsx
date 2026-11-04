import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { useLanguage } from '../LanguageContext'
import LanguageSelector from './LanguageSelector'
import './Navbar.css'

const Navbar = ({ activeSection, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (sectionId) => {
    if (sectionId === 'achievements') {
      // Scroll to certificates section and switch to achievements tab
      const element = document.getElementById('certificates')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        // Trigger the achievements tab click after scrolling
        setTimeout(() => {
          const achievementsTab = document.querySelector('.tab-button:nth-child(2)')
          if (achievementsTab) achievementsTab.click()
        }, 500)
        setIsOpen(false)
      }
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      }
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => {
          e.preventDefault()
          scrollToSection('home')
        }}>
          <span className="logo-text">Koorsiye</span>
          <span className="logo-dot">.</span>
        </a>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {['home', 'about', 'skills', 'projects', 'certificates', 'achievements', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section === 'achievements' ? 'certificates' : section}`}
                className={`nav-link ${activeSection === section || (section === 'achievements' && activeSection === 'certificates') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section)
                }}
              >
                {t(section)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <LanguageSelector />
          
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
