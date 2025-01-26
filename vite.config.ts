import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  //Repo name
  base: '/Desnn1ch.com/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});