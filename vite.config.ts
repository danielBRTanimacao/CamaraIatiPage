import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        proxy: {
            "/media-proxy": {
                target: "http://103.199.185.123:8084",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/media-proxy/, ""),
            },
        },
    },
});
