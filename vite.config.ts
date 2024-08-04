/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv'

dotenv.config()


export default defineConfig({
  server:{
    port: process.env.PORT||3000,
    proxy:{
      '/api/v1/': {
        target: 'https://live.devnimble.com',
        changeOrigin: true,
      }                                                       // https://live.devnimble.com/api/v1/contacts 
    }
  },
  plugins: [react(), ],
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
