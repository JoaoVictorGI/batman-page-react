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
        'photo1': "url('/src/assets/photo1.webp')" ,
        'photo2': "url('/src/assets/photo2.webp')" ,
        'photo3': "url('/src/assets/photo3.webp')" ,
        'photo4': "url('/src/assets/photo4.webp')" ,
        'photo5': "url('/src/assets/photo5.webp')" ,
        'photo6': "url('/src/assets/photo6.webp')" ,
      },
      fontFamily: {
        'kdam': ["Kdam Thmor Pro", "monospace"],
      }
    },
  },
  plugins: [],
};
