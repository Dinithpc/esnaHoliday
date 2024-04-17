/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        dimgray: "#626262",
        gray: "#828282",
        whitesmoke: "#f6f6f6",
        gainsboro: "#e5e5e5",
        darkslategray: {
          "100": "#333",
          "200": "rgba(51, 51, 51, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "playfair-display": "'Playfair Display'",
        poppins: "Poppins",
      },
    },
    fontSize: {
      "2xs": "11px",
      smi: "13px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      base: "16px",
      "25xl": "44px",
      "16xl": "35px",
      "7xl": "26px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
