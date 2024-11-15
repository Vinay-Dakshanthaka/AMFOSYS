module.exports = {
  mode: 'jit', // This is the default mode in Tailwind CSS 3+ and will allow all classes to be available in dev mode
  content: [
    './index.html',  // Include all your HTML files
    './*.html',
  ],
  safelist: [
    'font-vercetti',  // Ensure that classes using your custom font are not purged
    // You can also add specific class names or patterns here
  ],
  theme: {
    extend: {
      fontFamily: {
        vercetti: ['Vercetti Regular', 'sans-serif'],  
      },
    },
  },
  plugins: [],
}
