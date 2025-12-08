module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelLavender: "#E7E1F7",
        pastelPink: "#F7D8E4",
        pastelBlue: "#CDE9FF",
        pastelMint: "#DDEFEA",
        softGray: "#F3F1F5",
        primary: "#7C3AED", // purple-ish
        accent: "#FF6FB5",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.06)",
        glow: "0 6px 18px rgba(124,58,237,0.12)",
      },
      borderRadius: {
        xlcard: "18px",
      },
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      display: ["Poppins", "Inter", "sans-serif"],
    },
  },
  plugins: [],
};
