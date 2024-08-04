/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  server:{
    port:3333,
    proxy:{
      '/api/v1/': {
        target: 'https://live.devnimble.com',
        changeOrigin: true,
      }                                                       // https://live.devnimble.com/api/v1/contacts 
    }
  },
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts'],
    coverage: {
      all: true,
      reporter: ['text', 'json', 'html'],
      provider: 'c8',
      reportsDirectory: './test/unit/coverage',
    },
  },
});