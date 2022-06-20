import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import autoprefixer from 'autoprefixer';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: /windicss|node_modules/
    })
  ],
  server: {
    port: 8888
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome >40', 'ff>31', 'ie 11']
        })
      ]
    }
  }
});
