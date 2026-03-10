import { IoMdHeart } from "react-icons/io";
import './customer.css'
import { RiDoubleQuotesR } from "react-icons/ri";
import { TbStarFilled } from "react-icons/tb";
const Customers = ()=>{



    return(<>
    
    
    <section className="Customer-section">
         <div data-aos="fade-up"  className="anima-text-box">
           <div className="benefit">
                  <p><IoMdHeart/></p> 
               <p>CUSTOMERS</p>
               </div>
       
           <h2  className="why-title">What Our Clients Say</h2>
             <p className="why-subtitle">
         Join customers who trust AI to transform their business.   
              </p>
       </div>



       <div  className="customer-infopic">
        <div  data-aos="fade-right" className="cuntomer-discription">

            <p>Their <span>AI-driven</span> approach helped us reach the right  audience and <span>grow faster</span> with smarter  insights—streamlining our strategy, improving  engagement, and <span>delivering results</span> we couldn’t  achieve before.</p>
        <p><RiDoubleQuotesR/></p>
        </div>
        <div data-aos="fade-left" className="cuntomer-pic-box">

            <div className="customer-pic">

            </div>

        </div>
       </div>


       <div data-aos="fade-up" className="three-rating">
        <div className="rating">
            <div className="rating-stars">
                <p><TbStarFilled/></p>
                <p><TbStarFilled/></p>
                <p><TbStarFilled/></p>
                <p><TbStarFilled/></p>
                <p><TbStarFilled/></p>

            </div>

            <div className="rating-disc">
                <p>We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us</p>
            </div>

           <div className="display-rate-pic-name">
             <div className="side-border-ratepic">
                <div className="rate-pic-box">
                <div className="rate-pic"></div>
            </div>
            </div>

            <div className="rate-names">
                <p>Brendan</p>
                <p>Marketing Director at StratIQ</p>
            </div>
           </div>
        </div>
        <div className="rating">
             <div className="rating-stars">
                <p><TbStarFilled/></p>
                <p><TbStarFilled/></p>
                <p><TbStarFilled/></p>
                <p><TbStarFilled/></p>
                <p><TbStarFilled/></p>

            </div>

            <div className="rating-disc">
                <p>Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We’re already seeing results.</p>
            </div>

           <div className="display-rate-pic-name">
             <div className="side-border-ratepic">
                <div className="rate-pic-box">
                <div className="rate-pic2"></div>
            </div>
            </div>

            <div className="rate-names">
                <p>Lena M</p>
                <p>Manager at NovaTech</p>
            </div>
           </div>
        </div>
        <div className="rating">
             <div className="rating-stars">
                <p><TbStarFilled/></p>
                <p><TbStarFilled/></p>
                <p><TbStarFilled/></p>
                <p><TbStarFilled/></p>
                <p><TbStarFilled/></p>

            </div>

            <div className="rating-disc">
                <p>From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved user satisfaction</p>
            </div>

           <div className="display-rate-pic-name">
             <div className="side-border-ratepic">
                <div className="rate-pic-box">
                <div className="rate-pic3"></div>
            </div>
            </div>

            <div className="rate-names">
                <p>Eli R</p>
                <p>COO at GridFrame</p>

                
            </div>
           </div>
        </div>
       </div>


       <div data-aos="fade-up" className="customer-percentages">
        <div className="perventage">
            <p>100+</p>
            <p>Projects Completed</p>
        </div>

        <div className="perventage per-border">
            <p>95%</p>
            <p>Client Satisfaction</p>
        </div>

        <div className="perventage">
            <p>10+</p>
            <p>Years of Experience</p>
        </div>
       </div>



    </section>
    
    
    </>)

}


export default Customers