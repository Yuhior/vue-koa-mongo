const UsersCtl  =require('./controllers/user')
const GetPermissionCtl = require('./controllers/routers')
module.exports = {
    getUsers: UsersCtl,
    getRouters:GetPermissionCtl
}


 
