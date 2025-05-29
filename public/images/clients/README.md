# Client Logos

Place client/company logos here with the following naming convention:

## Current Structure:
```
public/images/clients/
├── pln-logo.png           # PLN logo
├── bawaslu-logo.png       # Bawaslu logo  
├── kick-avenue-logo.png   # Kick Avenue logo
└── dprd-jateng-logo.png   # DPRD Jateng logo
```

## Logo Guidelines:
- **Format**: PNG, SVG (preferred for scalability)
- **Size**: 200x200px or similar square ratio
- **Background**: Transparent preferred
- **Quality**: High resolution for crisp display
- **Colors**: Original brand colors

## Adding New Client Logos:
1. Place logo file in `public/images/clients/`
2. Update `src/components/Clients.tsx` clients array:

```typescript
{
  id: '5',
  name: 'New Client',
  type: 'Client Type',
  description: 'Client description...',
  logo: '/images/clients/new-client-logo.png'
}
```

## Logo Display:
- Size: 48x48px in component (w-12 h-12)
- Container: 80x80px rounded circle (w-20 h-20)
- Fallback: HiOfficeBuilding icon if logo fails to load
- Hover effect: Scale 110% on hover

## Brand Guidelines:
- Respect client brand guidelines
- Use official logos when possible
- Maintain aspect ratio
- Test display in both light/dark themes 