const mongoose  =require('../db');

const { model ,Schema} = require('mongoose');


const PermissionSchema = new Schema({
   text:String,
   type:String,
   children:Array,
   userRoles:Array
})


const RouteModel  = model("parent_routers",PermissionSchema);

module.exports = RouteModel
