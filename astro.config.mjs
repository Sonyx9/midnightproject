// @ts-check
import { defineConfig } from 'astro/config';

// Web běží na vlastní doméně v kořeni — žádný `base`, jinak by se po nasazení
// rozbily cesty ke stylům.
export default defineConfig({
  site: 'https://midnightproject.cz',
});
