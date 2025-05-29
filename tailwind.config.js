/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Space Grotesk', 'system-ui', 'sans-serif'],
      'mono': ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
    },
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slideUp': 'slideUp 0.8s ease forwards',
      },
    },
  },
  plugins: [],
} 