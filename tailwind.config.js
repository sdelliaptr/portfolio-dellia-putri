/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          light: "#F6F7FC",
          card: "#FFFFFF",
          dark: "#0A0E1D",
          "dark-card": "#131933",
        },
        ink: {
          DEFAULT: "#1A2145",
          soft: "#4A5178",
          inverted: "#E7E9F7",
          "inverted-soft": "#9BA3CC",
        },
        periwinkle: {
          50: "#EEF1FE",
          100: "#DCE2FD",
          300: "#A9B7F8",
          400: "#8195F2",
          500: "#6C7FEA",
          600: "#5566D6",
        },
        lavender: {
          50: "#F4EFFE",
          100: "#E7DBFD",
          300: "#C9A9F8",
          400: "#B588F5",
          500: "#A06EEE",
          600: "#8B54DE",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(108, 127, 234, 0.25)",
        "soft-dark": "0 20px 60px -15px rgba(133, 108, 234, 0.35)",
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(135deg, #6C7FEA 0%, #A06EEE 100%)",
        "grad-glow": "radial-gradient(circle at 30% 20%, rgba(108,127,234,0.35), transparent 60%), radial-gradient(circle at 80% 80%, rgba(160,110,238,0.3), transparent 55%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-move": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-move": "gradient-move 8s ease infinite",
      },
    },
  },
  plugins: [],
}
