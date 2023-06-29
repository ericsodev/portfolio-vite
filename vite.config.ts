import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import svgr from "vite-plugin-svgr";
import { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [react(), ssr({ prerender: true }), svgr({ svgrOptions: {} })],
};

export default config;
