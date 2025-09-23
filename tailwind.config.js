/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        holidayGreen: "#124712",
        holidayRed:   "#E3170C",
        holidayGold:  "#F0950A",
        holidayBeige: "#F3F7DE",
        softCream:    "#f9f5f6", // ✅ added soft background color
      },
      fontFamily: {
        display: ['"Fredoka"', "sans-serif"],
        holiday: ['"Mountains of Christmas"', "cursive"], // 🎄 Festive font
      },
      maxWidth: {
        content: "90rem", // 💡 Wider container for large screens (1440px)
      },
    },
  },
  plugins: [],
};
