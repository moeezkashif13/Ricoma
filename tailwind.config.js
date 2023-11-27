/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme:{
    extend:{
      padding:{
        mobile:'29px',
      },
      backgroundColor:{
        primary: '#002045',
      }
    },
  },
  
  plugins: [],
}
