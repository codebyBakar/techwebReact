
import headlogo from './../../assets/logo.png'
import bgvideo from './../../assets/video.mp4'
import { RiArrowRightUpFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogoLight } from "react-icons/pi";
import './fotter.css'
import '../header-component/header.css'
const Fotter = ()=>{


    return(<>




  


  <div className="header">

        <div className="video-box2">
        <video autoPlay loop muted playsInline className="bg-video2" src={bgvideo} ></video>    

        </div>


      <div className="head-content">


        <div className="socials">
             <div className="social-icon-box">
                <p><RiTwitterXFill/></p>
             </div>
             <div className="social-icon-box">
                <p><FaInstagram/></p>
             </div>
              <div className="social-icon-box">
                <p><PiLinkedinLogoLight/></p>
             </div>
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
            <p>Next-gen AI systems, built for tomorrow’s innovators</p>
        </div>


        <div className="two-btn-head">
        
            <a className="head-btn-1" href="#pricing">Get Started <RiArrowRightUpFill/>  </a>
        
        </div>

        <div className="end-links">
        <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#services">Services</a></li>

        </ul>

       
      </div>
      </div>
       <div className="fotter-tag">
            <p>Tekxone &copy; 2026. Designed by <a href="https://www.instagram.com/abubaker_g_1?igsh=MXNzNTBhdWR3eTJtag==" target='_blank'>Abubaker Ghaffar</a> Creative Babar Team</p>
        </div>
      

    </div>


    
    
    </>)
}


export default Fotter