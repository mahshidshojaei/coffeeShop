/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, 
      padding: "1rem", 
      screens: {
        sm: "100%",   
        md: "100%",   
        lg: "1024px",
        xl: "1280px", 
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [],
};
