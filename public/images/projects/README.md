# Project Images

Place your project screenshots here with the following naming convention:

## Current Structure:
```
public/images/projects/
└── mini-spotify/
    └── mini-spotify-1.png    # Mini Spotify - Screenshot 1
```

## Adding More Images:
To add more screenshots for Mini Spotify:
1. Place images in `public/images/projects/mini-spotify/`
2. Update `src/data/mockProjects.ts` images array:

```typescript
images: [
  '/images/projects/mini-spotify/mini-spotify-1.png',
  '/images/projects/mini-spotify/mini-spotify-2.png',
  '/images/projects/mini-spotify/mini-spotify-3.png'
]
```

## Image Guidelines:
- **Format**: JPG, PNG, WebP
- **Size**: Recommended 1200x800px or similar aspect ratio
- **Quality**: High quality for best display
- **Naming**: project-name-number.extension

## Adding New Projects:
1. Create folder: `public/images/projects/new-project-name/`
2. Add images to that folder
3. Add project data to `src/data/mockProjects.ts`
4. Reference images with paths like `/images/projects/new-project-name/image.jpg`

## Lightbox Feature:
- Click any image in project detail modal to view full-size
- Navigate with arrow keys or click buttons
- ESC to close lightbox
- Thumbnail navigation at bottom 