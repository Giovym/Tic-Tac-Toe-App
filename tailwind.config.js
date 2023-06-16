/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        "light-blue": "#31C3BD",
        "lighter-blue": "#65E9E4",
        "light-yellow": "#F2B137",
        "lighter-yellow": "#FFC860",
        "dark-navy": "#1A2A33",
        "semi-dark-navy": "#1F3641",
        silver: "#A8BFC9",
        "light-silver": "#DBE8ED",
      },
      spacing: {
        13: "3.25rem",
        18: "4.5rem",
        30: "7.5rem",
        35: "8.75rem",
        107: "26.75rem",
        115: "28.75rem",
        118: "29.5rem",
        123: "30.75rem",
        129: "32.25rem",
        156: "39rem",
      },
      dropShadow: {
        black: "0 8px 0 rgba(0, 0, 0, 0.25)",
        yellow: "0 8px 0 rgba(204, 139, 19, 1)",
        "yellow-smaller": "0 4px 0 rgba(204, 139, 19, 1)",
        blue: "0 8px 0 rgba(17, 140, 135, 1)",
        silver: "0 4px 0 rgba(107, 137, 151, 1)",
      },
      scale: {
        25: "0.25",
        30: "0.30",
        70: "0.70",
      },
    },
  },
  plugins: [],
};
