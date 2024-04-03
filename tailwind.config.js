/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'off-white': '#F0F0F0',
      'white': '#FFFFFF',
      'muted-black': '#222222',
      'primary': '#4441B3',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display: ['MuseoModerno'],
    },
    fontSize: {
      '2xl': '22px',
      '4xl': '40px',
      '7xl': '70px',
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}
