import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/functions": {
        target:
          "http://127.0.0.1:5001/cruzhacks-2024-developme-d58c3/us-central1/server",
        changeOrigin: true,
      },
    },
  },
});
