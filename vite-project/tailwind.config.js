/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '92': '92px',
      },
      width: {
        '550': '550px',
      },
      colors: {
        'light-blue': '#61DAFB',
      },
    },
  },
  plugins: [],
}


