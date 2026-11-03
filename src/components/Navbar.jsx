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
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
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
          {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
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
