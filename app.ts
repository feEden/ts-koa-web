import "reflect-metadata";
import {Container, buildProviderModule, InversifyKoaServer} from "./ioc";

import { join } from "path";

import { loadModules } from "./middleware/loadModules";

// 自动加载模块
loadModules(join(__dirname, "./controllers/**/*.ts"))
loadModules(join(__dirname, "./services/**/*.ts"))

// 创建IOC容器
const container = new Container();
//让容器管理inversify-binding-decorators提供的服务
container.load(buildProviderModule());

//创建服务 
new InversifyKoaServer(container).setConfig((app) => {
    // 加载模块
}).setErrorConfig((app) => {
    // 错误处理
}).build().listen("3000", () => {
    console.log("Inversify实战, server is running at port 3000...");
});