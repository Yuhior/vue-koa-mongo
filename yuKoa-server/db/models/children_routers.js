const mongoose  =require('../db');

const { model ,Schema} = require('mongoose');


const PermissionSchema = new Schema({
   name:String,
   type:String,
   text:String,
   userRole:Array,
   parentRouterId:String
})


const childRouteModel  = model("children_routers",PermissionSchema);

module.exports = childRouteModel
