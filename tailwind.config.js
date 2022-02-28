module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-custom-100': '#fafafa',
        'grey-custom-200': '#f4f4f4',
        'grey-custom-300': '#b1b1b1',
        'grey-custom-400': '#818181',
        'grey-custom-500': '#727272',
        'grey-custom-600': '#414141',
        'blue-button-primary': '#3cb4ab',
        'blue-button-primary-100': '#a9ccc6',
        'blue-button-hover': '#157a74',
      },
      fontFamily: {
        'commisioner': ['Commissioner', 'sans-serif']
      },
      lineHeight: {
        'paragraph-m': '1.8'
      }
    },
  },
  plugins: [],
}
