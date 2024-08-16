import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue2";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/sass/backend/app.scss",
                "resources/sass/frontend/app.scss",
                "resources/js/backend/app.js",
                "resources/js/frontend/app.js",
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            $: "jquery",
            jquery: "jquery/dist/jquery.js",
        },
    },
    optimizeDeps: {
        include: ["jquery", "bootstrap"],
    },
});
