import React, { useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiGlobeAlt, HiUser, HiChatAlt, HiPaperAirplane, HiX, HiCheck, HiBriefcase, HiLightningBolt } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import type { ContactForm } from '../types'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Contact form submitted:', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <>
      <section id="contact" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text flex items-center justify-center gap-3">
                <HiMail className="text-5xl" style={{ color: 'var(--accent-primary)' }} />
                Get In Touch
              </h2>
              <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Let's work together! Feel free to reach out for collaborations or just a friendly hello.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="p-8 rounded-2xl border card-hover" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                    <HiBriefcase className="text-3xl" style={{ color: 'var(--accent-primary)' }} />
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-primary)' }}>
                        <HiMail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Email</h4>
                        <a 
                          href="mailto:arulkarim19@gmail.com"
                          className="transition-colors hover:text-blue-500"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          arulkarim19@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-primary)' }}>
                        <HiPhone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Phone</h4>
                        <a 
                          href="tel:+6287898194925"
                          className="transition-colors hover:text-blue-500"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          +62 878-9819-4925
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-primary)' }}>
                        <HiLocationMarker className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Location</h4>
                        <span style={{ color: 'var(--text-secondary)' }}>
                          Banjarnegara, Jawa Tengah<br />Indonesia
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-primary)' }}>
                        <HiClock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Availability</h4>
                        <span style={{ color: 'var(--text-secondary)' }}>
                          Open for freelance projects<br />& collaborations
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="p-8 rounded-2xl border card-hover" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                    <HiGlobeAlt className="text-2xl" style={{ color: 'var(--accent-primary)' }} />
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/Stoic2002" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg icon-hover"
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        borderColor: 'var(--border-primary)',
                        color: 'var(--text-secondary)'
                      }}
                      title="GitHub"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/al-bahrul-karim-84165330a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg icon-hover"
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        borderColor: 'var(--border-primary)',
                        color: 'var(--text-secondary)'
                      }}
                      title="LinkedIn"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="mailto:arulkarim19@gmail.com"
                      className="w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg icon-hover"
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        borderColor: 'var(--border-primary)',
                        color: 'var(--text-secondary)'
                      }}
                      title="Email"
                    >
                      <HiMail className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://wa.me/6287898194925"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg icon-hover"
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        borderColor: 'var(--border-primary)',
                        color: 'var(--text-secondary)'
                      }}
                      title="WhatsApp"
                    >
                      <FaWhatsapp className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 rounded-2xl border card-hover" style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-primary)'
              }}>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                  <HiChatAlt className="text-3xl" style={{ color: 'var(--accent-primary)' }} />
                  Send me a message
                </h3>
                
                {submitted && (
                  <div className="flex items-center space-x-3 p-4 rounded-xl mb-6 border" style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    borderColor: 'rgba(34, 197, 94, 0.3)',
                    color: '#22c55e'
                  }}>
                    <HiCheck className="w-6 h-6" />
                    <span>Thank you! Your message has been sent successfully. I'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="flex items-center space-x-2 mb-2 font-medium" style={{ color: 'var(--text-primary)' }}>
                      <HiUser className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                      <span>Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                        errors.name ? 'border-red-500' : 'focus:border-blue-500'
                      }`}
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        borderColor: errors.name ? '#ef4444' : 'var(--border-primary)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="Your full name"
                      disabled={isLoading}
                    />
                    {errors.name && (
                      <div className="flex items-center space-x-2 mt-2 text-red-500 text-sm">
                        <HiX className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 mb-2 font-medium" style={{ color: 'var(--text-primary)' }}>
                      <HiMail className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                      <span>Email *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                        errors.email ? 'border-red-500' : 'focus:border-blue-500'
                      }`}
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        borderColor: errors.email ? '#ef4444' : 'var(--border-primary)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="your.email@example.com"
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <div className="flex items-center space-x-2 mt-2 text-red-500 text-sm">
                        <HiX className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center space-x-2 mb-2 font-medium" style={{ color: 'var(--text-primary)' }}>
                      <HiChatAlt className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                      <span>Message *</span>
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none resize-none ${
                        errors.message ? 'border-red-500' : 'focus:border-blue-500'
                      }`}
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        borderColor: errors.message ? '#ef4444' : 'var(--border-primary)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="Tell me about your project or just say hello..."
                      disabled={isLoading}
                    />
                    {errors.message && (
                      <div className="flex items-center space-x-2 mt-2 text-red-500 text-sm">
                        <HiX className="w-4 h-4" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: 'var(--accent-primary)',
                      color: 'white'
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane className="w-6 h-6" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t" style={{ 
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-primary)' 
      }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2" style={{ color: 'var(--text-primary)' }}>
                  <HiLightningBolt className="text-2xl" style={{ color: 'var(--accent-primary)' }} />
                  Arul Karim
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>Frontend & Mobile Developer</p>
                <div className="flex justify-center md:justify-start space-x-4 mt-2">
                  <a 
                    href="https://github.com/Stoic2002" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-blue-500"
                    style={{ color: 'var(--text-secondary)' }}
                    title="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/al-bahrul-karim-84165330a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-blue-500"
                    style={{ color: 'var(--text-secondary)' }}
                    title="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:arulkarim19@gmail.com"
                    className="transition-colors hover:text-blue-500"
                    style={{ color: 'var(--text-secondary)' }}
                    title="Email"
                  >
                    <HiMail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p style={{ color: 'var(--text-muted)' }}>
                  © 2024 Arul Karim. All rights reserved.
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                  Built with React & TypeScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact 