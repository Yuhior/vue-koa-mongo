const jwt = require('jsonwebtoken');


const _createToken = (userInfo) =>{
    return jwt.sign({userInfo},'10000@qq.com',{expiresIn:'60'})
}

module.exports = {
    _createToken
}


