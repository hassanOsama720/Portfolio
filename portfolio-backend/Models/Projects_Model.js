const mongoose = require("mongoose");


const projectSchema  = new mongoose.Schema({
    name:{type:String,unique:true,required:true,max:20},
    url:{type:String,required:true},
    image:{type:String,required:true},
    bigImage:{type:String,required:true},
    
},
{timestamps:true}
);


module.exports = mongoose.model("Projects",projectSchema);