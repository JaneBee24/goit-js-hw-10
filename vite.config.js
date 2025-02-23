import { defineConfig } from 'vite';

export default defineConfig({
  base: '/goit-js-hw-10/', 
  build: {
    outDir: 'docs', 
    emptyOutDir: true,
  },
});
