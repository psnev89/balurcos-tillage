import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@services": path.resolve(__dirname, "./src/services"),
    },
  },
  plugins: [eslintPlugin(), vue()],
});
