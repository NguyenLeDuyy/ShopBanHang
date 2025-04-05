/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Quét tất cả các file trong thư mục src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Ví dụ thêm màu tùy chỉnh
        secondary: "#9333EA",
      },
    },
  },
  plugins: [],
};

