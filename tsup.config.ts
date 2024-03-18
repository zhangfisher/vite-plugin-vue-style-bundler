import { defineConfig } from 'tsup';
export default defineConfig({
    entry:[
        "src/index.ts"
    ],
    format:["cjs","esm"],
    external:['less','sass'],
    outDir:"dist",
    minify:true,
    dts:true
})