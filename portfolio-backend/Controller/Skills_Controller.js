const express = require("express")
const mongoose = require("mongoose");
const Skills = require("../Models/Skills_Model");
const fs = require("fs")

exports.getAllSkills = (req,res,next)=>{
    Skills.find({})
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch((err)=>{
            next(err)
        })
}
exports.getByType = (req,res,next)=>{
    Skills.find({type:req.params.type})
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch((err)=>{
            next(err)
        })
}

exports.addSkill = (req,res,next)=>{
    let object = new Skills({
        name:req.body.name,
        rate:req.body.rate,
        type:req.body.type,
        
    })
    object.save()
        .then(()=>{
            res.status(200).json({mssg:"Skill Added"})
        })
        .catch((err)=>{
            next(err)
        })
}

exports.deleteSkill = (req,res,next)=>{
    Skills.deleteOne({_id:req.params._id})
        .then(()=>{
            res.status(200).json({mssg:"Skill deleted"})
        })
        
}
exports.editSkill = (req,res,next)=>{
    Skills.findOne({_id:req.params._id})
        .then((data)=>{
            if(req.body.changeImage){
                fs.unlink(`Images/skill/${data.image}`, (err)=>{
                    if(err){
                        next(err)
                    }})
                    Skills.findOneAndUpdate({_id:req.params._id},{
                        $set:{
                            name:req.body.name,
                            rate:req.body.rate,
                            image:req.files.image[0].filename
                        }
                    })
                    .then((data)=>{
                        res.status(200).json({Updated:data})
                    })
                    .catch((err)=>{
                        next(err)
                    })
            }
            Skills.findOneAndUpdate({_id:req.params._id},{
                $set:{
                    name:req.body.name,
                    rate:req.body.rate
                }
            })
            .then((data)=>{
                res.status(200).json({Updated:data})
            })
            .catch((err)=>{
                next(err)
            })
            
             
        })
        .catch((err)=>{
            next(err)
        })
}