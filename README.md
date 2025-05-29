# Portfolio React + TypeScript

Modern portfolio website built with React, TypeScript, and Tailwind CSS.

## 🔧 Development vs Production Mode

### Development Mode
- **Features**: Full CRUD operations (Add, Edit, Delete projects)
- **Visual**: Shows development indicator in top-right corner
- **When**: `npm run dev` or `VITE_MODE=development`

### Production Mode  
- **Features**: Read-only mode (View projects only)
- **Visual**: No CRUD buttons, clean interface for visitors
- **When**: `npm run build` or `VITE_MODE=production`

## 📸 Project Storage

Projects are stored as **mock data** in local project files:

### How it works:
1. Projects stored in `src/data/mockProjects.ts`
2. Images stored in `public/images/projects/` folder
3. Images referenced by path in mock data
4. No external storage or database required

### File Structure:
```
src/data/mockProjects.ts         # Project data
public/images/projects/          # Project screenshots
├── ecommerce-1.jpg             
├── flutter-1.jpg               
└── nextjs-1.jpg                
```

### Adding New Projects:
1. **Add Images**: Place screenshots in `public/images/projects/`
2. **Update Data**: Add project to `src/data/mockProjects.ts`
3. **Reference Images**: Use paths like `/images/projects/image.jpg`

### Benefits:
- **No Quota Limits**: No localStorage restrictions
- **Fast Performance**: Direct file serving
- **Simple Setup**: No backend required
- **Version Control**: Images tracked in git

### Example Project:
```typescript
{
  id: '4',
  name: 'My New Project',
  description: 'Project description...',
  category: 'Web Development',
  technologies: ['React', 'TypeScript'],
  repositoryLink: 'https://github.com/user/repo',
  images: [
    '/images/projects/my-project-1.jpg',
    '/images/projects/my-project-2.jpg'
  ],
  createdAt: '2024-12-01'
}
```

## 🚀 Commands

```bash
# Development with CRUD features
npm run dev

# Production build (read-only)
npm run build
npm run preview

# Linting
npm run lint
```

## 🛠 Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Icons**: React Icons (Heroicons)
- **Storage**: LocalStorage (base64 images)
- **Build**: Vite

## 📱 Features

- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Dark/Light Theme**: Persistent theme switching
- ✅ **Mock Data Projects**: Static project showcase
- ✅ **Local Image Storage**: Images served from public folder
- ✅ **Enhanced Image Slider**: 
  - Prev/Next navigation buttons with icons
  - Image counter (1/3, 2/3, etc.)
  - Dot indicators for quick navigation
  - Hover effects and smooth transitions
- ✅ **Image Lightbox**: 
  - Click images to view full-size
  - Keyboard navigation (ESC, ← →)
  - Thumbnail navigation bar
  - Smooth zoom transitions
- ✅ **Click-to-View**: Project cards open detail modal
- ✅ **Skills Filter**: Filter by technology categories
- ✅ **Contact Form**: Form validation and submission

## 🎯 Project Card Interactions

### Production Mode (Visitors):
- **Click card** → Opens detail modal
- **Image slider** → Navigate through project images
- **Repository link** → Opens GitHub/code repository

### Development Mode (You):
- **Click card** → Opens detail modal  
- **Hover actions** → Edit/Delete buttons
- **Add Project** → Full form with image upload

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation with theme toggle
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # Personal info
│   ├── Skills.tsx      # Tech skills with filtering
│   ├── Projects.tsx    # Project showcase (CRUD)
│   └── Contact.tsx     # Contact form
├── types.ts            # TypeScript interfaces
├── App.tsx             # Main app with mode detection
└── App.css             # CSS variables + Tailwind
```

## 🎨 Design System

### Color Palette
- **Background Primary**: `#0f172a` (Slate 900)
- **Background Secondary**: `#1e293b` (Slate 800)
- **Text Primary**: `#f8fafc` (Slate 50)
- **Accent Primary**: `#6366f1` (Indigo 500)
- **Gradient**: Indigo → Purple → Cyan

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700

## 🔧 Customization

### Personal Information
Update the personal information in the components:

1. **Hero.tsx** - Name, title, description
2. **About.tsx** - Personal details and contact info
3. **Skills.tsx** - Update the skills array with your technologies
4. **Contact.tsx** - Contact information

### Skills Configuration
Edit the skills array in `src/components/Skills.tsx`:

```typescript
const skills: Skill[] = [
  {
    name: 'React',
    level: 90,
    icon: 'fab fa-react',
    category: 'Frontend'
  },
  // Add more skills...
]
```

### CV Download
1. Create your CV in PDF format
2. Name it `cv-arul-karim.pdf`
3. Place it in the `public` folder
4. The download button will work automatically

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## 🌟 Features Deep Dive

### Project Management
- Add new projects with detailed information
- Edit existing projects
- Delete projects
- Filter by category (Web/Mobile Development)
- Image upload support
- Technology tagging system

### Skills Section
- Interactive progress bars
- Skill level indicators (Expert/Intermediate/Beginner)
- Category-based filtering
- Animated progress bars

### Contact Form
- Form validation
- Success/error states
- Email format validation
- Required field validation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`