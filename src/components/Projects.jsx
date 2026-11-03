import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useLanguage } from '../LanguageContext'
import './Projects.css'

const Projects = () => {
  const { t } = useLanguage()
  
  const projects = [
    {
      image: '/assets/FDRE-MESOB-HRMS.png',
      title: t('projectMesob'),
      description: t('projectMesobDesc'),
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Henokwty/Mesob-HRMS',
      demo: 'https://mesob-hrms-frontend.onrender.com'
    },
    {
      image: '/assets/Nokia-Snake-Game.png',
      title: t('projectSnake'),
      description: t('projectSnakeDesc'),
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
      github: 'https://github.com/Korsiyee/Nokia-Snake-Game',
      demo: '#'
    },
    {
      image: '/assets/Apple-Clone.png',
      title: t('projectApple'),
      description: t('projectAppleDesc'),
      tags: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Korsiyee/Apple-Clone',
      demo: 'https://apple-clone-chi-livid.vercel.app/'
    },
    {
      image: '/assets/BBC-News-Classifier.png',
      title: t('projectBBC'),
      description: t('projectBBCDesc'),
      tags: ['Python', 'Machine Learning', 'NLP', 'TensorFlow'],
      github: 'https://github.com/Korsiyee/BBC-News-Classifier',
      demo: 'https://bbc-news-classifier-4zel.onrender.com'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t('projectsTitle')}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-link">
                      <FaGithub /> {t('code')}
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="overlay-link">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> {t('code')}
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> {t('liveDemo')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
