import {controller, fluentProvide, inject, interfaces, TYPE, httpGet, Router, TAGS} from "../ioc";

import { userModel } from "../models/User";
import { UserService } from "../services/UserService";

@controller("/user")
/* @fluentProvide 当用户访问的时候再提供服务*/
@fluentProvide(TYPE.Controller).whenTargetNamed("UserController").done()
export class UserController implements interfaces.Controller {
    private userService: UserService;

    constructor(@inject(TAGS.UserService) userService: UserService) {
        this.userService = userService;
    }

    @httpGet("/getUser")
    private async queryUser(ctx: Router.IRouterContext, next: () => Promise<any>): Promise<any> {
        const result: userModel.User = this.userService.query(0);
        ctx.body = await ctx.render("index", {
            data:result.uname
        });
    }
}