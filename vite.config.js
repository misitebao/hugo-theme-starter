import { resolve } from "path";
import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "static",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./src/pages/index/index.js"),
        about: resolve(__dirname, "./src/pages/about/about.js"),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
