/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "ip-",
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "min-One": " auto 1fr",
        "One-min": " 1fr auto ",
      },
      gridTemplateColumns: {
        "min-One": " auto 1fr",
        "One-min": " 1fr auto ",
      },
    },
  },
};
