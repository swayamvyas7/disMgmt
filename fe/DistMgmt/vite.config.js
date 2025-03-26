import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the app in the browser
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
