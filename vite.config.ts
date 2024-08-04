/// <reference types="vitest" />
/// <reference types="vite/client" />

//import { defineConfig,loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';
// //import eslint from 'vite-plugin-eslint';

// const env = loadEnv("", process.cwd(), "");
//   //const validatedEnvs = cleanEnv(env, envSchema);

// export default defineConfig({
 
//   server:{
//     port: env.VITE_PORT,
//     proxy:{
//       '/api/v1/': {
//         target: 'https://live.devnimble.com',
//         changeOrigin: true,
//       }                                                       // https://live.devnimble.com/api/v1/contacts 
//     }
//   },
//   plugins: [react(), ],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: ['./src/setupTest.ts'],
//     coverage: {
//       all: true,
//       reporter: ['text', 'json', 'html'],
//       provider: 'c8',
//       reportsDirectory: './test/unit/coverage',
//     },
//   },
//   define: {
//     __APP_ENV__: JSON.stringify(env.APP_ENV),
//   },
// });


import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server:{
      port: env.VITE_PORT,
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
  };
});