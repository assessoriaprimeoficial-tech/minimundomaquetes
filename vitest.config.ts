import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { readdirSync } from "node:fs";

export default defineConfig({
  plugins: [react()],
  define: {
    __GALLERY_PHOTOS__: JSON.stringify(
      readdirSync("public/galeria")
        .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
        .sort()
        .map((file) => `/galeria/${file}`),
    ),
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
