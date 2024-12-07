import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import type { Config } from "tailwindcss";

extend([mixPlugin]);

const generateDarkenColorFrom = (input: string, percentage= 0.07): string => 
  colord(input).darken(percentage).toHex();

const generateForegroundColorFrom = (input: string, percentage= 0.8): string =>
  colord(input).mix(colord(input).isDark() ? 'white' : 'black', percentage).toHex();

export const tailwindColors: {[key: string]: string} = {
  current: "currentColor",
    transparent: "transparent",
    white: "#F9F9F9",
    primary: "#73bdb7",
    "primary-content": "#FFFFFF",
    "primary-focus": generateDarkenColorFrom("#007BEC"),
    secondary: "#13274F",
    "secondary-content": "#FFFFFF",
    "secondary-focus": generateDarkenColorFrom("#13274F", 0.03),
    accent: "#1FB2A5",
    "accent-content": "#FFFFFF",
    "accent-focus": generateDarkenColorFrom("#1FB2A5"),
    grey: "#808080",
    "grey-content": "#D3D3D3",
    neutral: "#2a323c",
    "neutral-content": generateForegroundColorFrom("#FFFFFF"),
    "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
    "base-25": "#353d47",
    "base-50": "#2a323c",
    "base-75": "#20272e",
    "base-100": "#1d232a",
    "base-200": "#191e24",
    "base-300": "#15191e",
    "base-content": "#A6ADBB",
    error: "#f87272",
    "error-content": generateForegroundColorFrom("#f87272"),
    "error-focus": generateDarkenColorFrom("#f87272", 0.03),
    "gradient-first": "#702963",
    "gradient-second": "#301934",
    blue: "#4B9CD3",
    
}

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true
    },
    colors: tailwindColors,
    extend: {
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
export default config;

