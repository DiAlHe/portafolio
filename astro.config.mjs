// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://diegohernandez.dev', // actualizar con el dominio final
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
