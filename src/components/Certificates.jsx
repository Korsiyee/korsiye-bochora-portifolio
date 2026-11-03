import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { FaAward, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('certificates');

  const certificates = [
    {
      id: 1,
      title: t('certFullStack'),
      issuer: 'Udemy',
      year: '2024',
      description: t('certFullStackDesc'),
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      icon: '💻',
      color: 'blue',
      link: '#'
    },
    {
      id: 2,
      title: t('certAWS'),
      issuer: 'AWS',
      year: '2026',
      description: t('certAWSDesc'),
      tags: ['AWS', 'Artificial Intelligence', 'Cloud'],
      icon: '☁️',
      color: 'orange',
      link: '#'
    },
    {
      id: 3,
      title: t('certLeadership'),
      issuer: 'Leadership Excellence Award',
      year: '2026',
      description: t('certLeadershipDesc'),
      tags: ['Leadership', 'Teamwork'],
      icon: '🏆',
      color: 'purple',
      link: '#'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: t('achieveSuccessBridge'),
      year: '2024',
      description: t('achieveSuccessBridgeDesc'),
      icon: '🎯',
      color: 'blue'
    },
    {
      id: 2,
      title: t('achieveStudent'),
      year: '2021 - Present',
      description: t('achieveStudentDesc'),
      icon: '📚',
      color: 'green'
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {t('certificatesTitle')}
          </h2>
          <p className="section-description">
            {t('certificatesSubtitle')}
          </p>
        </div>

        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            <FaAward /> {t('certificates')}
          </button>
          <button
            className={`tab-button ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            <FaTrophy /> {t('achievements')}
          </button>
        </div>

        {activeTab === 'certificates' ? (
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div key={cert.id} className={`certificate-card ${cert.color}`}>
                <div className="certificate-header">
                  <div className="certificate-icon">{cert.icon}</div>
                  <div className="certificate-year">{cert.year}</div>
                </div>
                <div className="certificate-body">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  <p className="certificate-description">{cert.description}</p>
                  <div className="certificate-tags">
                    {cert.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  {cert.link && (
                    <a href={cert.link} className="view-certificate-btn" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> {t('viewCertificate')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`achievement-card ${achievement.color}`}>
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-content">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-year">{achievement.year}</p>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
