// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],   

  resolve: {
    alias: {
      '@': '/src',   
 // Ejemplo de alias para el directorio src
    },
  },
});