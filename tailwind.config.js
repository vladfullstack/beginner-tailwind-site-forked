const colors = require("tailwindcss/colors");

module.exports = {
  content: ["src/**/*.html"],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
      },
    },
  },
  variants: {},
  plugins: [],
};
