import React from 'react'
import { HiLightningBolt, HiStar, HiDesktopComputer, HiDeviceMobile, HiCog, HiDatabase } from 'react-icons/hi'
import { SiReact, SiNextdotjs, SiFlutter, SiExpress, SiMysql, SiPostgresql } from 'react-icons/si'
import type { Skill } from '../types'

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend Skills
    { name: 'React', level: 90, icon: 'react', category: 'Frontend' },
    { name: 'Next.js', level: 85, icon: 'nextjs', category: 'Frontend' },
    
    // Mobile Development
    { name: 'Flutter', level: 95, icon: 'flutter', category: 'Mobile' },
    
    // Backend
    { name: 'Express.js', level: 80, icon: 'express', category: 'Backend' },
    
    // Database
    { name: 'MySQL', level: 85, icon: 'mysql', category: 'Database' },
    { name: 'PostgreSQL', level: 80, icon: 'postgresql', category: 'Database' }
  ]

  const categories = ['All', 'Frontend', 'Mobile', 'Backend', 'Database']
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-emerald-600'
    if (level >= 80) return 'from-blue-500 to-cyan-600'
    return 'from-purple-500 to-violet-600'
  }

  const getSkillIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8 text-white" }
    
    switch (iconName) {
      case 'react': return <SiReact {...iconProps} />
      case 'nextjs': return <SiNextdotjs {...iconProps} />
      case 'flutter': return <SiFlutter {...iconProps} />
      case 'express': return <SiExpress {...iconProps} />
      case 'mysql': return <SiMysql {...iconProps} />
      case 'postgresql': return <SiPostgresql {...iconProps} />
      default: return <HiCog {...iconProps} />
    }
  }

  const getCategoryIcon = (category: string) => {
    const iconProps = { className: "w-5 h-5" }
    
    switch (category) {
      case 'All': return <HiStar {...iconProps} />
      case 'Frontend': return <HiDesktopComputer {...iconProps} />
      case 'Mobile': return <HiDeviceMobile {...iconProps} />
      case 'Backend': return <HiCog {...iconProps} />
      case 'Database': return <HiDatabase {...iconProps} />
      default: return <HiStar {...iconProps} />
    }
  }

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text flex items-center justify-center gap-3">
              <HiLightningBolt className="text-5xl" style={{ color: 'var(--accent-primary)' }} />
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              The technologies I work with to bring ideas to life
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 transition-all duration-300 hover:transform hover:-translate-y-1 ${
                  selectedCategory === category 
                    ? 'text-white border-transparent' 
                    : 'border-gray-600 hover:border-blue-500'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--accent-primary)' : 'var(--bg-card)',
                  color: selectedCategory === category ? 'white' : 'var(--text-secondary)',
                  borderColor: selectedCategory === category ? 'transparent' : 'var(--border-primary)'
                }}
                onClick={() => setSelectedCategory(category)}
              >
                {getCategoryIcon(category)}
                <span className="font-medium">{category}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="p-6 rounded-2xl border card-hover opacity-0 animate-slideUp backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Icon */}
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className={`w-full h-full rounded-xl bg-gradient-to-br ${getSkillColor(skill.level)} flex items-center justify-center relative`}>
                    {getSkillIcon(skill.icon)}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-center mb-4" style={{ color: 'var(--text-primary)' }}>
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                      Proficiency
                    </span>
                    <span className="text-sm font-bold font-mono" style={{ color: 'var(--accent-primary)' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <div 
                      className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="text-center">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium border" style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white',
                    borderColor: 'var(--accent-primary)'
                  }}>
                    {getCategoryIcon(skill.category)}
                    <span>{skill.category}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Expert (90%+)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600"></div>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Intermediate (80-89%)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-600"></div>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Learning (Below 80%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 