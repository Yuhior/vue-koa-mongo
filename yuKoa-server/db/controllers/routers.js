const PermissionModel  = require('./../models/routers');

const PermissionChildModel = require('./../models/children_routers');

class PermissionCtl {
    constructor(){

    }
    async query (obj) {  // 用户权限查询接口
        let { userRole } = obj ;
        if (!userRole) {
            return {code:403,msg:'用户权限丢失,请退出后重新登陆！'}
        }
        const routersDoc = await PermissionModel.find({userRoles:{$elemMatch:{$eq:userRole}}});
        const routersChildDoc = await PermissionChildModel.find({userRole:{$elemMatch:{$eq:userRole}}});
        routersDoc.forEach(element => {
            //console.log(typeof(element._id));
            routersChildDoc.forEach(item => {
                //console.log(typeof(item.parentRouterId));
                if (item.parentRouterId==element._id.toString()) {
                    element.children.push(item);
                }
            });
        });
        console.log(routersDoc);
        return !routersDoc ? {code:403 ,msg :'改用户没有任何权限'}:{code:200,routerList:routersDoc,}
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


module.exports =  new PermissionCtl()