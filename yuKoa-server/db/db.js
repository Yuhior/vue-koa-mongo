const mongoose = require('mongoose');

// 连接
const DB_URL = 'mongodb://localhost:27017/msjx'
mongoose.set('useCreateIndex', true)
mongoose.connect(DB_URL)

mongoose.connection.on('connected',function(){
    console.log('连接成功 ' + DB_URL);
})

/**
 * 链接异常error 数据库链接错误
 */

mongoose.connection.on('error',function(err){
    console.log('Mongoose connection disconnected');
})

/**
 * 连接断开disconnected 连接异常断开
 */
mongoose.connection.on('disconnected',function(){
    console.log('链接断开'+ DB_URL)
})


module.exports = mongoose 