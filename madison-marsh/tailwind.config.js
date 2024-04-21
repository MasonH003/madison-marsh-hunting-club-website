/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  themes: {
    extend: {
      color: {
        'MMHCBrown' : "#362706",
        'MMHCGreen' : "$464E2E"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#212121",
          
          "secondary": "#464E2E",
                   
          "accent": "#ACB992",
                   
          "neutral": "#E9E5D6",
                   
          "base-100": "#362706",
                   
          "info": "#00ffff",
                   
          "success": "#00ff00",
                   
          "warning": "facc15",
                   
          "error": "#E0392D",
         
        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}