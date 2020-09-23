const UsersModel  = require('./../models/users');

class UsersCtl {
    constructor(){

    }
    query () {  // 用户列表查询接口
        return new Promise((resolve,reject)=>{
            UsersModel.find({},(err,res)=>{
                if (err) {
                    reject(err)
                }
                resolve(res)  // res就是一个doc
            })
        })
    }
    async userLogin(obj) { // 用户登陆的方法
        let {username,password}  = obj;
        
        const usersDoc = await UsersModel.findOne({"$or" :  [ {'mobile':username} , {'username':username}]});
        if (!usersDoc) {
            return {
               code:0,
               msg:"该用户尚未注册" 
            }
        }
        let result = await usersDoc.comparePassword(password, usersDoc.password).then((isMath) => {
            if (isMath) { // 返回true账户密码存在
                return isMath
            } else { // 否则是账户存在密码错误
                console.log(isMath, "密码不存在............");
            }
        }).catch((error) => {
          console.log("服务器出现异常，请重启服务器......");
        });
        
        //console.log(result);
        return !result ? {code:-2 ,msg :'密码不正确'} : {code:200, _id: usersDoc._id,username: usersDoc.username,avatar: usersDoc.avatar, mobile: usersDoc.mobile,email: usersDoc.email}
    }
    async userRegister(obj) { // 用户登陆的方法
        let {alias_name,password,mobile,school_type}  = obj;
        const usersDoc = await UsersModel.findOne({mobile});
        if (usersDoc) {
            return {
               code:0,
               msg:"该用户已经注册" 
            }
        }
        let userRegister = new UsersModel({alias_name,password,mobile,school_type});
        let userInfo = await userRegister.save();
        return {
            code:200,
            msg:"注册成功"            
        }

    }
    save(obj){ 
        const m = new UsersModel(obj)
        return new Promise((resolve,reject)=>{
            m.save((err,res)=>{
                if (err) {
                    reject(err)
                }
                resolve(res)
                //console.log(res)
            })
        })
    }
}


module.exports =  new UsersCtl()