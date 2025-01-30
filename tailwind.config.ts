import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          dark: "#0A0B0D", // 背景色
          primary: "#8DA691", // 主要文本
          secondary: "#4A594E", // 副文本
          accent: "#1F402B", // 强调色
          button: "#BF877A", // 按钮
          buttonHover: "#8DA691", // 按钮 Hover 颜色
        },
      },
    },
  },
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "var(--background)",
  //       foreground: "var(--foreground)",
  //     },
  //   },
  // },
  plugins: [],
} satisfies Config;

