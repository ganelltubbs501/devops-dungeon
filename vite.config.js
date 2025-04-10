import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set base URL for asset loading
  build: {
    outDir: 'dist', // Output directory for build files
    rollupOptions: {
      input: './public/index.html', // Correct input path for index.html
    },
  },
});
