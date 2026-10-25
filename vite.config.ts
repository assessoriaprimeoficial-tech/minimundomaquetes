// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { readdirSync } from "node:fs";

// Gallery list is built from the real files in public/galeria so the page never
// references photos that do not exist.
const imageExtensions = /\.(jpe?g|png|webp)$/i;
const galleryPhotos = readdirSync("public/galeria")
  .filter((f) => imageExtensions.test(f))
  .sort()
  .map((f) => `/galeria/${f}`);
const galleryNovas = readdirSync("public/galeria-novas")
  .filter((f) => imageExtensions.test(f))
  .sort()
  .map((f) => `/galeria-novas/${f}`);
const isoporPhotos = readdirSync("public/galeria-isopor")
  .filter((f) => imageExtensions.test(f))
  .sort()
  .map((f) => `/galeria-isopor/${f}`);

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    define: {
      __GALLERY_PHOTOS__: JSON.stringify(galleryPhotos),
      __GALLERY_NOVAS__: JSON.stringify(galleryNovas),
      __ISOPOR_PHOTOS__: JSON.stringify(isoporPhotos),
    },
  },
});
