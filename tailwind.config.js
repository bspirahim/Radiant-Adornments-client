/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#41d8bc",
        
"secondary": "#e08ddd",
        
"accent": "#94ad16",
        
"neutral": "#22222a",
        
"base-100": "#dee6ed",
        
"info": "#64cded",
        
"success": "#d7dd11",
        
"warning": "#e78823",
        
"error": "#ef3a1a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

