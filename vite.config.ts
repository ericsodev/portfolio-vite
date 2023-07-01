import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import svgr from "vite-plugin-svgr";
import Icons from "unplugin-icons/vite";
import { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [
    react(),
    ssr({ prerender: true }),
    svgr({ svgrOptions: {} }),
    Icons({ autoInstall: true, compiler: "jsx", jsx: "react" }),
  ],
};

export default config;
