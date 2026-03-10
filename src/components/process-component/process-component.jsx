import { RiStairsFill } from "react-icons/ri";
import { PiLineSegmentsFill } from "react-icons/pi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";
import './process.css'

const Process = ()=>{



    return(<>
    
    <section className="process-section">




 <div data-aos="fade-right" className="anima-text-box">
    <div className="benefit">
           <p><RiStairsFill/></p> 
        <p>PROCESS</p>
        </div>

    <h2  className="why-title">Simple & Scalable</h2>
      <p className="why-subtitle">
     A transparent process of collaboration and feedback.
       </p>
</div>


<div className="processes">

<div data-aos="fade-right" className="process1">
    <div className="process1-uper-textbox">
       <div className="process-icon-box">
         <p><PiLineSegmentsFill/></p>
       </div>
        <p>Workflow Assessment</p>
        <p>We begin by examining your existing workflows to identify where AI can deliver the greatest impact.</p>
    </div>

    <div className="underline"></div>

    <div className="process-number">
        <p>01</p>
       <div className="dot-line">
         <span></span>
        <span></span>
        <span></span>
       </div>
    </div>


    <div className="process1-pic">

       
    </div>
</div>
<div className="two-processes">
    <div data-aos="fade-left" className="process2">
            <div className="process2-uper-textbox">
       <div className="process-icon-box">
         <p><LuSquareArrowOutUpRight/></p>
       </div>
        <p>Deploy with Confidence</p>
        <p>Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.</p>
    </div>

    <div className="underline"></div>

    <div className="process-number2">
        <p>02</p>
       <div className="dot-line2">
         <span></span>
        <span></span>
        <span></span>
       </div>
    </div>


    <div className="process2-pic">

       
    </div>
    </div>



    <div data-aos="fade-left" className="process3">

         <div className="process2-uper-textbox">
       <div className="process-icon-box">
         <p><MdOutlineSupportAgent/></p>
       </div>
        <p>Ongoing Support & Optimization</p>
        <p>After deployment, we provide support and refine your AI systems to keep them performing at their best.</p>
    </div>

    <div className="underline"></div>

    <div className="process-number2">
        <p>03</p>
       <div className="dot-line3">
         <span></span>
        <span></span>
        <span></span>
       </div>
    </div>


    <div className="process3-pic">

       
    </div>
    </div>

</div>


    
</div>





    </section>
    
    
    </>)

}


export default Process