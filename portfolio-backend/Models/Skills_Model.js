const mongoose = require("mongoose");


const skillSchema  = new mongoose.Schema({
    name:{type:String,unique:true,required:true,max:20},
    rate:{type:Number,required:true,max:10},
    image:{type:String,required:false},
    type:{type:String,required:true}
},
{timestamps:true}
);


module.exports = mongoose.model("Skills",skillSchema);