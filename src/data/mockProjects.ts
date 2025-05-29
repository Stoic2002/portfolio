import type { Project } from '../types'

// Mock projects data - stored locally in project files
export const mockProjects: Project[] = [
    {
        id: '1',
        name: 'Mini Spotify',
        description: 'Sebuah aplikasi streaming musik yang dibangun dengan Flutter untuk frontend mobile dan Laravel sebagai backend API. Aplikasi ini menyediakan fitur-fitur seperti pemutar musik, playlist, pencarian lagu, manajemen favorit, dan sistem autentikasi pengguna. Database MySQL digunakan untuk menyimpan data pengguna, metadata lagu, dan playlist.',
        category: 'Mobile Development',
        technologies: ['Flutter', 'Dart', 'Laravel', 'PHP', 'MySQL', 'REST API'],
        repositoryLink: 'https://github.com/Stoic2002/flutter_mini_spotify_clone',
        images: [
          '/images/projects/mini-spotify/mini-spotify-1.png',
          '/images/projects/mini-spotify/mini-spotify-2.png',
          '/images/projects/mini-spotify/mini-spotify-3.png',
          '/images/projects/mini-spotify/mini-spotify-4.png'
        ],
        createdAt: '2024-11-15'
    },
    {
        id: '2',
        name: 'Veather',
        description: 'Sebuah aplikasi cuaca yang dibangun dengan Flutter yang menyediakan informasi cuaca real-time dan ramalan cuaca. Aplikasi ini mengintegrasikan third-party API dari OpenWeatherMap untuk mendapatkan data cuaca akurat. Fitur-fitur yang tersedia meliputi pencarian kota, tampilan cuaca saat ini, ramalan 5 hari ke depan, informasi detail seperti kelembaban dan kecepatan angin, serta interface yang user-friendly.',
        category: 'Mobile Development',
        technologies: ['Flutter', 'Dart', 'OpenWeatherMap API', 'HTTP', 'JSON', 'Geolocation'],
        repositoryLink: 'https://github.com/Stoic2002/veather',
        images: [
          '/images/projects/veather/veather-1.png',
          '/images/projects/veather/veather-2.png',
          '/images/projects/veather/veather-3.png',
        ],
        createdAt: '2024-11-15'
      },
      {
        id: '3',
        name: 'e-cloth',
        description: 'Sebuah aplikasi marketplace fashion yang dibangun dengan Flutter yang menyediakan platform jual beli pakaian dan aksesori fashion. Aplikasi ini menawarkan pengalaman berbelanja yang modern dengan fitur-fitur seperti katalog produk yang lengkap, sistem pencarian dan filter, keranjang belanja, wishlist, sistem rating dan review, serta proses checkout yang mudah. Interface yang user-friendly memungkinkan pengguna untuk menjelajahi berbagai kategori fashion dengan mudah.',
        category: 'Mobile Development',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Provider', 'HTTP', 'JSON'],
        repositoryLink: 'https://github.com/Stoic2002/e-Cloth',
        images: [
          '/images/projects/e-cloth/e-cloth-1.png',
          '/images/projects/e-cloth/e-cloth-2.png',
          '/images/projects/e-cloth/e-cloth-3.png',
          '/images/projects/e-cloth/e-cloth-4.png',
          '/images/projects/e-cloth/e-cloth-5.png',
          '/images/projects/e-cloth/e-cloth-6.png',
          '/images/projects/e-cloth/e-cloth-7.png',
          '/images/projects/e-cloth/e-cloth-8.png',
          '/images/projects/e-cloth/e-cloth-9.png',
          '/images/projects/e-cloth/e-cloth-10.png',
          '/images/projects/e-cloth/e-cloth-11.png',
          '/images/projects/e-cloth/e-cloth-12.png'
        ],
        createdAt: '2024-11-15'
      },
      {
        id: '4',
        name: 'Vallet',
        description: 'Sebuah aplikasi wallet Web3 sederhana yang dibangun dengan Flutter dan terintegrasi dengan Solana RPC API. Aplikasi ini memungkinkan pengguna untuk mengelola aset kripto mereka di blockchain Solana dengan fitur-fitur seperti tampilan balance real-time, daftar token/coin yang dimiliki, serta interface yang user-friendly untuk navigasi wallet. Fitur transaksi masih dalam tahap pengembangan untuk memberikan pengalaman Web3 yang lebih lengkap.',
        category: 'Mobile Development',
        technologies: ['Flutter', 'Dart', 'Solana RPC API', 'Web3', 'Blockchain', 'Cryptocurrency'],
        repositoryLink: 'https://github.com/Stoic2002/vallet',
        images: [
          '/images/projects/vallet/vallet-1.png'
        ],
        createdAt: '2024-11-15'
      }
    
]

// Function to get projects from local data
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