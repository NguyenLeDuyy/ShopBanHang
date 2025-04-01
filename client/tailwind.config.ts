import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Đường dẫn tới các file sử dụng Tailwind
  ],
  theme: {
    extend: {}, // Tùy chỉnh theme tại đây
  },
  plugins: [], // Thêm plugin nếu cần
};

export default config;