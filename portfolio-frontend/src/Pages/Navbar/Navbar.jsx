import React, { useState } from 'react'
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import useDark from '../../Hooks/useDark';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Backdrop } from '@mui/material';

function Navbar() {
  const [toggel , setToggel] = useState(["hidden","h-0"]);
  const [colorTheme,setTheme] = useDark();
  const [navBack,setNavBack] = useState(false);

  function toggelMenu (){
    if(toggel[0] === "hidden"){
      setToggel(["flex","h-auto"])
      
    }
    if(toggel[0] === "flex"){
      setToggel(["hidden","h-0"])    
    };  
  }
  function changeNavBack(){
    if(window.scrollY > 0){
      setNavBack(true)
    }
    else{
      setNavBack(false)
    }
  }
  window.addEventListener('scroll',changeNavBack)
  
  return (
    <div className={`navbar ${navBack ? 'bg-white bg-opacity-60 lg:h-16 drop-shadow-xl dark:drop-shadow-4xl dark:bg-Dark_bg dark:bg-opacity-80':'lg:h-24 md:h-16'}  transition-all  z-50 md:fixed relative lg:flex-wrap flex flex-col lg:flex-row pt-5 lg:pt-0 gap-4  sm:gap-6 lg:pl-32 items-center w-full `}>
      <div className="logo scale-150 dark:text-secondary  text-main">
        <ChevronLeftIcon></ChevronLeftIcon>
        <CoPresentIcon></CoPresentIcon>
        <ChevronRightIcon></ChevronRightIcon>
      </div>
      <ul className={`menu  ${toggel[0]} ${toggel[1]} ${navBack ? "gap-20" : "gap-9"}  sm:h-auto sm:flex flex-wrap flex-col flex-1 sm:flex-row sm:gap-10 duration-1000`}>
        <li className='nav-link text-secondary text-lg font-bold hover:drop-shadow-3xl  hover:scale-125 hover:text-back hover:animate-spin' ><a href='#'>Home</a></li>
        <li className='nav-link text-secondary text-lg font-bold hover:drop-shadow-3xl  hover:scale-125 hover:text-back hover:animate-spin'><a href='#about'>About</a></li>
        <li className='nav-link text-secondary text-lg font-bold hover:drop-shadow-3xl  hover:scale-125 hover:text-back hover:animate-spin '><a href='#skills'>Skills</a></li>
        <li className='nav-link text-secondary text-lg font-bold hover:drop-shadow-3xl  hover:scale-125 hover:text-back hover:animate-spin'><a href='#projects'>Projects</a></li>
        <li className='nav-link text-secondary text-lg font-bold hover:drop-shadow-3xl  hover:scale-125 hover:text-back hover:animate-spin'><a href='#contact'>Contact Me</a></li>
      </ul>
      {colorTheme === "dark" ? <BrightnessMediumIcon onClick={()=>{setTheme(colorTheme)}} className='text-secondary absolute right-7 hover:cursor-pointer hover:text-back hover:animate-spin'></BrightnessMediumIcon>:
      <Brightness4Icon onClick={()=>{setTheme(colorTheme)}} className='text-secondary absolute right-7 hover:cursor-pointer hover:text-back hover:animate-spin'></Brightness4Icon>}
      
      <MenuIcon onClick={toggelMenu} className='text-secondary absolute left-7 hover:cursor-pointer md:-z-10 md:opacity-0'></MenuIcon>
    </div>
  )
}

export default Navbar