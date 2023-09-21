/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        w1110: "1110px",
      },
      height: {
        h768: "768px",
      },
      borderWidth: {
        px1: "1px",
      },
      dropShadow: {
        customText: "-4px 4px 0 black",
      },
      borderRadius: {
        half: "50%",
      },
    },
  },
  plugins: [],
};
