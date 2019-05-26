export namespace userModel{
    export class User{
        public uid:string;
        public uname:string;
        public upasswd:string;

        constructor(uid:string, uname:string, upasswd:string){
            this.uid = uid;
            this.uname = uname;
            this.upasswd = upasswd;
        }
    }
}