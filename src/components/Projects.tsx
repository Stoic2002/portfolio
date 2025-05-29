import React, { useState } from 'react'
import { HiBriefcase, HiStar, HiDesktopComputer, HiDeviceMobile, HiChevronLeft, HiChevronRight, HiPhotograph, HiCode, HiExternalLink, HiX, HiSparkles } from 'react-icons/hi'
import type { Project } from '../types'

interface ProjectsProps {
  projects: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<'All' | 'Web Development' | 'Mobile Development'>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({})

  const nextImage = (projectId: string, maxIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) >= maxIndex - 1 ? 0 : (prev[projectId] || 0) + 1
    }))
  }

  const prevImage = (projectId: string, maxIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) <= 0 ? maxIndex - 1 : (prev[projectId] || 0) - 1
    }))
  }

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'All': return <HiStar className="w-5 h-5" />
      case 'Web Development': return <HiDesktopComputer className="w-5 h-5" />
      case 'Mobile Development': return <HiDeviceMobile className="w-5 h-5" />
      default: return <HiStar className="w-5 h-5" />
    }
  }

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text flex items-center justify-center gap-3">
              <HiBriefcase className="text-5xl" style={{ color: 'var(--accent-primary)' }} />
              My Projects
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Showcase of projects I've built with passion and creativity
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
            <div className="flex flex-wrap gap-3">
              {(['All', 'Web Development', 'Mobile Development'] as const).map(category => (
                <button
                  key={category}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 transition-all duration-300 hover:transform hover:-translate-y-1 ${
                    filter === category 
                      ? 'text-white border-transparent' 
                      : 'border-gray-600 hover:border-blue-500'
                  }`}
                  style={{
                    backgroundColor: filter === category ? 'var(--accent-primary)' : 'var(--bg-card)',
                    color: filter === category ? 'white' : 'var(--text-secondary)',
                    borderColor: filter === category ? 'transparent' : 'var(--border-primary)'
                  }}
                  onClick={() => setFilter(category)}
                >
                  {getCategoryIcon(category)}
                  <span className="font-medium">{category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <HiBriefcase className="w-16 h-16 mx-auto mb-4 opacity-50" style={{ color: 'var(--text-muted)' }} />
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>No projects found</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {filter === 'All' 
                    ? "Start your journey by adding your first project!"
                    : `No ${filter} projects found. Try a different filter or add a new project.`
                  }
                </p>
              </div>
            ) : (
              filteredProjects.map(project => {
                const images = project.images || []
                const currentIndex = currentImageIndex[project.id] || 0
                
                return (
                  <div 
                    key={project.id} 
                    className="group rounded-2xl border card-hover overflow-hidden cursor-pointer" 
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-primary)'
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      {images.length > 0 ? (
                        <>
                          <img 
                            src={images[currentIndex]} 
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          
                          {/* Image Slider Controls */}
                          {images.length > 1 && (
                            <>
                              <button 
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/80 hover:bg-black/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg border-2 border-white/20"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  prevImage(project.id, images.length)
                                }}
                                title="Previous Image"
                              >
                                <HiChevronLeft className="w-5 h-5" />
                              </button>
                              <button 
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/80 hover:bg-black/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg border-2 border-white/20"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  nextImage(project.id, images.length)
                                }}
                                title="Next Image"
                              >
                                <HiChevronRight className="w-5 h-5" />
                              </button>
                              
                              {/* Image Counter */}
                              <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                                {currentIndex + 1} / {images.length}
                              </div>
                              
                              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                                {images.map((_, index) => (
                                  <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      setCurrentImageIndex(prev => ({
                                        ...prev,
                                        [project.id]: index
                                      }))
                                    }}
                                    title={`Image ${index + 1}`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                          <HiPhotograph className="w-12 h-12 mb-2 opacity-50" style={{ color: 'var(--text-muted)' }} />
                          <span className="text-sm opacity-75" style={{ color: 'var(--text-muted)' }}>No Image</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border" style={{
                          backgroundColor: 'var(--accent-primary)',
                          color: 'white',
                          borderColor: 'var(--accent-primary)'
                        }}>
                          {getCategoryIcon(project.category)}
                          <span>{project.category}</span>
                        </span>
                        <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                          {project.createdAt}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                        {project.name}
                      </h3>
                      <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                        {project.description.length > 100 
                          ? `${project.description.substring(0, 100)}...` 
                          : project.description
                        }
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-md border" style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            color: 'var(--text-secondary)',
                            borderColor: 'var(--border-primary)'
                          }}>
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded-md border" style={{
                            backgroundColor: 'var(--accent-primary)',
                            color: 'white',
                            borderColor: 'var(--accent-primary)'
                          }}>
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {project.repositoryLink && (
                        <a 
                          href={project.repositoryLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-sm font-medium transition-colors hover:text-blue-500"
                          style={{ color: 'var(--accent-primary)' }}
                        >
                          <HiCode className="w-4 h-4" />
                          <span>View Code</span>
                          <HiExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {/* Project Detail Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border" style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-primary)'
              }}>
                <div className="sticky top-0 flex items-center justify-between p-6 border-b" style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}>
                  <h3 className="text-2xl font-bold flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                    <HiSparkles className="text-3xl" style={{ color: 'var(--accent-primary)' }} />
                    {selectedProject.name}
                  </h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      borderColor: 'var(--border-primary)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <HiX className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6">
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="mb-6">
                      <div className="relative">
                        <img 
                          src={selectedProject.images[currentImageIndex[selectedProject.id] || 0]} 
                          alt={selectedProject.name}
                          className="w-full h-64 md:h-80 object-cover rounded-xl"
                        />
                        
                        {/* Navigation for multiple images */}
                        {selectedProject.images.length > 1 && (
                          <>
                            <button 
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border-2 border-white/20"
                              onClick={() => {
                                const currentIndex = currentImageIndex[selectedProject.id] || 0
                                const newIndex = currentIndex <= 0 ? selectedProject.images!.length - 1 : currentIndex - 1
                                setCurrentImageIndex(prev => ({
                                  ...prev,
                                  [selectedProject.id]: newIndex
                                }))
                              }}
                              title="Previous Image"
                            >
                              <HiChevronLeft className="w-6 h-6" />
                            </button>
                            
                            <button 
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/80 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border-2 border-white/20"
                              onClick={() => {
                                const currentIndex = currentImageIndex[selectedProject.id] || 0
                                const newIndex = currentIndex >= selectedProject.images!.length - 1 ? 0 : currentIndex + 1
                                setCurrentImageIndex(prev => ({
                                  ...prev,
                                  [selectedProject.id]: newIndex
                                }))
                              }}
                              title="Next Image"
                            >
                              <HiChevronRight className="w-6 h-6" />
                            </button>
                            
                            {/* Image Counter */}
                            <div className="absolute top-3 right-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {(currentImageIndex[selectedProject.id] || 0) + 1} / {selectedProject.images.length}
                            </div>
                          </>
                        )}
                      </div>
                      
                      {selectedProject.images.length > 1 && (
                        <div className="flex justify-center space-x-2 mt-4">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === (currentImageIndex[selectedProject.id] || 0) 
                                  ? 'scale-125 shadow-lg' 
                                  : 'opacity-50 hover:opacity-75'
                              }`}
                              style={{ backgroundColor: 'var(--accent-primary)' }}
                              onClick={() => setCurrentImageIndex(prev => ({
                                ...prev,
                                [selectedProject.id]: index
                              }))}
                              title={`Image ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium border" style={{
                        backgroundColor: 'var(--accent-primary)',
                        color: 'white',
                        borderColor: 'var(--accent-primary)'
                      }}>
                        {getCategoryIcon(selectedProject.category)}
                        <span>{selectedProject.category}</span>
                      </span>
                      <span className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
                        {selectedProject.createdAt}
                      </span>
                    </div>
                    
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {selectedProject.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                        <HiCode className="w-5 h-5" />
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 text-sm rounded-full border" style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            color: 'var(--text-secondary)',
                            borderColor: 'var(--border-primary)'
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.repositoryLink && (
                      <div className="pt-4">
                        <a 
                          href={selectedProject.repositoryLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
                          style={{
                            backgroundColor: 'var(--accent-primary)',
                            color: 'white'
                          }}
                        >
                          <HiCode className="w-5 h-5" />
                          <span>View Repository</span>
                          <HiExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects 