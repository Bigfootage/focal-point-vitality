import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import fs from 'fs';

function copyPublicImages(): Plugin {
  return {
    name: 'copy-public-images',
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const targetDir = path.resolve(__dirname, 'wordpress-plugin/focal-point-vitality/assets/images');

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      if (fs.existsSync(publicDir)) {
        const files = fs.readdirSync(publicDir);
        const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp', '.ico'];

        files.forEach(file => {
          const ext = path.extname(file).toLowerCase();
          if (imageExtensions.includes(ext)) {
            const src = path.join(publicDir, file);
            const dest = path.join(targetDir, file);

            if (fs.statSync(src).isFile()) {
              fs.copyFileSync(src, dest);
              console.log(`Copied ${file} to assets/images/`);
            }
          }
        });
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), copyPublicImages()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'wordpress-plugin/focal-point-vitality/assets',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.tsx'),
      },
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'css/[name]-[hash][extname]';
          }
          return 'images/[name]-[hash][extname]';
        },
      },
    },
    cssCodeSplit: false,
  },
});
