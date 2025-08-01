import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sentryVitePlugin({
      org: "davidrighi",
      project: "javascript-react",
    }),
  ],
  base: "/iPhone-15-Apple-Website/",

  build: {
    sourcemap: true,
  },
});
