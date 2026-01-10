// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(), 
    alpinejs(), 
    astroI18next(),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});