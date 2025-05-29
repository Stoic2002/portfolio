# Project Images

Place your project screenshots here with the following naming convention:

## File Structure:
```
public/images/projects/
├── ecommerce-1.jpg       # E-Commerce React App - Screenshot 1
├── ecommerce-2.jpg       # E-Commerce React App - Screenshot 2  
├── ecommerce-3.jpg       # E-Commerce React App - Screenshot 3
├── flutter-1.jpg         # Flutter Mobile App - Screenshot 1
├── flutter-2.jpg         # Flutter Mobile App - Screenshot 2
├── nextjs-1.jpg          # Next.js Portfolio Website - Screenshot 1
├── nextjs-2.jpg          # Next.js Portfolio Website - Screenshot 2
├── nextjs-3.jpg          # Next.js Portfolio Website - Screenshot 3
└── nextjs-4.jpg          # Next.js Portfolio Website - Screenshot 4
```

## Image Guidelines:
- **Format**: JPG, PNG, WebP
- **Size**: Recommended 1200x800px or similar aspect ratio
- **Quality**: High quality for best display
- **Naming**: descriptive-name-number.jpg

## Adding New Projects:
1. Add images to this folder
2. Update `src/data/mockProjects.ts` with image paths
3. Use relative paths starting with `/images/projects/`

Example:
```typescript
images: [
  '/images/projects/my-project-1.jpg',
  '/images/projects/my-project-2.jpg'
]
``` 