/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      white: "#ffffff",
      green: "#23D39D",
      darkGreen : "#1D6750",
      blue: "#46DAFF",
      darkBlue: "#0171DB",
      yellow: "#FFD64C",
      darkYellow: "#D9AF17",
      black:"#000000"
    },
    extend: {
      fontFamily: {
        
       },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/heroImage.png')",
      },
      boxShadowGreen: {
        card: "0px 35px 120px -15px #23D39D",
      },
      boxShadowBlue: {
        card: "0px 35px 120px -15px #46DAFF",
      },
      boxShadowYellow: {
        card: "0px 35px 120px -15px #FFD64C",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation : {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite' : 'loop-scroll 120s linear infinite',
      },      
    },
  },
  plugins: [],
};
