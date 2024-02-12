/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      primary: {
        100: "#C4B9AB",
        200: "#B3A594",
        300: "#a2917c",
        400: "#8F7D66",
        500: "#776855",
        600: "#5F5344",
        700: "#483F33",
        800: "#302A22",
        900: "#181511",
      },
      secondary: {
        100: "#FFEFD7",
        200: "#FEE0AE",
        300: "#FED085",
        400: "#FEC05D",
        500: "#FEAE2B",
        600: "#FEA10B",
        700: "#DF8A01",
        800: "#B77101",
        900: "#8E5801",
      },
      tertiary: {
        100: "#FFFFFF",
        200: "#EBEBEB",
        300: "#D6D6D6",
        400: "#C2C2C2",
        500: "#ADADAD",
        600: "#999999",
        700: "#858585",
        800: "#707070",
        900: "#5C5C5C",
      },
      // primary: {
      //   900: "#000234",
      // },
      // secondary: {
      //   400: "#FD9235",
      //   500: "#FD7702",
      // },
      // primary: {
      //   900: "#103059",
      // },
      // secondary: {
      //   400: "#F6C451",
      //   500: "#F4B626",
      // },
      // primary: {
      //   900: "#000000",
      // },
      // secondary: {
      //   400: "#FFFFFF",
      //   500: "#FFFFFF",
      // },
    },
    extend: {
      boxShadow: {
        card: "0px 35px 120px -15px #302A22",
      },
    },
  },
  plugins: [],
};
