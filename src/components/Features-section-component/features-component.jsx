import { PiCubeFill } from "react-icons/pi";
import './featuresSection.css';
import { PiAtomFill } from "react-icons/pi";
import { PiGearSixFill } from "react-icons/pi";
import { LuTrendingUp } from "react-icons/lu";
import { AiFillMessage } from "react-icons/ai";
import { RiArrowRightUpFill } from "react-icons/ri";
const FeaturesSection = () => {
  return (<>
  
  <section id="features" className="Features-section">

  <div data-aos="fade-right"  className="anima-text-box">
    <div className="benefit">
           <p><PiCubeFill/></p> 
        <p>FEATURES</p>
        </div>

    <h2  className="why-title">All features in 1 tool</h2>
      <p className="why-subtitle">
       Discover features that simplify workflows & grow your business.
       </p>
</div>


<div className="feauture-boxes">
    <div data-aos="fade-right" className=" feature-box1">
        <div className="robopic">

        </div>
        <div className="robo-description">
            <div className="icon-box-robo">
                <p><PiAtomFill/></p>
            </div>

            <div className="robo-text">
                 <p>Cutting-Edge AI</p>
                <p>Deploy AI solutions that adapt quickly,
                 learn fast, and scale with your business
                  needs.</p>
            </div>
        </div>
    </div>
    <div data-aos="fade-left" className="feature-box2">
        <div className="setting-box">
             <div className="icon-box-robo">
                <p><PiGearSixFill/></p>
            </div>

            <div className="robo-text">
                 <p>Automated Workflows</p>
                <p>Streamline tasks and boost efficiency with powerful, 
                 scalable AI-powered automation tools for growing 
                  teams and projects.</p>
            </div>

        </div>
    </div>
</div>

<div data-aos="fade-right" className="feauture-boxes">
    <div className="feature-box2">
         <div className="setting-box">
             <div className="icon-box-robo">
                <p><LuTrendingUp/></p>
            </div>

            <div className="robo-text">
                 <p>Insightful Analytics</p>
                <p>Gain deep, real-time data insights with advanced AI 
                 analytics to guide smarter strategies, decisions, and 
                  scalable business growth.</p>
            </div>

        </div>
    </div>
    <div data-aos="fade-left" className="feature-box1">
         <div className="robopic2">

        </div>
        <div className="robo-description">
            <div className="icon-box-robo">
                <p><AiFillMessage/></p>
            </div>

            <div className="robo-text">
                 <p>AI-Powered Support</p>
                <p>Enhance customer experience with AI
                  -driven virtual assistants available for 
                  support and engagement.</p>
            </div>
        </div>
    </div>

    
    
</div>

 <div data-aos="fade-left" className="two-btn-head center-two-btns ">
        
            <a className="head-btn-1  " href="#pricing"> get Started <RiArrowRightUpFill/>  </a>
         
           
            <a className="head-btn-2" href="#services">Our Services</a>

        </div>

  </section>
  
  
  
  
  
  
  
  </>);
};

export default FeaturesSection;
