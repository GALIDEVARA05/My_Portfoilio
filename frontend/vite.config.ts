// vite.config.js or vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // ✅ Use Node's 'path' module here

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ Alias for '@' to point to /src
    },
  },
});
// This configuration file sets up Vite for a React project with TypeScript support.