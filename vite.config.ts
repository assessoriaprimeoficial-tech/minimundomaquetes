// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { readdirSync } from "node:fs";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Galeria: a lista de fotos é lida da pasta public/galeria na hora do build,
// então a página nunca mostra uma foto que não existe no projeto.
const galleryPhotos = (() => {
  try {
    return readdirSync("public/galeria")
      .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
      .sort()
      .map((file) => `/galeria/${file}`);
  } catch {
    return [];
  }
})();

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    define: {
      __GALLERY_PHOTOS__: JSON.stringify(galleryPhotos),
    },
  },
});
