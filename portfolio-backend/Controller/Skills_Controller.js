const express = require("express")
const mongoose = require("mongoose");
const Skills = require("../Models/Skills_Model");
const fs = require("fs")

exports.getAllSkills = (req,res,next)=>{
    Skills.find({})
        .then((data)=>{
            res.status(200).json({data})
        })
        .catch((err)=>{
            next(err)
        })
}

exports.addSkill = (req,res,next)=>{
    let object = new Skills({
        name:req.body.name,
        rate:req.body.rate,
        image:req.file.filename
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
    Skills.findOne({name:req.params.name})
        .then((data)=>{
            Skills.deleteOne({name:req.params.name})
                .then((mssg)=>{
                    fs.unlink(`Images/skill/${data.image}`, (err)=>{
                        if(err){
                            next(err)
                        }
                        else{
                            res.status(200).json({Deleted:mssg})
                        }    
                })
            })     
        })
        .catch((err)=>{
            next(err)
        })
}
exports.editSkill = (req,res,next)=>{
    Skills.findOne({name:req.params.name})
        .then((data)=>{
            if(req.body.changeImage){
                fs.unlink(`Images/skill/${data.image}`, (err)=>{
                    if(err){
                        next(err)
                    }})
                    Skills.findOneAndUpdate({name:req.params.name},{
                        $set:{
                            name:req.body.name,
                            rate:req.body.rate,
                            image:req.file.filename
                        }
                    })
                    .then((data)=>{
                        res.status(200).json({Updated:data})
                    })
                    .catch((err)=>{
                        next(err)
                    })
            }
            Skills.findOneAndUpdate({name:req.params.name},{
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