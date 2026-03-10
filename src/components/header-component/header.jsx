import Navbar from "../navbar-component/navbar"

import { BsStars } from "react-icons/bs";
import headlogo from './../../assets/logo.png'
import './header.css'
import bgvideo from './../../assets/video.mp4'
import { RiArrowRightUpFill } from "react-icons/ri";
const Header = ()=>{


    return(<>


    <div id="home" className="header">
        <Navbar/>

        <div className="video-box">
        <video autoPlay loop muted playsInline className="bg-video" src={bgvideo} ></video>    

        </div>


      <div className="head-content">


        <div className="head-text1">
             <div className="star"><BsStars/></div>
             <p>AI AUTOMATION FOR BUSINESSES</p>
        </div>

        <div className="mid-head-text2">
            <div className="circle-icon-black">
                <div className="circle-icon-gray"></div>
                <div className="inside-icon">
                <img height={20} src={headlogo}  />
                </div>
            </div>


            <div className="logotext">
                <h1>TEKXONE</h1>
            </div>
        </div>



        <div className="headpara">
            <p>Custom AI solutions, built for the innovators of tomorrow</p>
        </div>


        <div className="two-btn-head">
        
            <a className="head-btn-1" href="#features">Features <RiArrowRightUpFill/>  </a>
         
           
            <a className="head-btn-2" href="#services">Our Services</a>

        </div>
      </div>

    </div>


   

    
    
    </>)

}

export default Header