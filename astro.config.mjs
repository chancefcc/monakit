import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  site: "https://tiktag.app",
  output: "static",
  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@lib": path.resolve("./src/lib"),
        "@consts": path.resolve("./src/consts.ts"),
        "@layouts": path.resolve("./src/layouts"),
        "@styles": path.resolve("./src/styles"),
      },
    },
  },
});
