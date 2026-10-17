// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Built for the custom domain hausofshades.com.au. To preview on
// https://<user>.github.io/<repo>/ before the domain is connected, build with
// SITE_URL=https://<user>.github.io BASE_PATH=/<repo>
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://hausofshades.com.au',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
