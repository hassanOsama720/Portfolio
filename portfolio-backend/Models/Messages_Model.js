const mongoose = require("mongoose");


const messageSchema  = new mongoose.Schema({
    name:{type:String,required:true,max:20},
    email:{type:String,required:true,max:50},
    message:{type:String,required:true},
    
    
},
{timestamps:true}
);


module.exports = mongoose.model("Messages",messageSchema);