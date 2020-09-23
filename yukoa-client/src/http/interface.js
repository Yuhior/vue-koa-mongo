import axios from './api'  


/**
 * 讲所有接口统一起来管理
 * 如果项目很大可以将url 独立成文件，接口分成不同的模块
 */


const getUsers = params =>{
    return axios({
        url: '/getUsers',
        method: 'get',
        params
    })
 }

 const Login = params =>{
     return axios({
         url:'/users/login',
         method:'POST',
         data:params
     })
 }
 const Register = params =>{
    return axios({
        url:'/users/register',
        method:'POST',
        data:params
    })
}


 export default {
    getUsers,
    Login,
    Register
 } 