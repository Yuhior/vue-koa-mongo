const router = require('koa-router')()
const { getUsers ,getRouters } =require('./../db')
const user = require('../db/controllers/user')
const jwt = require('../utils/createToken');

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', async function(ctx, next){
  //console.log(ctx.request.body);
  let {username, password} = ctx.request.body;
  if(!username || !password) return ctx.body = {code: 4020,msg: '请填写用户名或密码'};

  let args = {username, password};
  const userData = await getUsers.userLogin(args)
  ctx.body = userData
  ctx.body = (userData.code === 200) 
     ? {code: 200, msg: '登陆成功',username:userData.username, token: jwt._createToken(userData),userRoles:userData.userRoles} 
     : userData
})
router.post('/register', async function(ctx, next){
  let {alias_name ,password, mobile,school_type} = ctx.request.body;
  if(!alias_name || !password || !mobile ||!school_type) return ctx.body = {code: 4020,msg: '请填写完整的注册信息'};    
  let args = {alias_name,password,mobile ,school_type};
  const userData  = await getUsers.userRegister(args);
  ctx.body = (userData.code===200 ) ? {code: 200, msg: '注册成功'} : userData;
})
 
router.post('/getpermission',async function(ctx,next){
  let {userRole} = ctx.request.body;
  if (!userRole) return ctx.body = {code:4020,msg:'该用户没有任何的权限'};
  let args = {userRole:userRole};
  const userRouters  = await getRouters.query(args);
  //console.log(userRouters)
  ctx.body = (userRouters.code ===200) ? {code:200,msg:"获取权限成功",permission:userRouters.routerList} : userRouters
})
module.exports = router
