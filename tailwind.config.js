/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: "var(--font-josefin)", // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
        mulish: "var(--font-mulish)", // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx
      },
      colors: {
        "main-color": "#C4C9A5",
        "second-color": "#88B5DF",
      },
    },
  },
  plugins: [],
};
