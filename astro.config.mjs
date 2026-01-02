// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false, // true = /es/home, false = /home para español
    }
  }, 

  integrations: [mdx(), alpinejs()],

  vite: {
    plugins: [tailwindcss()]
  }
});