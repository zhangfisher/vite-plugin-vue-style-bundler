import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from "vite-plugin-inspect"
import StyleBundler from "../src/index"

export default defineConfig({
  plugins: [    
    vue(),
    StyleBundler(),
    Inspect()
  ],
})
