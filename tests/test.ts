import {UserController} from "../controllers/UserController";

const userController = new UserController();
userController.addUser();
userController.deleteUser();
userController.updateUser();
userController.queryUser();