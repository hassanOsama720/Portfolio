import React from 'react';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TerminalIcon from '@mui/icons-material/Terminal';
import BugReportIcon from '@mui/icons-material/BugReport';
import SpeedIcon from '@mui/icons-material/Speed';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


function About() {
  return (<div id='about' className=" cont md:h-screen relative w-full bg-slate-200 dark:bg-transparent flex flex-col-reverse items-center md:justify-center lg:justify-evenly gap-20 lg:flex-row lg:pt-32 md:pt-16 md:px-28">
    
      <div className="graph w-[100%] lg:w-[40%] h-[300px] md:h-[500px] lg:h-[90%] relative">
        <div className="card w-[30%] h-[30%] md:w-[35%] z-10 md:h-[35%] absolute left-[7%] top-[5%%] bg-back2 animate-border1  rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl flex flex-col gap-2 justify-center items-center">
          <DesignServicesIcon className=' scale-[200%] text-white animate-colorChange'></DesignServicesIcon>
          <div className='text-xl font-bold text-white animate-colorChange'>Design</div>
        </div>
        <div className="card w-[30%] h-[30%] md:w-[35%] z-10 md:h-[35%] absolute right-[7%]  top-[10%]  bg-back2 animate-border2  rounded-tl-3xl rounded-tr-3xl rounded-br-3xl flex flex-col gap-2 justify-center items-center">
          <TerminalIcon className=' scale-[200%] text-white animate-colorChange'></TerminalIcon>
          <div className='text-xl font-bold text-white animate-colorChange'>Code</div>
        </div>
        <div className="card w-[30%] h-[30%] md:w-[35%] z-10 md:h-[35%] absolute left-[7%] bottom-[10%]  bg-back2 animate-border3  rounded-tl-3xl rounded-br-3xl rounded-bl-3xl flex flex-col gap-2 justify-center items-center">
          <BugReportIcon className=' scale-[200%] text-white animate-colorChange'></BugReportIcon>
          <div className='text-xl font-bold text-white animate-colorChange'>Bug Fix</div>
        </div>
        <div className="card w-[30%] h-[30%] md:w-[35%] z-10 md:h-[35%] absolute right-[7%] bottom-[5%] bg-back2 animate-border4  rounded-br-3xl rounded-tr-3xl rounded-bl-3xl flex flex-col gap-2 justify-center items-center">
          <SpeedIcon className=' scale-[200%] text-white animate-colorChange'></SpeedIcon>
          <div className='text-xl font-bold text-white animate-colorChange'>Test</div>
        </div>
        
       
        <div className="line w-[60%] h-[10px] bg-back2 absolute left-[20%]  top-[20%]    animate-line"></div>
        <div className="line w-[10px] h-[60%] bg-back2 absolute bottom-[20%]  animate-line1 left-[20%] "></div>
        <div className="line w-[10px] h-[60%] bg-back2 absolute top-[20%]  animate-line1 right-[20%]"></div>
        <div className="line w-[60%] h-[10px] bg-back2 absolute bottom-[20%]  right-[20%]  animate-line"></div>
      </div>





      <div className="info w-[90%] lg:h-[80%]  lg:w-[50%] md:h-[40%] p-4">
        <h3 className='text-lg relative font-bold text-secondary before:block before:w-1 before:h-full 
        before:bg-main before:absolute before:left-[-10px] hover:before:w-[30%] hover:before:rounded-r-full 
        hover:before:opacity-30 hover:text-white before:transition-all dark:drop-shadow-3xl'>About Me</h3>
        <br></br>
        <h3 className='text-4xl font-bold text-main dark:text-back dark:drop-shadow-3xl'>Enthusiastic,</h3>
        <h3 className='text-4xl font-bold text-main dark:text-back dark:drop-shadow-3xl'>Eager To Learn More</h3>
        <br></br>
        <p className='text-slate-600 dark:text-white'>looking forward to a position where I can enhance my skillset web technologies specifically
            <span className='text-main font-semibold'> MERN | MEAN-STACK </span> to develop and implement solutions tomeet business needs.</p>
        <div className="more w-full mt-10 flex gap-6 items-center">
          <a class="rounded-full bg-secondary p-2 w-[30%] text-center text-white border-2 border-secondary hover:bg-white hover:text-secondary font-bold transition-all" href='#contact'>Contact Me</a>
          <a href='https://drive.google.com/file/d/1JgH2Y-MPVlNWi0F1XmGQCpiZpciumQn1/view?usp=sharing' target={'_blank'} className='text-main animate-letters drop-shadow-3xl font-bold hover:drop-shadow-3xl hover:text-back'>Download CV</a>
        </div>    
      </div>

      <div className="ponying hidden lg:block absolute text-main dark:text-back rotate-[200deg] right-[230px] bottom-[120px]">
        <DoubleArrowIcon className='animate-ping dark:drop-shadow-3xl'></DoubleArrowIcon>
        <DoubleArrowIcon className='animate-ping dark:drop-shadow-3xl'></DoubleArrowIcon>
        <DoubleArrowIcon className='animate-ping dark:drop-shadow-3xl'></DoubleArrowIcon>
      </div>

      <div className="face animate-bounce absolute hidden lg:flex md:flex-col dark:text-back dark:drop-shadow-3xl text-main w-[150px] h-[100px] font-bold md:justify-center md:items-center right-[20px] bottom-[50px]">
          <SentimentSatisfiedAltIcon className='scale-[150%] dark:drop-shadow-3xl'></SentimentSatisfiedAltIcon>
          <div className="talk dark:drop-shadow-3xl">
            Wanna See My CV ?
          </div>
      </div>
    </div>
  )
}

export default About