/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 50:'#eef1f7', 100:'#d5dce9', 200:'#abbad4', 300:'#7f97be', 400:'#5c7bab', 500:'#3e6297', 600:'#2f4f7f', 700:'#1B2A4A', 800:'#152039', 900:'#0e1627' },
        gold: { 100:'#f7edd0', 200:'#edda9f', 300:'#e1c46e', 400:'#d4ad42', 500:'#C9A84C', 600:'#a8853c', 700:'#86642d', 800:'#63481f', 900:'#402e13' }
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
    }
  },
  plugins: []
}
