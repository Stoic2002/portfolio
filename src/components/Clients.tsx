import React from 'react'
import { HiOfficeBuilding, HiStar } from 'react-icons/hi'

interface Client {
  id: string
  name: string
  type: string
  description: string
  logo?: string
}

const Clients: React.FC = () => {
  const clients: Client[] = [
    {
      id: '1',
      name: 'PLN',
      type: 'Government Enterprise',
      description: 'Perusahaan Listrik Negara - State-owned electricity company',
      logo: '/images/clients/pln-logo.png'
    },
    {
      id: '2',
      name: 'Bawaslu',
      type: 'Government Institution',
      description: 'Badan Pengawas Pemilihan Umum - Election Supervisory Agency',
      logo: '/images/clients/bawaslu-logo.png'
    },
    {
      id: '3',
      name: 'Kick Avenue',
      type: 'E-commerce Platform',
      description: 'Premium marketplace for authentic branded products',
      logo: '/images/clients/kick-avenue-logo.png'
    },
    {
      id: '4',
      name: 'DPRD Jateng',
      type: 'Regional Government',
      description: 'Dewan Perwakilan Rakyat Daerah Jawa Tengah - Central Java Regional Parliament',
      logo: '/images/clients/dprd-jateng-logo.png'
    }
  ]

  return (
    <section id="clients" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text flex items-center justify-center gap-3">
              <HiOfficeBuilding className="text-5xl" style={{ color: 'var(--accent-primary)' }} />
              Collaborated With
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Trusted by leading institutions and companies to deliver innovative digital solutions
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div 
                key={client.id}
                className="group rounded-2xl border card-hover p-6 text-center"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Logo Container */}
                <div className="relative mb-6">
                  <div 
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-white"
                    // style={{ backgroundColor: 'var(--bg-tertiary)' }}
                  >
                    {client.logo ? (
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          e.currentTarget.style.display = 'none'
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement
                          if (fallback) fallback.style.display = 'block'
                        }}
                      />
                    ) : null}
                    <HiOfficeBuilding 
                      className="w-12 h-12" 
                      style={{ 
                        color: 'var(--accent-primary)',
                        display: client.logo ? 'none' : 'block'
                      }} 
                    />
                  </div>
                  
                  {/* Glow effect */}
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  ></div>
                </div>

                {/* Client Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {client.name}
                  </h3>
                  
                  <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border" style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white',
                    borderColor: 'var(--accent-primary)'
                  }}>
                    <HiStar className="w-3 h-3" />
                    <span>{client.type}</span>
                  </div>
                  
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm" style={{ color: 'var(--text-muted)' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                <span>Government & Enterprise Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-secondary)' }}></div>
                <span>Trusted Digital Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-tertiary)' }}></div>
                <span>Innovation & Quality Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients 