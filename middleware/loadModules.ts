import *  as glob from "glob";

/** 
* 自动加载模块
*/
export const loadModules = (pattern: string) => {
    const files = glob.sync(pattern);
    for (const file of files) {
        require(file);
    }
}