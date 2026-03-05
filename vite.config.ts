import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import fsp from 'fs/promises';

function safeCopyPublicPlugin() {
  return {
    name: 'safe-copy-public',
    apply: 'build' as const,
    closeBundle: async () => {
      const publicDir = path.resolve(__dirname, 'public');
      const distDir = path.resolve(__dirname, 'dist');
      const entries = fs.readdirSync(publicDir);
      for (const entry of entries) {
        const src = path.join(publicDir, entry);
        const dest = path.join(distDir, entry);
        try {
          fs.accessSync(src, fs.constants.R_OK);
          await fsp.copyFile(src, dest);
        } catch {
          // skip inaccessible files
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), safeCopyPublicPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: false,
});
