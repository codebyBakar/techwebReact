import './services.css'
import { PiGearSixFill } from "react-icons/pi";
import { PiCardsFill } from "react-icons/pi";
import { ImStatsBars2 } from "react-icons/im";
import { PiUserFill } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { use, useEffect, useState } from 'react';
import { PiOpenAiLogoDuotone } from "react-icons/pi";
import { PiGoogleDriveLogoDuotone } from "react-icons/pi";
import { PiDiscordLogoDuotone } from "react-icons/pi";
import { PiGithubLogoDuotone } from "react-icons/pi";
const Services = ()=>{

     const [isActive, setIsActive] = useState(false);
     const[boxActive , setBoxActive] = useState(false)


    useEffect(() => {
    // Set interval to run every 2000 milliseconds (2 seconds)
    const intervalId = setInterval(() => {
      setIsActive((prev) => !prev); // Toggle the state
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  

    useEffect(() => {
    // Set interval to toggle class every 2 seconds
    const interval = setInterval(() => {
      setBoxActive(prev => !prev);
    }, 6000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
return(<>

<section id='services' className="Services-section">
     <div  data-aos="fade-left"   className="anima-text-box">
    <div className="benefit">
           <p><PiGearSixFill/></p> 
        <p>SERVICES</p>
        </div>

    <h2  className="why-title">Our AI-Driven Services</h2>
      <p className="why-subtitle">
        Leverage AI features that boost performance to your business.
       </p>
</div>



<div className="feauture-boxes">
    <div data-aos="fade-right"  className=" service-box2">


        <div className="circle1">
            <div className="card-icon">
                <p><PiCardsFill/></p>
            </div>
        </div>
        <div className="circle2">
            <div className="graph-icon">
                <p><ImStatsBars2/></p>
            </div>
        </div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="strip"></div>

        <div className="dot1"></div>
        <div className="dot2"></div>


        <div className="service-box-text">
               <p>AI Strategy Consulting</p>
               <p>Get expert guidance to implement AI solutions that drive business growth</p>
        </div>

    </div>


    <div  data-aos="fade-left"  className="service-box1">
        <div className="search-bar-anima">
            <div className="donut">
            </div>
            <div className="flicker-line"></div>
        </div>

        <div className="search-suggest-box">
            <p>Continue writing</p>
            <p>Fix spelling</p>
            <p>Explain in detail</p>
        </div>

        <div className="button-lookalike">
            <p>Generate</p>
        </div>

         <div className="service-box-text">
               <p>Content Generation</p>
               <p>We provide seamless content creation solutions that generate captivating, high-quality content in line with your brand’s voice.</p>
        </div>
    </div>
</div>

<div className="feauture-boxes">
    <div  data-aos="fade-right"  className="service-box1">

<div className={isActive ? 'active' : 'loop'}>
         <div className="message-box1">
            
            <div className="message">
                <p>Set up a Zoom call with Emily at 10:00 AM on Wednesday.</p>
            </div>
            <div className="profile1">
                <p><PiUserFill/></p>
            </div>
        </div>
        

        <div className="message-box2">
            <div className="profile1">
                <p><BsStars/></p>
            </div>
            
            <div className="snippet" data-title="dot-flashing">
          <div className="stage">
            <div className="dot-flashing"></div>
          </div>
        </div>

         
        </div> 
        <div className="message  text2-messge">
        <p>Zoom call with Emily set for 10:00 AM Wednesday.<span>ZOOM</span></p>
        </div>
       
</div>
        <div className="search-bar2">
            <div className="bar-with-blinker">
                 <p>Type a message</p>
            </div>
        </div>

        <div className="service-box-text">
               <p>AI-Powered Chatbots</p>
               <p>We develop AI-driven chatbots with advanced cognitive technologies to elevate customer support and automate business operations.</p>
        </div>

          <div>
        
      </div>
        
    </div>
    <div  data-aos="fade-left"   className="service-box2">

        <div className="center-logo-web">
            <div className="sevice-logo-center">
                <p><PiCardsFill/></p>

            </div>
        </div>

        <div className={boxActive ? 'active1 same-for-logos' : ' same-for-logos attract-box1 '}>
            <p><PiOpenAiLogoDuotone/></p>
        </div>
        <div  className={boxActive ? 'active2 same-for-logos' : ' same-for-logos attract-box2 '}>
            <p><PiGoogleDriveLogoDuotone/></p>
        </div>
        <div  className={boxActive ? 'active3 same-for-logos ' : ' same-for-logos attract-box3 '} >
            <p><PiDiscordLogoDuotone/></p>
        </div>
        <div  className={boxActive ? ' active4 same-for-logos' : '  same-for-logos attract-box4  '} >
            <p><PiGithubLogoDuotone/></p>
        </div>

         
        <div className="service-box-text">
               <p>Automated Workflows</p>
               <p>Automate workflows to streamline tasks, boost efficiency, and save time.</p>
        </div>
    </div>

    
    
</div>

</section>






</>)

}


export default Services