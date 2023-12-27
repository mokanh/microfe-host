import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "oexHostAoo",
      remotes: {
        OEXShared: "https://oex-shared.netlify.app/assets/remoteEntry.js",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    target: 'esnext'
  }
});
