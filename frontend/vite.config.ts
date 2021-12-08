import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import alias from '@rollup/plugin-alias';
import { join } from 'path';

function resolve(dir: string) {
    return join(__dirname, dir);
}

export default defineConfig({
    plugins: [vue(), alias()],
    resolve: {
        alias: {
            '@': resolve('src'),
        },
    },
    server: {
        host: '127.0.0.1',
        port: 3000,
        open: true,
        cors: true,
    },
    build: {
        outDir: 'dist',
    },
});
