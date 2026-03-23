export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        greenblack: {
          primary: "#22c55e",
          secondary: "#16a34a",
          accent: "#4ade80",
          neutral: "#020617",
          "base-100": "#020617",
          success: "#22c55e",
          error: "#ef4444",
        },
      },
    ],
  },
};
