import axios from 'axios'


let http =axios.create({
    baseURL:'http://localhost:8080/',
    withCredentials:true,  // 设置是否跨域
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    transformRequest:[function(data){   //数据发送前进行 数据格式转换 
        let newData = ''; 
        for (const key in data) {
            if (data.hasOwnProperty(key)===true) {
                const element = object[key];
                newData += encodeURIComponent(key)+ '=' +  encodeURIComponent(data[key])
            }
        }
        return newData;
    }]
});

function apiAxios(method,url,params,response){
    http({
        method:method,
        url:url,
        data:method==='POST'||method === 'PUT' ? params : null,
        params:method==='GET' || method == 'DELETE' ? params : null,

    }).then(function(res){
        response(res);
    }).catch(function(err){
        response(err);
    })
}

export default {
    get:function (url,params,response){
        return apiAxios('GET',url,params,response);
    },
    post:function (url,params,response){
        return apiAxios('POST',url,params,response);
    },
    put:function (url,params,response){
        return apiAxios('PUT',url,params,response);
    },
    delete:function (url,params,response){
        return apiAxios('DELETE',url,params,response);
    },
}
