import {userModel} from "../models/User";

/**
 * IUser接口，提供增删改查接口
 */
export interface IUser{
    /**
     * 查询用户
     * @param {number} uid 用户编码
     * @returns 用户列表 User[]
     */
    query:(uid:number) => userModel.User;
}