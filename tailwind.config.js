/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E1224',
        'accent-mint': '#6EE7B7',
        'accent-lavender': '#A78BFA',
        background: '#FAF9F6',
        surface: '#FFFFFF',
        'text-primary': '#0E1224',
        'text-secondary': '#6B7280',
        'text-muted': '#9CA3AF',
        border: '#D9DCE3',
        'border-strong': '#BFC4CF',
        'primary-hover': '#18203A',
        'accent-hover': '#52D9A1',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
