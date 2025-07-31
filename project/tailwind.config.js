/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Odoo's exact color palette
        odoo: {
          primary: '#714B67',    // Main Odoo purple
          secondary: '#875A7B',  // Secondary purple
          accent: '#A24689',     // Accent purple
          dark: '#2F1B69',       // Dark purple
          light: '#F8F4F7',      // Light background
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
          }
        },
        // Success, warning, error colors matching Odoo
        success: '#00A04A',
        warning: '#F57C00',
        error: '#D32F2F',
        info: '#1976D2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'odoo': '0 2px 8px rgba(113, 75, 103, 0.1)',
        'odoo-lg': '0 4px 16px rgba(113, 75, 103, 0.15)',
        'odoo-xl': '0 8px 32px rgba(113, 75, 103, 0.2)',
      },
      backgroundImage: {
        'odoo-gradient': 'linear-gradient(135deg, #714B67 0%, #875A7B 100%)',
        'odoo-gradient-light': 'linear-gradient(135deg, #F8F4F7 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
};