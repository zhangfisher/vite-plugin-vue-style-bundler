import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from "vite-plugin-inspect"
import StyleBundler from "../src/index"

export default defineConfig({
  plugins: [    
    vue(),    
    Inspect(),
    StyleBundler(),
  ],
  build:{    
    sourcemap:true,    
    minify:false,
    lib:{
      entry:"./src/App.vue",
      "name":"Card2"      
    },
    rollupOptions:{
      external:['vue']
    }

  }
})
