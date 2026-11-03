import { useState, useRef, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('wLKHTUVmYE8O5RvQr')
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    // Map EmailJS field names to our state
    const fieldMap = {
      'from_name': 'name',
      'from_email': 'email',
      'subject': 'subject',
      'message': 'message'
    }
    
    setFormData({
      ...formData,
      [fieldMap[name] || name]: value
    })
    // Clear status when user starts typing
    if (status.message) setStatus({ type: '', message: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus({ type: '', message: '' })

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        'service_xbh3mw8',      // Service ID
        'template_11oqqpl',     // Template ID
        form.current
      )

      console.log('Email sent successfully:', result.text)
      setStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon. 🎉'
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      console.error('Failed to send email:', error)
      setStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again or email me directly at bkorsiye@gmail.com'
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. Whether you have 
              a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:bkorsiye@gmail.com">bkorsiye@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+251972891671">+251 97 289 1671</a>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Haramaya, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" ref={form} onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
            
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={sending}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={sending}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={sending}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={sending}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
