import { FaGraduationCap, FaCode, FaDownload } from 'react-icons/fa'
import { useLanguage } from '../LanguageContext'
import './About.css'

const About = () => {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t('aboutTitle')}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{t('aboutP1')}</p>
            <p>{t('aboutP2')}</p>
            <div className="about-info">
              <div className="info-item">
                <FaGraduationCap className="info-icon" />
                <div>
                  <h3>{t('education')}</h3>
                  <p>{t('educationTitle')}</p>
                  <p>{t('educationUniversity')}</p>
                </div>
              </div>
              <div className="info-item">
                <FaCode className="info-icon" />
                <div>
                  <h3>{t('specialization')}</h3>
                  <p>{t('specializationTitle')}</p>
                  <p>{t('specializationDesc')}</p>
                </div>
              </div>
            </div>
            <div className="cv-download">
              <a href="/assets/Korsiye_Bochora_Advanced_CV.pdf" download="Korsiye_Bochora_Advanced_CV.pdf" className="btn btn-primary">
                <FaDownload /> {t('downloadMyCV')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
