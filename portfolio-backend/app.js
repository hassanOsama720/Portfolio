require("dotenv").config()
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose  = require("mongoose");
const { request, response } = require("express");
const multer = require("multer");
const path = require("path")
const app = express();


const skillsRouter = require("./Routes/Skills_Routes");
const skillsController = require("./Controller/Skills_Controller");

const skillStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"Images/skill")
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }
})


app.use(morgan('tiny'));

app.use(cors());

// start DB connection

mongoose
        .connect(process.env.DATABASE_URL)
        .then(()=>{
            console.log("Connected")
        })
        .catch(()=>{
            console.log("Faield to Connect")
        })

app.listen(process.env.PORT_NUMBER || 8080);

const skillUpload = multer({storage:skillStorage})


app.use(skillUpload.single("image"), skillsRouter);



// Not Found Route
app.use((request,response)=>{
    response.status(404).json({data:"Not Found"})
});

//Error MW
app.use((err,req,res,next)=>{
    let status = err.statusCode || 500;
    res.status(status).json({Err:err})
});
