import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import netlify from "@netlify/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), netlify()],
  base: "/ps-webamp/",
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: (chunkInfo) => {
          // Ensure entry point file names are lowercase
          return `assets/${chunkInfo.name.toLowerCase()}.js`;
        },
        chunkFileNames: (chunkInfo) => {
          // Ensure chunk file names are lowercase
          return `assets/${chunkInfo.name.toLowerCase()}-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          // Ensure asset file names are lowercase
          // You might want to handle extensions separately
          const extType = assetInfo.name?.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType ?? "")) {
            return `assets/img/${assetInfo.name?.toLowerCase()}`;
          }
          if (/woff2?|eot|ttf|otf/i.test(extType ?? "")) {
            return `assets/fonts/${assetInfo.name?.toLowerCase()}`;
          }
          return `assets/${assetInfo.name?.toLowerCase()}`;
        },
      },
    },
  },
});
