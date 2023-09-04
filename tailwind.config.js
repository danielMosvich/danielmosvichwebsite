/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //agregar gradient color
      backgroundImage: {
        gradient_black: "linear-gradient(148deg, #555454, #000000)",
        gradient_pink: "linear-gradient(148deg, #fda4af, #db2777);",
        gradient_green: "linear-gradient(148deg, #fda4af, #db2777);",
        gradient_blue: "linear-gradient(148deg, #fda4af, #db2777);",
        gradient_red: "linear-gradient(148deg, #fda4af, #db2777);",
        gradient_purple: "linear-gradient(148deg, #fda4af, #db2777);",
        gradient_orange: "linear-gradient(148deg, #fda4af, #db2777);",
        gradient_teal: "linear-gradient(148deg, #fda4af, #db2777);",
      },
      keyframes: {
        letter: {
          "0%": {
            transform: "scale(1,1.3)",
          },
          // "25%":{
          //   transform: "scale(1, 1.5)",
          // },
          // "75%": {
          //   transform: "scale(1)",
          // },
          // "75":{

          // },
          "70%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "letter-bounce": "letter 0.6s ease-in-out 1",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
