export default {
    method:'post',
    //基础url前缀
    baseURL:'/api',
    //请求信息头
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    //参数
    data:{},
    //设置超时时间
    timeout:10000,
    // 表示跨域请求时是否需要使用凭证
    withCredentilas:true,
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // default
}