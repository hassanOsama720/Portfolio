const express = require("express")
const mongoose = require("mongoose");
const Projects = require("../Models/Projects_Model");
const fs = require("fs")

exports.getAllProjects = (req,res,next)=>{
    Projects.find({})
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch((err)=>{
            next(err)
        })
}


exports.addProject = (req,res,next)=>{
    
    let object = new Projects({
        name:req.body.name,
        url:req.body.url,
        image:req.files.image[0].filename,
        bigImage:req.files.bigImage[0].filename
    })
    object.save()
        .then(()=>{
            res.status(200).json({mssg:"Project Added"})
        })
        .catch((err)=>{
            next(err)
        })
}

exports.deleteProject = (req,res,next)=>{
    Projects.findOne({_id:req.params._id})
        .then((data)=>{
            Projects.deleteOne({_id:req.params._id})
                .then((mssg)=>{
                    fs.unlink(`Images/project/${data.image}`, (err)=>{
                        if(err){
                            next(err)
                        }
                        else{
                            fs.unlink(`Images/project/${data.bigImage}`, (err)=>{
                                if(err){
                                    next(err)
                                }
                                else{

                                    res.status(200).json({Deleted:mssg})
                                }})
                        }    
                })
            })     
        })
        .catch((err)=>{
            next(err)
        })
}
exports.editProject = (req,res,next)=>{
    Projects.findOne({_id:req.params._id})
        .then((data)=>{
            if(req.body.changeImage){
                fs.unlink(`Images/skill/${data.image}`, (err)=>{
                    if(err){
                        next(err)
                    }})
                    Projects.findOneAndUpdate({_id:req.params._id},{
                        $set:{
                            name:req.body.name,
                            url:req.body.url,
                            image:req.files.image[0].filename,
                            bigImage:req.files.bigImage[0].filename
                        }
                    })
                    .then((data)=>{
                        res.status(200).json({Updated:data})
                    })
                    .catch((err)=>{
                        next(err)
                    })
            }
            Projects.findOneAndUpdate({_id:req.params._id},{
                $set:{
                    name:req.body.name,
                    url:req.body.url
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