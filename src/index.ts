import { injectCodeToSetup, parseStyles } from "./parse"
import { shortHash } from "./utils"
import less from "./less"
import sass from "./sass"


export interface StyleBundlerOptions{
    lessOptions?:Less.Options
    sassOptions?:any
}

export default (options?:StyleBundlerOptions)=>{
    const opts = Object.assign({
        lessOptions:{},
        sassOptions:{}
    },options)
    return {        
        name: 'vue-style-bundler',
        enforce:"pre",
        async transform(code:string, id:string) {
            // 1. 只处理.vue文件
            if (!/.vue$/.test(id)) {
                return
            } 
            // 2. 检查是否有style
            let [newCode,styles]=parseStyles(code)
            // 3. 获取需要捆绑的样式
            if(styles.length>0){
                const fileId = shortHash(id)
                // 在<script setup>中插入代码                
                for(const [props,css] of styles){
                    const styleId =typeof(props.bundle)=='string' ? props.bundle : fileId
                    if(props.lang=='less'){
                        const compiledCss = await less(css,opts.lessOptions)
                        newCode = injectCodeToSetup(newCode,{styleId,props,css:compiledCss})
                    }else if(['sass','scss'].includes(props.lang as string)){
                        const compiledCss = await sass(css,opts.sassOptions)
                        newCode = injectCodeToSetup(newCode,{styleId,props,css:compiledCss})
                    }else{
                        newCode = injectCodeToSetup(newCode,{styleId,props,css})
                    }                    
                }
                return newCode
            }else{
                return  code
            }
        },
    } as any 
}

 