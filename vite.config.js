import { defineConfig } from 'vite';
import { glob } from 'glob';

export default defineConfig({
  root: 'src',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
  },
});
