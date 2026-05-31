import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  // Use the repo subpath only for the production GitHub Pages build;
  // serve from "/" during local dev so `npm run dev` works at the root URL.
  base: command === "build" ? "/System-Promptwork-Pewter-The-Platformer/" : "/",
}));
