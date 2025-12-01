import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/heritage",
  server: {
    port: 3000,
  },
  build: {
    outDir: "out",
  },
});
