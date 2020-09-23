const jwt =require('jsonwebtoken');

const _checkToken = function (req,res,next){ // 获取请求头文件中的token信息
    let token = req.body.token || req.query.token || req.headers['authorization'];
    console.log(token); 

    if (token) {
        //确认token是否正确
        let decoded = jwt.decode(token,'10000@qq.com');
        console.log(decoded,4444); // 验证token是否过期
        if (token && decode.exp<new Date()/1000) {
            return res.json({success:false,message:'token令牌已过期'})
        }else{
            return next();
        }

    }else{  // 如果没有token
        return res.status(403).send({
            success:false,
            message:'没有提供token！'
        })
    }

}

module.exports = _checkToken;