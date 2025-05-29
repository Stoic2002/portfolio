export interface Project {
  id: string
  name: string
  description: string
  category: 'Web Development' | 'Mobile Development'
  technologies: string[]
  repositoryLink?: string
  images?: string[]
  createdAt: string
}

export interface Skill {
  name: string
  level: number
  icon: string
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Tools' | 'Database'
}

export interface ContactForm {
  name: string
  email: string
  message: string
} 