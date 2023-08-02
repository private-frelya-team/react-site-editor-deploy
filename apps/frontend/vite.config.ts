import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        target: 'esnext',
        outDir: './dist'
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, '/src')
            },
            {
                find: '@assets',
                replacement: resolve(__dirname, '/src/assets')
            },
            {
                find: '@components',
                replacement: resolve(__dirname, '/src/components')
            },
            {
                find: '@contexts',
                replacement: resolve(__dirname, '/src/contexts')
            },
            {
                find: '@plugins',
                replacement: resolve(__dirname, '/src/plugins')
            },
            {
                find: '@router',
                replacement: resolve(__dirname, '/src/router')
            },
            {
                find: '@store',
                replacement: resolve(__dirname, '/src/store')
            },
            {
                find: '@views',
                replacement: resolve(__dirname, '/src/views')
            }
        ]
    }
});
