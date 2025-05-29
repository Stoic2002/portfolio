import React from 'react'
import { HiDownload, HiChat, HiCode, HiBriefcase, HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero: React.FC = () => {
  const downloadCV = () => {
    // Create a blob with CV content or trigger download
    const link = document.createElement('a')
    link.href = '/cv-arul-karim.pdf'
    link.download = 'Arul-Karim-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <p className="text-lg mb-4 opacity-0 animate-slideUp" style={{ 
            color: 'var(--accent-primary)',
            animationDelay: '0s',
            animationFillMode: 'forwards' 
          }}>
            <span className="inline-flex items-center space-x-2">
              <span className="text-2xl">👋</span>
              <span>Hello World! I'm</span>
            </span>
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight opacity-0 animate-slideUp" style={{
            animationDelay: '0.2s',
            animationFillMode: 'forwards',
            color: 'var(--text-primary)'
          }}>
            <span className="gradient-text">Arul</span> Karim
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-0 animate-slideUp" style={{
            color: 'var(--text-secondary)',
            animationDelay: '0.4s',
            animationFillMode: 'forwards'
          }}>
            Frontend & Mobile Developer | Creating Digital Experiences That Matter
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 opacity-0 animate-slideUp" style={{
            animationDelay: '0.6s',
            animationFillMode: 'forwards'
          }}>
            <div className="text-center p-4 rounded-xl border backdrop-blur-sm min-w-[120px]" style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-primary)'
            }}>
              <div className="text-3xl font-bold font-mono mb-1" style={{ color: 'var(--accent-primary)' }}>
                2+
              </div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Years Experience
              </div>
            </div>
            
            <div className="text-center p-4 rounded-xl border backdrop-blur-sm min-w-[120px]" style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-primary)'
            }}>
              <div className="text-3xl font-bold font-mono mb-1" style={{ color: 'var(--accent-primary)' }}>
                6
              </div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Technologies
              </div>
            </div>
            
            <div className="text-center p-4 rounded-xl border backdrop-blur-sm min-w-[120px]" style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-primary)'
            }}>
              <div className="text-3xl font-bold font-mono mb-1" style={{ color: 'var(--accent-primary)' }}>
                ∞
              </div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Lines of Code
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed opacity-0 animate-slideUp" style={{
            color: 'var(--text-secondary)',
            animationDelay: '0.8s',
            animationFillMode: 'forwards'
          }}>
            I specialize in crafting modern web applications with{' '}
            <strong style={{ color: 'var(--accent-primary)' }}>React</strong> and{' '}
            <strong style={{ color: 'var(--accent-primary)' }}>Next.js</strong>, 
            building cross-platform mobile apps with{' '}
            <strong style={{ color: 'var(--accent-primary)' }}>Flutter</strong>, 
            and developing robust backends with{' '}
            <strong style={{ color: 'var(--accent-primary)' }}>Express.js</strong> and databases.
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-slideUp" style={{
            animationDelay: '1s',
            animationFillMode: 'forwards'
          }}>
            <button 
              onClick={downloadCV} 
              className="flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'white'
              }}
            >
              <HiDownload className="w-6 h-6" />
              <span>Download CV</span>
            </button>
            
            <button 
              onClick={scrollToContact}
              className="flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm"
              style={{
                borderColor: 'var(--accent-primary)',
                color: 'var(--text-primary)',
                backgroundColor: 'transparent'
              }}
            >
              <HiChat className="w-6 h-6" />
              <span>Let's Talk</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 opacity-0 animate-slideUp" style={{
            animationDelay: '1.2s',
            animationFillMode: 'forwards'
          }}>
            <a 
              href="https://github.com/Stoic2002" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg icon-hover"
              style={{
                backgroundColor: 'var(--bg-card)',
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
                backgroundColor: 'var(--bg-card)',
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
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-primary)',
                color: 'var(--text-secondary)'
              }}
              title="Email"
            >
              <HiMail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <div className="w-8 h-12 border-2 rounded-full flex justify-center" style={{ borderColor: 'var(--accent-primary)' }}>
              <div className="w-1 h-2 mt-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 