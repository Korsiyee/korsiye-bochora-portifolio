import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaUser } from 'react-icons/fa'
import { useLanguage } from '../LanguageContext'
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const { t } = useLanguage()
  const fullText = t('role')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('greeting')} <span className="gradient-text">{t('name')}</span>
          </h1>
          <p className="hero-subtitle">{text}<span className="cursor">|</span></p>
          <p className="hero-description">
            {t('heroDescription')}
          </p>
          <div className="hero-buttons">
            <a href="/assets/Korsiye_Bochora_Advanced_CV.pdf" download="Korsiye_Bochora_Advanced_CV.pdf" className="btn btn-primary">
              {t('downloadCV')}
            </a>
            <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
              {t('viewWork')}
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              {t('getInTouch')}
            </button>
          </div>
          <div className="social-links">
            <a href="https://github.com/Korsiyee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/korsiye-bochora-980b2b3a9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="mailto:bkorsiye@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <div className="profile-image">
              <img src="/assets/profile-pic.png" alt="Koorsiye Bochora" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
