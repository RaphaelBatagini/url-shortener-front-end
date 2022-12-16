/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light': '#eaeaea',
      'white': '#ffffff',
      'dark': '#000000',
      'primary': '#3f2ae5',
      'secondary': '#df228b',
      'info': '#f2bac7',
      'success': '#18b16a',
      'warning': '#e5cf16',
      'danger': '#f52409',
    },
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(light|white|dark|primary|secondary|info|success|warning|danger)/,
      variants: ['hover']
    },
    {
      pattern: /my-(8|16|24)/,
    },
    {
      pattern: /pb-(8|16|24)/,
    },
    {
      pattern: /text-(left|center|right)/,
    },
  ]
}
