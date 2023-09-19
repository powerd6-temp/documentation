import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  build: {
    format: "file"
  },
  integrations: [mdx(), pagefind(), tailwind(), alpinejs()]
});