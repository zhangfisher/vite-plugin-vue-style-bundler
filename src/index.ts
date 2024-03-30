import { injectCodeToSetup, parseStyles } from "./parse";
import { shortHash } from "./utils";
import less from "./less";
import sass from "./sass";  
export interface StyleBundlerOptions {
	lessOptions?: Less.Options;
	sassOptions?: any;
} 

/**
 * 在一段CSS代码中为所有规则注入scope属性
 * @param css 
 * @param scopeId 
 */
function insertScopeId(css: string, scopeId: string) {
    const regex = /(?<=\}|^)([^\{\}]+)(?=\{)/gm;        
	// @ts-ignore
    return css.replace(regex, (match:string, rules:string) => {  
        return  rules.split(",").map(r=>{
			r=r.trim()
            if(r.startsWith("@")) return r
            const i = r.indexOf(":")
            if(i==-1){
                return "\n"+r + `[data-l-${scopeId}]`
            }else{
                return "\n"+r.slice(0,i) + `[data-l-${scopeId}]` + r.slice(i)
            }
        }).join(",")  
    });  
}
 
function injectScopeId(code: string, scopeId: string) {
	// @ts-ignore
	return code.replace(/(<template>)([\s\S]+)(<\/template>)/gm, (matched: string,openTag:string, template: string,closeTag:string) => {
		return `${openTag}${template.replace(/(?<!=[\'\"\\])\<\w+\s*/gm, (tag: string) => {					 
			return `${tag} data-l-${scopeId} `
		})}${closeTag}`
	})
}

export default (options?: StyleBundlerOptions) => {
	const opts = Object.assign(
		{
			lessOptions: {},
			sassOptions: {},
		},
		options
	);
	return {
		name: "vue-plugin-vue-style-bundler",
		enforce: "pre",
		async transform(code: string, id: string) {
			// 1. 只处理.vue文件
			if (!/.vue$/.test(id)) {
				return;
			}
			const fileId = shortHash(id);
			// 2. 检查是否有style
			let [newCode, styles] = parseStyles(code);
			// 3. 获取需要捆绑的样式
			if (styles.length > 0) {
				// 在<script setup>中插入代码
				for (const [props, css] of styles) {
					const styleId = typeof props.bundle == "string" ? props.bundle : fileId;       
					let compiledCss = css;                 
					if (props.lang == "less") {
						compiledCss = await less(css, opts.lessOptions);
					} else if (["sass", "scss"].includes(props.lang as string)) {
						compiledCss = await sass(css, opts.sassOptions);							
					}  
					if(props.scoped){
						// 此时template还没有被编译，无法得到scopeId，先用styleId代替
						compiledCss = insertScopeId(compiledCss, styleId);   
						// 提取vue中的template内容
						newCode = injectScopeId(newCode,styleId)
					}
					newCode = injectCodeToSetup(newCode, { styleId, props, css:compiledCss });
				}                    
				return newCode;
			} else {
				return code;
			}
		},
	}   
}; 
