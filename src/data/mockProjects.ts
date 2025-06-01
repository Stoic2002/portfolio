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
      },
      {
        id: '5',
        name: 'CogniHash',
        description: 'Sebuah platform Web3 yang dibangun dengan React yang mengintegrasikan Artificial Intelligence untuk menganalisis smart contract di blockchain Solana. Aplikasi ini memungkinkan pengguna untuk mendapatkan insight mendalam tentang smart contract melalui analisis AI yang komprehensif, kemudian melakukan transaksi dengan token/coin yang telah dianalisis. Platform ini menyediakan dashboard analitik yang user-friendly dan sistem trading yang terintegrasi khusus untuk ekosistem Solana.',
        category: 'Web Development',
        technologies: ['React', 'TypeScript', 'Solana Web3.js', 'AI/ML', 'Smart Contract Analysis', 'Blockchain', 'Cryptocurrency'],
        repositoryLink: '', // Isi dengan link GitHub repository Anda
        images: [
          '/images/projects/cognihash/cognihash-1.png',
          '/images/projects/cognihash/cognihash-2.png',
          '/images/projects/cognihash/cognihash-3.png',
          '/images/projects/cognihash/cognihash-4.png',
          '/images/projects/cognihash/cognihash-5.png',
          '/images/projects/cognihash/cognihash-6.png',

        ],
        createdAt: '2024-12-15'
      },
      {
        id: '6',
        name: 'Notuline',
        description: 'Sebuah aplikasi mobile yang dibangun dengan Flutter untuk merekam dan menganalisis meeting secara otomatis. Aplikasi ini menggunakan teknologi AI untuk mengkonversi rekaman audio meeting menjadi transkrip yang kemudian dianalisis untuk menghasilkan ringkasan meeting yang komprehensif. Fitur-fitur utama meliputi perekaman audio berkualitas tinggi, speech-to-text conversion, AI-powered summarization, manajemen catatan meeting, dan export hasil dalam berbagai format. Sangat cocok untuk profesional yang ingin mengoptimalkan produktivitas meeting mereka.',
        category: 'Mobile Development',
        technologies: ['Flutter', 'Dart', 'AI/ML', 'Speech-to-Text', 'Audio Recording', 'Natural Language Processing'],
        repositoryLink: '', // Isi dengan link GitHub repository Anda
        images: [
          '/images/projects/notuline/notuline-1.png',
          '/images/projects/notuline/notuline-2.png',
          '/images/projects/notuline/notuline-3.png',
          '/images/projects/notuline/notuline-4.png',
          '/images/projects/notuline/notuline-5.png',
        ],
        createdAt: '2024-10-15'
      },
      {
        id: '7',
        name: 'PLN Optical Probe',
        description: 'Sebuah aplikasi mobile yang dibangun dengan Flutter untuk membaca meteran listrik PLN menggunakan teknologi optical probe dengan sensor infrared. Aplikasi ini memungkinkan petugas atau pengguna untuk melakukan pembacaan meteran listrik secara otomatis dan akurat melalui koneksi USB ke perangkat optical probe. Fitur-fitur utama meliputi koneksi hardware via USB, pembacaan data meteran real-time, validasi dan verifikasi data, penyimpanan riwayat pembacaan, serta export data dalam format yang sesuai dengan standar PLN.',
        category: 'Mobile Development',
        technologies: ['Flutter', 'Dart', 'USB Communication', 'Infrared Sensor', 'Hardware Integration', 'Serial Communication', 'Data Processing'],
        repositoryLink: '', // Isi dengan link GitHub repository Anda
        images: [
          '/images/projects/pln-optical-probe/pln-optical-probe-1.jpeg',
          '/images/projects/pln-optical-probe/pln-optical-probe-2.jpeg',
          '/images/projects/pln-optical-probe/pln-optical-probe-3.jpeg',
          '/images/projects/pln-optical-probe/pln-optical-probe-4.jpeg',
          '/images/projects/pln-optical-probe/pln-optical-probe-5.jpeg',
          '/images/projects/pln-optical-probe/pln-optical-probe-6.jpeg'
        ],
        createdAt: '2024-09-15'
      },
      {
        id: '8',
        name: 'Kick Avenue',
        description: 'Sebuah platform marketplace web yang dibangun dengan React yang khusus menyediakan produk-produk branded berkualitas tinggi seperti sepatu sneakers, fashion, dan aksesoris premium. Aplikasi ini menawarkan pengalaman berbelanja yang eksklusif dengan fitur-fitur seperti katalog produk branded terkurasi, sistem autentikasi produk, pencarian dan filter canggih, sistem bid dan buy now, profil seller terverifikasi, serta sistem review dan rating. Platform ini memberikan jaminan keaslian produk dan pengalaman belanja yang aman untuk pecinta produk branded.',
        category: 'Web Development',
        technologies: ['React', 'TypeScript', 'Node.js', 'Payment Gateway'],
        repositoryLink: '', // Isi dengan link GitHub repository Anda
        images: [
          '/images/projects/kick-avenue/kick-avenue-1.png',
          '/images/projects/kick-avenue/kick-avenue-2.png',
          '/images/projects/kick-avenue/kick-avenue-3.png'
        ],
        createdAt: '2024-08-15'
      },
      {
        id: '9',
        name: 'E-Pengawasan DPRD Jateng',
        description: 'Sebuah platform digital yang dibangun dengan React untuk mendukung fungsi pengawasan DPRD Jawa Tengah. Aplikasi ini mengintegrasikan teknologi Artificial Intelligence untuk mengklasifikasi dan menganalisis dokumen-dokumen pengawasan secara otomatis. Fitur utama meliputi AI-powered document classification, web scraping untuk monitoring isu-isu publik, sistem analisis sentimen, dashboard monitoring real-time, manajemen dokumen digital, serta reporting dan analytics yang komprehensif. Platform ini membantu anggota DPRD dalam melakukan pengawasan yang lebih efektif dan berbasis data terhadap pelaksanaan kebijakan pemerintah daerah.',
        category: 'Web Development',
        technologies: ['React', 'TypeScript', 'AI/ML', 'Document Classification', 'Web Scraping', 'Natural Language Processing', 'Data Analytics', 'Node.js'],
        repositoryLink: '', // Isi dengan link GitHub repository Anda
        images: [
          '/images/projects/e-pengawasan/e-pengawasan-1.png',
          '/images/projects/e-pengawasan/e-pengawasan-2.png',
          '/images/projects/e-pengawasan/e-pengawasan-3.png'
        ],
        createdAt: '2024-07-15'
      },
      {
        id: '10',
        name: 'Kutim',
        description: 'Kutim adalah aplikasi manajemen proyek yang dibangun menggunakan Flutter untuk membantu pengawasan dan pengelolaan proyek secara efisien. Aplikasi ini dirancang untuk memantau progres proyek secara real-time, mengatur timeline pekerjaan, mengelola tim, serta mendokumentasikan aktivitas harian proyek. Fitur utama termasuk tracking task, update status proyek, pengingat deadline, dashboard interaktif, serta notifikasi otomatis untuk memastikan setiap tahapan proyek berjalan sesuai rencana. Kutim mendukung pengambilan keputusan berbasis data dan mempermudah kolaborasi antar tim proyek di lapangan maupun secara remote.',
        category: 'Mobile Development',
        technologies: ['Flutter', 'Dart', 'REST API', 'Real-time Updates', 'Project Tracking'],
        repositoryLink: '', // Isi dengan link GitHub repository Anda
        images: [
          '/images/projects/kutim/kutim-1.png',
          '/images/projects/kutim/kutim-2.png',
          '/images/projects/kutim/kutim-3.png',
          '/images/projects/kutim/kutim-4.png',
          '/images/projects/kutim/kutim-5.png',
        ],
        createdAt: '2024-08-10'
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