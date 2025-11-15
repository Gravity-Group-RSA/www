import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // GitHub Pages requires a base path matching your repo name
  base: "/gravity-group-rsa/",

  build: {
    outDir: "dist",
  },
});
