import { compileStringAsync } from "sass"

export default async function (code:string,options:Less.Options){   
   return (await compileStringAsync(code,options)).css
}