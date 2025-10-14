import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist", // 🔒 garante que o build sempre vá pra pasta correta
    emptyOutDir: true, // limpa só a dist antes do build
  },
});
