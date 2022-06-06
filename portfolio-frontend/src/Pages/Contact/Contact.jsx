import { Alert, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArticleIcon from '@mui/icons-material/Article';

function Contact() {
    const [Message,setMessage] = useState({
        name:"",
        email:"",
        message:""
    });
    

  return (
    <div id='contact' className="cont relative w-full h-screen flex flex-row p-10 mt-20 justify-between items-center">
        <div className="socials lg:w-[15%] w-[20%] h-[60%] flex flex-col items-start justify-evenly">
            <div className="animate-pulse hover:animate-none card group w-[70%] h-[15%]   lg:w-[36%] lg:h-[20%] hover:lg:w-full transition-all duration-500 cursor-pointer rounded-full border-2 border-main drop-shadow-3xl bg-white flex justify-evenly items-center"
            onClick={()=>{window.open('https://www.linkedin.com/in/hassan-osama720/','_blank')}}>
                <h1 className='group-hover:w-[50%] group-hover:inline-block text-linkedIn transition-all duration-500 text-xl font-bold w-0 hidden overflow-hidden'>LinkedIn</h1>
                <LinkedInIcon fontSize='large' className='group-hover:text-linkedIn transition-all duration-500'></LinkedInIcon>
            </div>
            <div className="animate-pulse hover:animate-none card group w-[70%] h-[15%]  lg:w-[36%] lg:h-[20%] hover:lg:w-full transition-all duration-500 cursor-pointer rounded-full border-2 border-main drop-shadow-3xl bg-white flex justify-evenly items-center"
            onClick={()=>{window.open('https://github.com/hassanOsama720','_blank')}}>
                <h1 className='group-hover:w-[50%] group-hover:inline-block text-github transition-all duration-500 text-xl font-bold w-0 hidden overflow-hidden'>GitHub</h1>
                <GitHubIcon fontSize='large' className='group-hover:text-github transition-all duration-500'></GitHubIcon>
            </div>
            <div className="animate-pulse hover:animate-none card group w-[70%] h-[15%]  lg:w-[36%] lg:h-[20%] hover:lg:w-full transition-all duration-500 cursor-pointer rounded-full border-2 border-main drop-shadow-3xl bg-white flex justify-evenly items-center"
            onClick={()=>{window.open('https://twitter.com/Hassan_Osama_','_blank')}}>
                <h1 className='group-hover:w-[50%] group-hover:inline-block text-twitter transition-all duration-500 text-xl font-bold w-0 hidden overflow-hidden'>Twitter</h1>
                <TwitterIcon fontSize='large' className='group-hover:text-twitter transition-all duration-500'></TwitterIcon>
            </div>
            <div className="animate-pulse hover:animate-none card group w-[70%] h-[15%]  lg:w-[36%] lg:h-[20%] hover:lg:w-full transition-all duration-500 cursor-pointer rounded-full border-2 border-main drop-shadow-3xl bg-white flex justify-evenly items-center"
            onClick={()=>{window.open('https://www.facebook.com/Hassan.Osama720/','_blank')}}>
                <h1 className='group-hover:w-[50%] group-hover:inline-block text-facebook transition-all duration-500 text-xl font-bold w-0 hidden overflow-hidden'>Facebook</h1>
                <FacebookIcon fontSize='large' className='group-hover:text-facebook transition-all duration-500'></FacebookIcon>
            </div>
        </div>
        <div className='w-[80%] relative h-[90%] z-10 flex flex-col items-center justify-evenly'>
            <div className='w-[90%] h-[20%] flex justify-evenly '>
                <h1 className='w-[30%] md:w-[40%] animate-letters  md:text-2xl font-extrabold '>Social Media Here!</h1>
                <h1 className='w-[30%] md:w-[40%] animate-letters3 md:text-2xl font-extrabold '>My Email Here!</h1>
                <h1 className='w-[30%] md:w-[40%] animate-letters2 md:text-2xl font-extrabold '>My CV Here!</h1>

                <div className="arr top-[30%] rotate-[-30deg] left-0 animate-colorChange absolute">
                    <ArrowBackIosIcon fontSize='large' className='drop-shadow-3xl'></ArrowBackIosIcon>
                    <ArrowBackIosIcon className='drop-shadow-3xl'></ArrowBackIosIcon>
                    <ArrowBackIosIcon className='drop-shadow-3xl'></ArrowBackIosIcon>
                    <ArrowBackIosIcon fontSize='small' className='drop-shadow-3xl'></ArrowBackIosIcon>
                    <ArrowBackIosIcon fontSize='small' className='drop-shadow-3xl'></ArrowBackIosIcon>
                </div>
                <div className="arr top-[40%] rotate-[-30deg] left-[30%] animate-colorChange absolute">
                    <ArrowBackIosIcon fontSize='large' className='drop-shadow-3xl'></ArrowBackIosIcon>
                    <ArrowBackIosIcon className='drop-shadow-3xl'></ArrowBackIosIcon>
                    <ArrowBackIosIcon className='drop-shadow-3xl'></ArrowBackIosIcon>
                    <ArrowBackIosIcon fontSize='small' className='drop-shadow-3xl'></ArrowBackIosIcon>
                    <ArrowBackIosIcon fontSize='small' className='drop-shadow-3xl'></ArrowBackIosIcon>
                </div>
                <div className="arr top-[40%] rotate-[-130deg] left-[65%] animate-colorChange absolute">
                    <ArrowBackIosIcon fontSize='large' className='drop-shadow-3xl'></ArrowBackIosIcon>
                    <ArrowBackIosIcon className='drop-shadow-3xl'></ArrowBackIosIcon>
                    <ArrowBackIosIcon className='drop-shadow-3xl'></ArrowBackIosIcon>
                    <ArrowBackIosIcon fontSize='small' className='drop-shadow-3xl'></ArrowBackIosIcon>
                    <ArrowBackIosIcon fontSize='small' className='drop-shadow-3xl'></ArrowBackIosIcon>
                </div>
            </div>
            <div className=' w-[90%] h-[20%] flex justify-between px-9 lg:px-20 items-center'>
                <div className="animate-bounce hover:animate-none card group lg:w-[13%] md:w-[20%] md:h-[50%] lgh-[90%] hover:lg:w-[50%] transition-all duration-500 rounded-full border-2 border-main drop-shadow-3xl bg-white flex justify-evenly items-center">
                    <h1 className='group-hover:w-[80%] group-hover:inline-block text-facebook transition-all duration-500 text-xl font-bold w-0 hidden overflow-hidden'>Hassan.Osama720@gmail.com</h1>
                    <AlternateEmailIcon fontSize='large' className='group-hover:hidden transition-all duration-500'></AlternateEmailIcon>
                </div>
                <div className="animate-bounce hover:animate-none card group lg:w-[13%] md:w-[20%] md:h-[50%] lgh-[90%] hover:lg:w-[25%] transition-all duration-500 rounded-full border-2 border-main drop-shadow-3xl bg-white flex justify-evenly items-center">
                    <a href='https://drive.google.com/file/d/1JgH2Y-MPVlNWi0F1XmGQCpiZpciumQn1/view?usp=sharing' target={'_blank'} className='text-main w-0 hidden overflow-hidden group-hover:w-[60%] group-hover:inline-block animate-letters drop-shadow-3xl font-bold hover:drop-shadow-3xl hover:text-back'>Download CV</a>
                    <ArticleIcon fontSize='large' className='group-hover:hidden transition-all duration-500'></ArticleIcon>
                </div>
            </div>
        </div>














        <div className="back-c flex flex-wrap w-16 h-16 absolute gap-1 right-20 bottom-16 rotate-12 opacity-75">
                <div className="cir rounded-full w-[25%] h-[25%] bg-slate-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-slate-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-slate-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-slate-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-slate-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-slate-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-slate-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-slate-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-slate-400"></div>
            </div>
            <div className="back-c flex flex-wrap w-16 h-16 absolute gap-1 left-52 bottom-28 rotate-45 opacity-75">
                <div className="cir rounded-full w-[25%] h-[25%] bg-green-300"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-green-300"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-green-300"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-green-300"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-green-300"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-green-300"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-green-300"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-green-300"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-green-300"></div>
                
            </div>
            <div className="back-c flex flex-wrap w-16 h-16 absolute gap-1 left-1/2 top-28 rotate-12 opacity-75">
                <div className="cir rounded-full w-[25%] h-[25%] bg-teal-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-teal-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-teal-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-teal-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-teal-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-teal-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-teal-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-teal-400"></div>
                <div className="cir rounded-full w-[25%] h-[25%] bg-teal-400"></div>
                
            </div>
            <div class="border-solid scale-[250%] border-t-teal-400 border-t-8 border-x-transparent border-x-8 border-b-0 absolute bottom-16 right-[70%] rotate-45"></div>
            <div class="border-solid scale-[250%] border-t-teal-400 border-t-8 border-x-transparent border-x-8 border-b-0 absolute bottom-56 right-[45%] rotate-180"></div>
        
    </div>
  )
}

export default Contact