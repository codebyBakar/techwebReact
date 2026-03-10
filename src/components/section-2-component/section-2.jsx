
import ceopic from '../../assets/ceo.avif'
import './section2.css'
import { FaStar } from "react-icons/fa";
import { PiUserFill } from "react-icons/pi";
import tekxonelogoanima from './../../assets/logo.png'
import { PiUserCircleCheckLight } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { PiGear } from "react-icons/pi";
import { BiNetworkChart } from "react-icons/bi";
import { PiRocketLaunch } from "react-icons/pi";
import { PiRobotLight } from "react-icons/pi";
import { GoStack } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Section2 = ()=>{
useEffect(() => {
        AOS.init();
      }, [])


    return(<>


    <div className="section-2-box1">
        <div data-aos="zoom-in-right"   className=" box1-sec-2-text ">



            <h1 >"We harness <span>your data</span>, understand your audience, <br />
             and <span>use AI</span> to help your brand rise above the noise. <br />
              The best part? <span> We execute</span>, too."
            </h1>


          <div className="ceo-info">

            <div className="circle-sec-2">
           <div className="ceo-pic">
                <img  src={ceopic}  />
            </div>
            </div>

            <div className="ceo-text"><p>Founder of Tekxone</p></div>
            </div>

        </div>
    </div>



    <section className="animate-section">

<div  className="anima-text-box">
    <div data-aos="zoom-in-up" className="benefit">
           <p><FaStar/></p> 
        <p>BENEFITS</p>
        </div>

    <h2 data-aos='zoom-in-up' className="why-title">Why Choose Us</h2>
      <p data-aos='zoom-in-up' className="why-subtitle">
        We deliver smart, scalable, and future-ready solutions.
      </p>
</div>
        



      <div className="orbai-cards">

        <div data-aos='zoom-in-up' className="orbai-card">
          <div className="clock">
            <span className="dot d1"></span>
            <span className="dot d2"></span>
            <span className="dot d3"></span>
            <div className="pin">
                <div className="pin-pivot"></div>
                <div className="pin-pivot2"></div>

            </div>
          </div>

          <h3>Real-Time Analytics</h3>
          <p>Stay ahead with accurate, real-time performance tracking</p>
        </div>



        <div data-aos='zoom-in-up' className="orbai-card">
            <div className="left-text-bar">
                <p>Before</p>
                <p >After</p>

            </div>
          <div className="graph">
            <div className="bar b1"></div>
            <div className="bar b2"></div>
            <div className="bar b3"></div>
            <div className="bar b4"></div>
          </div>

          <div className="bars-text1">
            <p>20% Automation</p>
            <p>80% Automation</p>
          </div>

          <div className="bars-text2">
            <p>60% Cost</p>
            <p>10% Cost</p>
          </div>

          <h3>AI-Driven Growth</h3>
          <p>Make smarter moves with accurate, real-time insights.</p>
        </div>




       <div data-aos='zoom-in-up' className="orbai-card  orbai3-pad">

        <div className="wrapper">
       <div className="signal"></div>     
      <div className="first-container">

        <div className="second-container"></div>
        <div className="tekxone-logo-container">
            <img src={tekxonelogoanima} />
            </div>
            
        </div>
       </div>

        <div className="user1 user"><p><PiUserFill/></p></div>
       <div className="user2 user"><p><PiUserFill/></p></div>
       <div className="user3 user"><p><PiUserFill/></p></div>

      <h3>Sync in real time</h3>
      <p>Connect with your team instantly to track progress and updates.</p>
    </div>

      </div>

    <div data-aos='zoom-in-up' className="marquee">
  <div className="marquee-track">

    {/* FIRST SET */}
    <div className="slide-box">
      <p><PiUserCircleCheckLight /></p>
      <p>Personalized Experiences</p>
    </div>

    <div className="slide-box">
      <p><CiDollar /></p>
      <p>Cost Effective</p>
    </div>

    <div className="slide-box">
      <p><CiCirclePlus /></p>
      <p>Real-Time Insights</p>
    </div>

    <div className="slide-box">
      <p><PiGear /></p>
      <p>Automation</p>
    </div>

    <div className="slide-box">
      <p><BiNetworkChart /></p>
      <p>Data-Driven Decisions</p>
    </div>

    <div className="slide-box">
      <p><PiRocketLaunch /></p>
      <p>Faster Innovation</p>
    </div>

    <div className="slide-box">
      <p><PiRobotLight /></p>
      <p>Virtual Assistance</p>
    </div>

    <div className="slide-box">
      <p><GoStack /></p>
      <p>Scalable Solutions</p>
    </div>

    {/* DUPLICATE SET (EXACT COPY) */}
    <div className="slide-box">
      <p><PiUserCircleCheckLight /></p>
      <p>Personalized Experiences</p>
    </div>

    <div className="slide-box">
      <p><CiDollar /></p>
      <p>Cost Effective</p>
    </div>

    <div className="slide-box">
      <p><CiCirclePlus /></p>
      <p>Real-Time Insights</p>
    </div>

    <div className="slide-box">
      <p><PiGear /></p>
      <p>Automation</p>
    </div>

    <div className="slide-box">
      <p><BiNetworkChart /></p>
      <p>Data-Driven Decisions</p>
    </div>

    <div className="slide-box">
      <p><PiRocketLaunch /></p>
      <p>Faster Innovation</p>
    </div>

    <div className="slide-box">
      <p><PiRobotLight /></p>
      <p>Virtual Assistance</p>
    </div>

    <div className="slide-box">
      <p><GoStack /></p>
      <p>Scalable Solutions</p>
    </div>

  </div>
</div>

     


    </section>




 













    
    
    </>)

}


export default Section2