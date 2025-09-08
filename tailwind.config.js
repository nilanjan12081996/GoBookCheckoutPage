/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
        fontFamily: {
           'poppins': ['Poppins'],
           'SatoshiBlack': ['Satoshi-Black'],
           'SatoshiBold': ['Satoshi-Bold'],
           'SatoshiMedium': ['Satoshi-Medium'],
        }
     }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

