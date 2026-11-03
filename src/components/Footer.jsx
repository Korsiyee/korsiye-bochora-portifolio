import { FaGithub, FaLinkedin, FaYoutube, FaTelegram, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '../LanguageContext'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-col footer-about">
            <h3 className="footer-name">Koorsiye Bochora</h3>
            <p className="footer-description">
              {t('footerDesc')}
            </p>
            <div className="footer-social-icons">
              <a href="https://github.com/Korsiyee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/korsiye-bochora-980b2b3a9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.youtube.com/@koorsiyebochora" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://t.me/koorsiyee" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <FaTelegram />
              </a>
              <a href="mailto:bkorsiye@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t('footerCompany')}</h4>
            <ul className="footer-links">
              <li><a href="#about">{t('about')}</a></li>
              <li><a href="#skills">{t('footerServices')}</a></li>
              <li><a href="#projects">{t('projects')}</a></li>
              <li><a href="#certificates">{t('certificates')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t('footerResources')}</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/Korsiyee" target="_blank" rel="noopener noreferrer">{t('footerGitHub')}</a></li>
              <li><a href="#skills">{t('footerLearning')}</a></li>
              <li><a href="/assets/Korsiye_Bochora_Advanced_CV.pdf" download>{t('downloadCV')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t('contact')}</h4>
            <ul className="footer-links">
              <li><a href="mailto:bkorsiye@gmail.com">{t('email')}</a></li>
              <li><a href="tel:+251972891671">{t('phone')}</a></li>
              <li><a href="https://t.me/koorsiyee" target="_blank" rel="noopener noreferrer">{t('footerTelegram')}</a></li>
              <li><a href="#contact">{t('location')}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Koorsiye Bochora. {t('allRightsReserved')}</p>
            <p className="footer-subtitle">{t('footerSubtitle')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
