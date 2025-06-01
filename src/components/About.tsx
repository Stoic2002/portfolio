import React from 'react'
import { HiUser, HiMail, HiPhone, HiLocationMarker, HiAcademicCap, HiBriefcase, HiGlobeAlt, HiCode, HiDeviceMobile, HiCog, HiColorSwatch } from 'react-icons/hi'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text flex items-center justify-center gap-3">
              <HiUser className="text-5xl" style={{ color: 'var(--accent-primary)' }} />
              About Me
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Get to know more about me, my background, and what drives my passion for development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                <span style={{ color: 'var(--accent-primary)' }}>Frontend & Mobile</span> Developer
              </h3>
              
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  Passionate developer with expertise in building modern, responsive web applications 
                  and mobile solutions. I specialize in creating seamless user experiences using 
                  cutting-edge technologies and following best practices in software development.
                </p>
                <p>
                  My journey in development started with a curiosity about how digital experiences 
                  are crafted. Today, I focus on creating applications that not only look great but 
                  also provide exceptional functionality and performance.
                </p>
                <p>
                  I believe in continuous learning and staying updated with the latest technologies 
                  to deliver innovative solutions that meet modern user expectations.
                </p>
              </div>

              {/* Personal Info Cards */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-xl border card-hover" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <div className="flex items-center space-x-3">
                    <HiMail className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Email</h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>arulkarim19@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl border card-hover" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <div className="flex items-center space-x-3">
                    <HiPhone className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Phone</h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>+62 878-9819-4925</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl border card-hover" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <div className="flex items-center space-x-3">
                    <HiLocationMarker className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Location</h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Banjarnegara, Jawa Tengah<br />Indonesia</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl border card-hover" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <div className="flex items-center space-x-3">
                    <HiAcademicCap className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Education</h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Computer Science<br />Tech Enthusiast</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl border card-hover" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <div className="flex items-center space-x-3">
                    <HiBriefcase className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Experience</h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>1 Years<br />Frontend & Mobile Development</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl border card-hover" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <div className="flex items-center space-x-3">
                    <HiGlobeAlt className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                    <div>
                      <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>Languages</h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Indonesian (Native)<br />English</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
                What I Do
              </h3>
              
              <div className="grid gap-6">
                <div className="p-6 rounded-xl border card-hover" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent-primary)' }}>
                      <HiCode className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        Web Development
                      </h4>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        Building responsive, modern web applications using React, Next.js, and modern CSS frameworks
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl border card-hover" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent-primary)' }}>
                      <HiDeviceMobile className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        Mobile Development
                      </h4>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        Creating cross-platform mobile applications with Flutter for iOS and Android
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl border card-hover" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent-primary)' }}>
                      <HiCog className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        Backend Integration
                      </h4>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        Developing REST APIs and integrating databases using Express.js, MySQL, and PostgreSQL
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl border card-hover" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent-primary)' }}>
                      <HiColorSwatch className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        UI/UX Design
                      </h4>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        Designing intuitive user interfaces with focus on user experience and modern design principles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 