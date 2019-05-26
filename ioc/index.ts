import { InversifyKoaServer } from "inversify-koa-utils";
import { Container,inject } from "inversify";
import { buildProviderModule, fluentProvide, provide} from "inversify-binding-decorators";
import { interfaces, controller, httpGet, TYPE} from "inversify-koa-utils";
import * as Router from "koa-router";
import { TAGS } from "../constants/TAGS";

export {
    TAGS,
    Router,
    interfaces,
    controller,
    httpGet,
    TYPE,
    inject,
    fluentProvide,
    provide,
    Container,
    InversifyKoaServer,
    buildProviderModule
}