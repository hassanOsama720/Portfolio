import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import BrushIcon from '@mui/icons-material/Brush';
import StorageIcon from '@mui/icons-material/Storage';
import SquareFootIcon from '@mui/icons-material/SquareFoot';


function Skills() {
    const [cliecked,setClicked] = useState("")
    const [opened,setOpened] = useState(false)
    const [frontSkills,setFrontSkills] = useState()
    const [backSkills,setBackSkills] = useState()
    const [otherSkills,setotherSkills] = useState()
    const [dataSkills,setDataSkills] = useState()

    
    const GetData = ()=>{
         axios.get('http://localhost:8080/skills/Frontend')
            .then((result)=>{
                setFrontSkills(result.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        axios.get('http://localhost:8080/skills/Backend')
            .then((result)=>{
                setBackSkills(result.data)    
            })
            .catch((err)=>{
                console.log(err)
            })
        axios.get('http://localhost:8080/skills/Others')
            .then((result)=>{
                setotherSkills(result.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    useEffect(()=> GetData() ,[])


    function selectSide(value){
        setClicked(value)
        setOpened(!opened)
        setTimeout(() => {       
            if(value === "Frontend"){
                setDataSkills(frontSkills)
            }
            if(value === "Backend"){
                setDataSkills(backSkills)
            }
            if(value === "Main"){
                setDataSkills(otherSkills)
            }
        }, 650);
    }

    
  return (
    <div id='skills' className=" cont h-screen relative w-full   flex  items-center md:justify-center lg:justify-start flex-col lg:flex-row lg:pl-8  mt-14 md:pt-5">
        <div className="sideBar w-full lg:w-[15%] h-[10%] lg:h-[80%] flex lg:flex-col items-center lg:justify-between">  
            <div className="bar h-full w-full dark:bg-Dark_bg  bg-white ">
                <ul className={`m-auto lg:w-full font-bold  h-full flex items-center gap-10 lg:items-start  lg:flex-col justify-center`}>

                    <li className={` ${cliecked === "Frontend" ? "lg:bg-gradient-to-r bg-gradient-to-b from-main dark:to-Dark_bg to-white lg:rounded-r-none rounded-b-none h-full lg:w-full md:text-xl lg:dark:drop-shadow-5xl  text-back " : "text-white bg-main lg:rounded-r-full rounded-b-full h-[60%] lg:w-[40%] text-base"} transition-all cursor-pointer duration-700 lg:rounded-l-full rounded-t-full w-[20%] relative flex-col lg:flex-row flex justify-evenly items-center lg:h-[15%] hover:text-back2`}
                        onClick={()=>{selectSide("Frontend")}}>
                            <div className={` ${cliecked === "Frontend" ? "flex" : "hidden"} icon bg-white rounded-full lg:w-[25%] lg:h-[60%] w-[50%] h-[40%] md:w-[30%] transition-all duration-500 justify-center items-center`}>
                                <BrushIcon className='text-main scale-125'></BrushIcon>
                            </div>
                        <h1 href="#" className={`${cliecked === "Frontend" ? "animate-bounce" :  ""}`}>Frontend</h1>
                    </li>

                    <li className={` ${cliecked === "Backend" ? "lg:bg-gradient-to-r bg-gradient-to-b from-main dark:to-Dark_bg to-white lg:rounded-r-none rounded-b-none h-full lg:w-full md:text-xl lg:dark:drop-shadow-5xl  text-back " : "text-white bg-main lg:rounded-r-full rounded-b-full h-[60%] lg:w-[40%] text-base"} transition-all cursor-pointer duration-700 lg:rounded-l-full rounded-t-full w-[20%] relative flex-col lg:flex-row flex justify-evenly items-center lg:h-[15%] hover:text-back2`}
                        onClick={()=>{selectSide("Backend")}}>
                            <div className={` ${cliecked === "Backend" ? "flex" : "hidden"} icon bg-white rounded-full lg:w-[25%] lg:h-[60%] w-[50%] h-[40%] md:w-[30%] transition-all duration-500 justify-center items-center`}>
                                <StorageIcon className='text-main scale-125'></StorageIcon>
                            </div>
                        <h1 href="#" className={`${cliecked === "Backend" ? "animate-bounce" :  ""}`}>Backend</h1>
                    </li>
                    <li className={` ${cliecked === "Main" ? "lg:bg-gradient-to-r bg-gradient-to-b from-main dark:to-Dark_bg to-white lg:rounded-r-none rounded-b-none h-full lg:w-full md:text-xl lg:dark:drop-shadow-5xl  text-back " : "text-white bg-main lg:rounded-r-full rounded-b-full h-[60%] lg:w-[40%] text-base"} transition-all cursor-pointer duration-700 lg:rounded-l-full rounded-t-full w-[20%] relative flex-col lg:flex-row flex justify-evenly items-center lg:h-[15%] hover:text-back2`}
                        onClick={()=>{selectSide("Main")}}>
                            <div className={` ${cliecked === "Main" ? "flex" : "hidden"} icon bg-white rounded-full lg:w-[25%] lg:h-[60%] w-[50%] h-[40%] md:w-[30%] transition-all duration-500 justify-center items-center`}>
                                <SquareFootIcon className='text-main scale-125'></SquareFootIcon>
                            </div>
                        <h1 href="#" className={`${cliecked === "Main" ? "animate-bounce" :  ""}`}>Other</h1>
                    </li>
                </ul>
            </div>
        </div>

        <div className={` cursor-default skills w-[80%] h-[80%] overflow-y-auto transition-all duration-1000  relative flex flex-wrap items-center justify-center gap-20 p-10 `}>
            {dataSkills ? dataSkills.map((skill)=>{
                return(
                    <div className={`${opened ? "animate-dragon" : ""} w-[30%] z-10 lg:w-[10%] h-[22%] dark:drop-shadow-3xl drop-shadow-2xl bg-white border-2 dark:border-main hover:scale-150 hover:bg-Dark_bg hover:text-white hover:border-back dark:hover:border-back hover:animate-pulse  rounded-full flex justify-center items-center relative`}
                        onAnimationEnd={()=>{setOpened(false)}}>
                        {/* <img src={`http://localhost:8080/Images/skill/${skill.image}`} alt="" /> */}
                        <h5 className='animate-letters text-lg font-bold'>{skill.name}</h5>
                    </div>
                )
            }) : 
            <div className='w-[20%] h-[20%] animate-skills relative'>
                <div class="border-solid dark:border-r-white border-r-slate-400 border-r-8 scale-[900%] z-10 absolute left-[-15%] top-[40%] border-y-transparent border-y-8 border-l-0"></div>
                <div className={`w-full  h-full dark:drop-shadow-3xl drop-shadow-2xl dark:bg-white bg-slate-400  border-2 dark:border-main rounded-r-full flex justify-center items-center relative`}>       
                    <h5 className='dark:animate-letters  text-2xl text-main font-bold'>Skills</h5>
                </div>
            </div>
            }
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

export default Skills