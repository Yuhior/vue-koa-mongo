const mongoose  =require('../db');
const bcrypt  = require("bcrypt")
const stringRandom = require('string-random');

const { model ,Schema} = require('mongoose');
 // 定义加密密码计算强度
const SALT_WORK_FACTOR = 10;
const usersSchema = new Schema({
    username:{
        type:String,
        default:stringRandom(8),
        unique:true
    },
    alias_name:String,
    mobile: String,
    password: String,
    userType: Number,  // 用户角色
    school_type:String,
    email: String,
    family_name: String,
    reg_time:{
        type:Date,
        default:Date.now
    },
    avatar:{
        type:String,
        default:""
    }
})

usersSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});


usersSchema.methods = {
    comparePassword: (_pass, password) => { //验证方法
        // _pass传递过来的密码，password是数据库中的密码
        return new Promise((res, rej) => {
        bcrypt.compare(_pass, password, (err, isMath) => { //compare官方方法
                if (!err) {
                        res(isMath); // isMath返回true和false,true代表验证通过
                } else {
                    rej(err);
                }
            });
        });
    },
};


const userModel  = model("users",usersSchema);

module.exports = userModel
