/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        lightHover: '#f3f4f6',
        darkHover: '#1f2937',
        darkTheme: '#111827',
        },
        fontFamily: {
          'outfit': ['Outfit', 'sans-serif'],
          'ovo': ['Ovo', 'serif'],
      },
        boxShadow: {
          'black' : '4px 4px 0 #000000',
          'white' : '4px 4px 0 #ffffff',
        },
        gridTemplateColumns: {
          'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
        }

    },
  },
  plugins: [
    require("@midudev/tailwind-animations")
  ],
}
