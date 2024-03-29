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
      screens:{
        desktop1 : '1200px',
        mobile:'360px',
      },
      
      colors:{
        primary: '#002045',
        secondary : '#E27838'
      }
    },
  },
  
  plugins: [],
}
