import type { Project } from '../types'

// Mock projects data - stored locally in project files
export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce React App',
    description: 'A full-featured e-commerce application built with React, TypeScript, and modern UI components. Features include product catalog, shopping cart, user authentication, and payment integration.',
    category: 'Web Development',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    repositoryLink: 'https://github.com/Stoic2002/ecommerce-app',
    images: [
      '/images/projects/ecommerce-1.jpg',
      '/images/projects/ecommerce-2.jpg',
      '/images/projects/ecommerce-3.jpg'
    ],
    createdAt: '2024-01-15'
  },
//   {
//     id: '2', 
//     name: 'Flutter Mobile App',
//     description: 'Cross-platform mobile application developed with Flutter and Dart. Includes user authentication, real-time data synchronization, and beautiful Material Design UI.',
//     category: 'Mobile Development',
//     technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Provider'],
//     repositoryLink: 'https://github.com/Stoic2002/flutter-app',
//     images: [
//       '/images/projects/flutter-1.jpg',
//       '/images/projects/flutter-2.jpg'
//     ],
//     createdAt: '2024-02-20'
//   },
//   {
//     id: '3',
//     name: 'Next.js Portfolio Website', 
//     description: 'Modern portfolio website built with Next.js, featuring server-side rendering, SEO optimization, and responsive design. Includes blog functionality and contact forms.',
//     category: 'Web Development',
//     technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
//     repositoryLink: 'https://github.com/Stoic2002/nextjs-portfolio',
//     images: [
//       '/images/projects/nextjs-1.jpg',
//       '/images/projects/nextjs-2.jpg',
//       '/images/projects/nextjs-3.jpg',
//       '/images/projects/nextjs-4.jpg'
//     ],
//     createdAt: '2024-03-10'
//   }
]

// // Function to get projects from local data
export const getProjects = (): Project[] => {
  return [...mockProjects]
}

// // Function to add project to local data (for development)
// export const addProjectToMock = (project: Omit<Project, 'id'>): Project => {
//   const newProject: Project = {
//     ...project,
//     id: Date.now().toString(),
//     images: [] // Don't store images to avoid quota issues
//   }
//   mockProjects.push(newProject)
//   return newProject
// }

// // Function to update project in local data
// export const updateProjectInMock = (id: string, updatedProject: Omit<Project, 'id'>): boolean => {
//   const index = mockProjects.findIndex(p => p.id === id)
//   if (index !== -1) {
//     mockProjects[index] = { 
//       ...updatedProject, 
//       id,
//       images: [] // Don't store images to avoid quota issues
//     }
//     return true
//   }
//   return false
// }

// // Function to delete project from local data
// export const deleteProjectFromMock = (id: string): boolean => {
//   const index = mockProjects.findIndex(p => p.id === id)
//   if (index !== -1) {
//     mockProjects.splice(index, 1)
//     return true
//   }
//   return false
// } 