import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaBootstrap,
  FaNodeJs, FaPython, FaPhp, FaGitAlt, FaGithub, FaDocker,
  FaDatabase, FaServer, FaLaptopCode, FaTools, FaLeaf, FaFire, FaGem
} from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiExpress, SiDjango, SiLinux } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-end',
      icon: <FaLaptopCode />,
      skills: [
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3Alt />, name: 'CSS3' },
        { icon: <FaJs />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' },
        { icon: <FaVuejs />, name: 'Vue.js' },
        { icon: <FaBootstrap />, name: 'Bootstrap' },
      ]
    },
    {
      title: 'Back-end',
      icon: <FaServer />,
      skills: [
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <FaPython />, name: 'Python' },
        { icon: <FaPhp />, name: 'PHP' },
        { icon: <SiExpress />, name: 'Express.js' },
        { icon: <SiDjango />, name: 'Django' },
        { icon: <FaGem />, name: 'Laravel' },
      ]
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      skills: [
        { icon: <SiMysql />, name: 'MySQL' },
        { icon: <SiPostgresql />, name: 'PostgreSQL' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <SiFirebase />, name: 'Firebase' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: <FaTools />,
      skills: [
        { icon: <FaGitAlt />, name: 'Git' },
        { icon: <FaGithub />, name: 'GitHub' },
        { icon: <FaDocker />, name: 'Docker' },
        { icon: <FaServer />, name: 'REST API' },
        { icon: <SiLinux />, name: 'Linux' },
        { icon: <FaLaptopCode />, name: 'Responsive Design' },
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.icon} {category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
