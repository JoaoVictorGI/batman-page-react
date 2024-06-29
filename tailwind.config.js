/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'contatos-background': "url('/src/assets/background-contatos.webp')",
        'banner': "url('/src/assets/batman-banner.webp')",
        'pattison': "url('/src/assets/pattison.webp')" ,
        'zoe': "url('/src/assets/zoe.webp')" ,
        'jeffrey': "url('/src/assets/jeffrey.webp')" ,
      },
      fontFamily: {
        'kdam': ["Kdam Thmor Pro", "monospace"],
      }
    },
  },
  plugins: [],
};
