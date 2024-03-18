# vite-plugin-vue-style-bundler

实现将`Vue`组件中的`css`样式一起打包到`js`代码中，然后在运行时将`style`自动插入到`head`的`vite`插件。

经过`vite-plugin-vue-style-bundler`处理后，导入组件时就可以不用再导入`css`了。


# 安装

```shell
npm install vite-plugin-vue-style-bundler
// or
pnpm add vite-plugin-vue-style-bundler
// or 
yarn add vite-plugin-vue-style-bundler
```

# 使用方法

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' 
import StyleBundler from "vite-plugin-vue-style-bundler"

export default defineConfig({
  plugins: [    
    vue(),
    StyleBundler({    
        // lessOptions:{},
        // sassOptions:{}
    }) 
  ],
})


```
