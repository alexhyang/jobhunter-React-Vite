/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.alert': {
          padding: '.75rem 1.25rem',
          borderRadius: '.25rem',
          border: '1px solid transparent',
        },
        '.alert-success': {
          color: '#155724',
          backgroundColor: '#d4edda',
          borderColor: '#c3e6cb',
        },
        '.alert-danger': {
          color: '#721c24',
          backgroundColor: '#f8d7da',
          borderColor: '#f5c5cb',
        },
      });
    }),
  ],
};
