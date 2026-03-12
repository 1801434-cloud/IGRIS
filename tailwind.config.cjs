module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#E8A020",
        "gold-light": "#F5C842",
        "teal-deep": "#0A2520",
        "teal-mid": "#0D3530",
        "teal-bright": "#1A5C50",
        "teal-accent": "#22877A",
        cream: "#F5F0E8",
        "off-white": "#EDE8DF",
        charcoal: "#1A1A18",
        steel: "#2C2C2A"
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
      keyframes: {
        fadeUp: { to: { opacity: "1", transform: "translateY(0)" } },
        gridShift: { "0%": { transform: "translateY(0)" }, "100%": { transform: "translateY(60px)" } },
        scanH: {
          "0%": { opacity: "0", transform: "scaleX(0)", transformOrigin: "left" },
          "50%": { opacity: "1", transform: "scaleX(1)" },
          "100%": { opacity: "0", transform: "scaleX(0)", transformOrigin: "right" }
        },
        scrollPulse: { "0%,100%": { opacity: "1", transform: "scaleY(1)" }, "50%": { opacity: "0.4", transform: "scaleY(0.6)" } }
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
        gridShift: "gridShift 20s linear infinite",
        scanH: "scanH 4s ease-in-out infinite",
        scrollPulse: "scrollPulse 1.5s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};