import {userModel} from "../models/User";

/**
 * IUser接口，提供增删改查接口
 */
export interface IUser{
    /**
     * 新增用户
     * @param {User} user 用户实体
     * @returns 影响的行数 number
     */
    add:(user:userModel.User) => number;
    /**
     * 修改用户
     * @param {number} uid 用户编码
     * @param {User} user 用户实体
     * @returns 影响的行数 number
     */
    update:(uid:number, user:userModel.User) => number;
    /**
     * 修改用户
     * @param {number} uid 用户编码
     * @returns 影响的行数 number
     */
    delete:(uid:number) => number;
    /**
     * 查询用户
     * @param {number} uid 用户编码
     * @returns 用户列表 User[]
     */
    query:(uid:number) => userModel.User;
}