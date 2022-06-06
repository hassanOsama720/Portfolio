import React, { useEffect, useState } from 'react'
import pre from '../../assets/images/ShipShop-App.png'
import show from '../../assets/images/shipshop1.png'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'

function Works() {
    const [showPop,setShowPop] = useState(false)
    const [popData,setPopData] = useState()
    const [works,setWorks] = useState()

    const getWorks = ()=>{
        axios.get('http://localhost:8080/projects')
            .then((results)=>{
                setWorks(results.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    
    useEffect(()=>{
        getWorks()
        
    },[])


    
  return (
      <div id='projects' className="cont  w-full min-h-screen relative bg-slate-200 dark:bg-Dark_bg flex flex-col md:flex-row justify-center items-center flex-wrap gap-3 lg:pt-10">
        <CloseIcon className={`${showPop ? "opacity-100 z-auto" : "opacity-0 -z-10"} fixed top-[15%] left-[12%] dark:text-back scale-125 cursor-pointer`}
            onClick={()=>{setShowPop(false)}}
        ></CloseIcon>
        <div className={`${showPop ? "w-[70%]  z-50" : "w-0 z-auto "} show fixed h-[80%]  drop-shadow-3xl transition-all duration-500  left-[15%] top-[10%] overflow-y-scroll`}>
            <img src={popData} alt="" />
        </div>

        <div className="title w-[80%] h-[10%] flex justify-center font-extrabold text-main animate-colorChange text-4xl">
            <h1>Projects</h1>
        </div>


        {works ? works.map((work)=>{
            return(
                <div className="group relative cursor-pointer drop-shadow-2xl dark:drop-shadow-3xl h-fit flex items-center flex-col w-[80%] md:w-[45%] lg:w-[30%] ">
                    <div className="img group-hover:scale-110  transition-all duration-500">
                        <img className='group-hover:grayscale group-hover:blur-sm transition-all duration-500' src={`http://localhost:8080/Images/project/${work.image}`} alt="" />
                    </div>
                    <div className="info group-hover:h-[60%] overflow-hidden flex flex-col left-[0] w-0 absolute top-[30%] group-hover:w-full transition-all duration-500">
                    <p className=' font-bold text-center  text-4xl text-main'>{work.name}</p>
                    <div className="click w-full flex justify-evenly mt-2">
                    <button class="rounded-full bg-secondary p-2 w-[40%] text-white border-2 border-secondary hover:bg-white hover:text-secondary font-bold transition-all"
                        onClick={()=>{setShowPop(true);setPopData(`http://localhost:8080/Images/project/${work.bigImage}`)}}
                    >Show</button>
                    <button class="rounded-full bg-secondary p-2 w-[40%] text-white border-2 border-secondary hover:bg-white hover:text-secondary font-bold transition-all"
                        onClick={()=>{window.open(work.url,'_blank')}}
                    >Visite</button>
                    </div>
                    </div>
                </div>
            )
        }) :
            <div className="group relative cursor-pointer h-fit flex items-center flex-col w-[30%] ">
                <div className="img group-hover:scale-110  transition-all duration-500">
                    <img className='group-hover:grayscale group-hover:blur-sm transition-all duration-500' src={pre} alt="" />
                </div>
                <div className="info group-hover:h-[60%] overflow-hidden flex flex-col left-[0] w-0 absolute top-[30%] group-hover:w-full transition-all duration-500">
                    <p className=' font-bold text-center  text-4xl text-main'>Loading</p>
                </div>
            </div> 
        }

    </div>
  )
}

export default Works