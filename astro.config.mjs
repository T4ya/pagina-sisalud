// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Asegura que los enlaces relativos funcionen correctamente
  site: 'https://laboratoriosalisalud.com', // Reemplaza con tu dominio real en producción
  base: '/', // Opcional: establece la base si no estás implementando en la raíz
  // Opciones de compilación
  build: {
    // Asegura que Astro no elimine estilos que podrían ser críticos
    inlineStylesheets: 'auto'
  }
});