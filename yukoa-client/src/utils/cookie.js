/**
 * 保存cookie
 * 需要储存cokkie对象
 * 默认储存多少天
 */

 function setCookie(json,days){
     //console.log(1111);
    let data =new Date(
        new Date().getTime()+days*24*60*60*1000 // 当前时间的毫秒数转成
    ).toUTCString();
    for (const key in json) {
       document.cookie = key + "=" +json[key] + "; expires=" +data;
    }
 }

/**
 * 获取cookie
 * name 需要获取cookie 的key
 */

 function getCookie(name){
    const arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr!= null) {
        return unescape(arr[2])
    }else{
        return null
    }
 }

 /**
  * 删除cookie
  * name 需要删除cookie的key
  */

function clearCookie(name){
    let json = {};
    json[name] = '';
    setCookie(json,-1); // 直接就设置过期了
}

export default {
    setCookie,
    getCookie,
    clearCookie
}