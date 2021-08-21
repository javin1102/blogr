module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "ui-sans-serif"],
      overpass: ["Overpass", "ui-sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        header:
          "url('/images/bg-pattern-circles.svg'),linear-gradient(to right bottom, #2c2d3f,#3f4164)",
        //"linear-gradient(to bottom, rgba('#ff8f70',1), rgba('#ff3d54',1)), url('/images/bg-pattern-intro.svg')"
      }),
      backgroundPosition: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-hamburgers")],
};
