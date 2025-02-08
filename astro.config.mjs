// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  i18n: {
      locales: ["es", "en"],
      defaultLocale: "es",
  },

  integrations: [icon()]
});