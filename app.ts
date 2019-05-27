import "reflect-metadata";
import co from "co";
import * as render from "koa-swig";
import * as serve from "koa-static";
import * as log4js from 'log4js';
import config from "./config";
import {Container, buildProviderModule, InversifyKoaServer} from "./ioc";
import errorHandler from "./middleware/errorHandler";

import { join } from "path";

import { loadModules } from "./middleware/loadModules";

// 配置日志
log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: 'logs/log.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
});
const logger = log4js.getLogger('cheese');

// 自动加载模块
loadModules(join(__dirname, "./controllers/**/*.ts"))
loadModules(join(__dirname, "./services/**/*.ts"))

// 创建IOC容器
const container = new Container();
//让容器管理inversify-binding-decorators提供的服务
container.load(buildProviderModule());

//创建服务 
new InversifyKoaServer(container).setConfig((app) => {
    app.use(serve(config.staticDir));
    //注入我们的路由机制
    app.context.render = co.wrap(render({
        root: config.viewDir,
        autoescape: true,
        cache: "memory",
        ext: 'html',
        // varControls: ["[[", "]]"],
        writeBody: false
    }));
}).setErrorConfig((app) => {
    // 错误处理
    errorHandler.error(app, logger);
}).build().listen("3000", () => {
    console.log("Inversify实战, server is running at port 3000...");
});