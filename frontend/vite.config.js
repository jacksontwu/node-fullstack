import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadEnv } from 'vite';
import { resolve } from 'path';
import alias from '@rollup/plugin-alias';

export default ({ command, mode }) => {
    console.log('mode', mode);

    return defineConfig({
        base: './',
        plugins: [
            alias(),
            vue(),
        ],
        optimizeDeps: {
            include: ['schart.js']
        },
        server: {
            host: '0.0.0.0',
            port: parseInt(loadEnv(mode, process.cwd()).VITE_APP_PORT),
            strictPort: true,
            // https: true, 
            open: '/',
            hmr: {
                overlay: false,
            },
            proxy: {
                '/api': {
                    target: 'http://localhost:8080/api',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                },
            },
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
                '/images': 'src/assets/images'
            },
            // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'] 
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "src/assets/styles/global.scss";'
                }
            }
        },
        build: {
            brotliSize: false,
            outDir: 'dist',
            cssCodeSplit: false,
            chunkSizeWarningLimit: 1500,
            sourcemap: false,
            manifest: true,
            assetsDir: 'static/img/',
            emptyOutDir: true,
            rollupOptions: {
                output: {
                    chunkFileNames: 'static/js/[name].[hash].js',
                    entryFileNames: 'static/js/[name].[hash].js',
                    assetFileNames: 'static/[ext]/[name].[hash].[ext]',
                },
            }
        }
    })
}
