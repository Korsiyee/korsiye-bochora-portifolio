import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import { FaGlobe, FaChevronDown } from 'react-icons/fa'
import './LanguageSelector.css'

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'om', name: 'Afan Oromo', flag: '🇪🇹' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="language-selector">
      <button 
        className="language-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <FaGlobe />
        <span>{currentLanguage?.flag}</span>
        <FaChevronDown className={`chevron ${isOpen ? 'open' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
