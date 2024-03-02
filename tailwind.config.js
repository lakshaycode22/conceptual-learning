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
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }      
    },
  },
  plugins: [],
};
