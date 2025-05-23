/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#fff0ee',
            100: '#ffddd9',
            200: '#ffbbb3',
            300: '#ff8f82',
            400: '#ff5a47',
            500: '#ff2b15',
            600: '#ed1c05',
            700: '#c51601',
            800: '#9d1405',
            900: '#7e150a',
            950: '#450700',
          },
          secondary: {
            50: '#fef5e7',
            100: '#fdeacc',
            200: '#fbd599',
            300: '#f9ba66',
            400: '#f5963a',
            500: '#f27712',
            600: '#df5e0b',
            700: '#b8450c',
            800: '#933812',
            900: '#773112',
            950: '#411607',
          },
          accent: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16',
          },
          neutral: {
            50: '#f8f9fa',
            100: '#f1f3f5',
            200: '#e9ecef',
            300: '#dee2e6',
            400: '#ced4da',
            500: '#adb5bd',
            600: '#868e96',
            700: '#495057',
            800: '#343a40',
            900: '#212529',
            950: '#0d0f10',
          },
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        boxShadow: {
          'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
        animation: {
          'spin-slow': 'spin 20s linear infinite',
        },
      },
    },
    plugins: [],
  };
  
