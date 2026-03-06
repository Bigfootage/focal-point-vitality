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
    configureServer(server: { middlewares: { use: (fn: (req: { url?: string }, res: { setHeader: (k: string, v: string) => void; end: (d: Buffer) => void; statusCode: number }, next: () => void) => void) => void } }) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? '';
        const filePath = path.join(__dirname, 'public', decodeURIComponent(url));
        try {
          fs.accessSync(filePath, fs.constants.R_OK);
          const stat = fs.statSync(filePath);
          if (stat.isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const mimeTypes: Record<string, string> = {
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.webp': 'image/webp',
              '.gif': 'image/gif',
              '.svg': 'image/svg+xml',
              '.ico': 'image/x-icon',
            };
            const mime = mimeTypes[ext] ?? 'application/octet-stream';
            res.setHeader('Content-Type', mime);
            res.end(fs.readFileSync(filePath));
            return;
          }
        } catch {
          // not a public file, continue
        }
        next();
      });
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
