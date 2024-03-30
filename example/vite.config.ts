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
      entry:"./src/components/Card2.vue",
      "name":"Card2"      
    },
    rollupOptions:{
      external:['vue']
    }

  }
})
