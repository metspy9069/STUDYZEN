import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
  colors: {
    primary: "#5B7CFA",
    background: "#F5F7FB",
    card: "#FFFFFF",
    textMain: "#111827",
    textSub: "#6B7280",
  },
  spacing: {
    "18": "4.5rem",
  },
  borderRadius: {
    xl: "16px",
    "2xl": "24px",
  },
  boxShadow: {
    soft: "0 10px 25px rgba(0,0,0,0.05)",
  }
}
  },
  plugins: [],
} satisfies Config;