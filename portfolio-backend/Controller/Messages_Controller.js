const express = require("express")
const mongoose = require("mongoose");
const Messages = require("../Models/Messages_Model");

exports.getAllMessages = (req,res,next)=>{
    Messages.find({})
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch((err)=>{
            next(err)
        })
}


exports.addMessage = (req,res,next)=>{
    
    let object = new Messages({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message,
        
    })
    object.save()
        .then(()=>{
            res.status(200).json({mssg:"Message Sent"})
        })
        .catch((err)=>{
            next(err)
        })
}

exports.deleteMessage = (req,res,next)=>{
   
            Messages.deleteOne({_id:req.params._id})
                .then((mssg)=>{
                    res.status(200).json({Deleted:mssg})
                })     
        
                .catch((err)=>{
                    next(err)
                })
}


exports.editMessage = (req,res,next)=>{
    Messages.findOneAndUpdate({_id:req.params._id},{
            $set:{
                name:req.body.name,
                email:req.body.email,
                message:req.body.message,
            }
        })
        .then((data)=>{
            res.status(200).json({Updated:data})
        })
        .catch((err)=>{
            next(err)
        })
}