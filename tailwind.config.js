/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    backgroundPosition: {
        'center-right': 'center right',
        'center-left': 'center left',
        'right-top': 'right top',
        right: 'right',
        'left': 'left',
        'top': 'top',
        center: 'center',
        'bottom-left': 'bottom left',
        'left-top': 'left top'
      },
    extend: {
      colors: {
        colorActive: 'rgba(241, 117, 34, 1)',
      },
      fontFamily: {
        'sans': ['"Poppins"'],
      },
    },
    container: {
      padding: {
        padding: '0 15px',
      },
      screens: {
        sm: '360px',
        md: '768px',
        lg: '1024px',
        xl: '1310px',
        '2xl': '1310px',
      }
    },
    fontFamily: {
      'body': ['"Poppins"'],
    }
  },
  plugins: [],
}

