// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(), 
    alpinejs(), 
  ],

  vite: {
    plugins: [
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
        disableAsyncLocalStorage: true,
      }),
      tailwindcss(), 
    ]
  },
  output: "server",
  adapter: vercel({ imageService: false })
});