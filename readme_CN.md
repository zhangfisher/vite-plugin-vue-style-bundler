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

- **第1步：启用插件**

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' 
import StyleBundler from "vite-plugin-vue-style-bundler"

export default defineConfig({
  plugins: [    
    vue(),
    StyleBundler({    
        // lessOptions:{},  如果需要使用less，可以配置lessOptions
        // sassOptions:{}   如果需要使用sass，可以配置sassOptions
    }) 
  ],
})


```
- **第2步：编写组件**

```vue
<template>
  <div class="hello">Hello, {{ msg }}</div>
</template>
<style bundle>
.hello {
  color: red;
}
</style>
```

当在组件的`style`标签上添加`bundle`属性后，`vite-plugin-vue-style-bundler`插件会对该组件源码进行处理。

```diff

<template>
  <div class="hello">Hello, {{ msg }}</div>
</template>
<script setup>
+   const $insertStylesheet = (id,css)=>{
+        let style = document.getElementById('ho79thw')
+        if(!style){
+            style = document.createElement("style")
+            style.id = 'ho79thw'
+            document.head.appendChild(style)            
+            style.innerHTML = css
+        }
+    }
+    $insertStylesheet(`
+      .hello {
+        color: red;
+      }
+    `)
</script>
- <style bundle>
- .hello {
-   color: red;
- }
- </style>
```





