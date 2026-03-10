import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneLight } from "react-icons/pi";
import { CiCircleAlert } from "react-icons/ci";
import './contact.css';
import { useState } from "react";
import { API_URL } from "../../API-component/base";


const Contact = () => {
 
    const [Formdata , setFormdata] = useState({
        fname : '',
        email : '',
        subject: '',
        umessage : '',
    })



const [loading, setLoading] = useState(false);

const [errors, setErrors] = useState({});

const [toastMessage, setToastMessage] = useState("");
const [showToast, setShowToast] = useState(false);


    const HandleInput = (e)=>{
         setFormdata({
            ...Formdata , 
            [e.target.name] : e.target.value
        });
  setErrors({ ...errors, [e.target.name]: "" });
    }
       

const validateForm = () => {
  let newErrors = {};

  if (!Formdata.fname.trim()){
     newErrors.fname = true ;
    }

  if (!Formdata.email.trim()) {
    newErrors.email = true ;
    }else if (!/^\S+@\S+\.\S+$/.test(Formdata.email)) {
  newErrors.email = "Valid Email Address";
}

  if (!Formdata.subject.trim()){ 
    newErrors.subject = true;
    }
  if (!Formdata.umessage.trim()) {
    newErrors.umessage = true ;
    }

  setErrors(newErrors);
 

   // All empty
  if (Object.keys(newErrors).length === 4) {
    return false;
  }

  //  Single field missing
  if (Object.keys(newErrors).length === 1) {
    return false;
  }

  //  Multiple missing
  if (Object.keys(newErrors).length > 1) {
    return false;
  }

  return true;
 
};



    const HandleSubmit = async(e)=>{

        e.preventDefault();
        if (!validateForm()) return;
         setLoading(true);
         

        try {


            const res =  await fetch(`${API_URL}/send-email` , {
                method : "POST",
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(Formdata),

            });

            const Data = await res.json();

            if (res.ok && Data.success) {
       
         setFormdata({
        fname: "",
        email: "",
        subject: "",
        umessage: "",
      });

       setErrors({});
         setToastMessage(Data.message); 
  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 3000);
      } 

            
            
        } catch (error) {
            console.log(error);
            
            
        }
        finally {
    setLoading(false); 
  }


}

  const HandleKeyDown = (e) => {
  if (e.key === "Enter" && e.shiftKey === false) {
    e.preventDefault();
    HandleSubmit(e);
  }
};

    

  return (
    <section id="contact" className="contact-section">

      {
        showToast && (
          <div className="message-contact">
            <p>{toastMessage}</p>
          </div>
        )
      }

      
      
      <div data-aos="fade-up"  className="anima-text-box">
                 <div className="benefit">
                        <p><BsFillTelephoneFill/></p> 
                     <p>CONTACT</p>
                     </div>
             
                 <h2  className="why-title">Reach Us At Anytime</h2>
                   <p className="why-subtitle">
               Have questions or need any help? We’re here to help you with that.     
                    </p>
             </div>

<div className="display-contact">
   <div  className="two-contacts">
     <div data-aos="fade-right" className="contact-box">

        <div className="contact-icon">
            <p><AiOutlineMail/></p>
        </div>

        <p>Feel free to email me if you have any questions or need more details!</p>

        <a href="#">info@tekxone.com</a>

    </div>


     <div data-aos="fade-right" className="contact-box">

        <div className="contact-icon">
            <p><PiPhoneLight/></p>
        </div>

        <p>Feel free to book a call if that’s more convenient and easier for you</p>

        <a href="#">Book a call</a>

    </div>
   </div>


    <div data-aos="fade-left" className="form-box">

        <form onSubmit={HandleSubmit}>


            <div className="input-box">
                <label htmlFor="fname">Full Name</label>
                <div  className={errors.fname ? "error-border input-tab" : "input-tab"}>

                    <input
                    className="input"  
                   id="fname"
                    type="text" 
                    placeholder="Abubaker ghaffar"
                    name="fname"
                    value={Formdata.fname}
                    onChange={HandleInput} 
                    
                    />

                    <div className={errors.fname ? "indication" : "hide-indication"}>
                       <p><CiCircleAlert/></p>
                    </div>

                </div>
            </div>

              <div className="input-box">
                <label htmlFor="email">Email Address</label>
                <div  className={errors.email ? "error-border input-tab" : "input-tab"}>

                    <input 
                    className="input" 
                     id="email"
                    type="text"
                    placeholder="info@tekxone.com"
                    name="email" 
                    value={Formdata.email}
                     onChange={HandleInput} />


                     <div className={errors.email ? "indication" : "hide-indication"}>
                       <p><CiCircleAlert/></p>
                    </div>

                </div>

                
            </div>

              <div className="input-box">
                <label htmlFor="subject">Subject Of Interest</label>
                <div  className={errors.subject ? "error-border input-tab" : "input-tab"}>

                    <input
                    className="input" 
                    id="subject"
                   type="text"
                    placeholder="Regarding Project"
                    name="subject"
                    value={Formdata.subject}
                     onChange={HandleInput} />

                        <div className={errors.subject ? "indication" : "hide-indication"}>
                       <p><CiCircleAlert/></p>
                    </div>

                </div>

             
            </div>


            <div className="input-box">
                <label htmlFor="umessage">How may we assist you?</label>

                <textarea 
                id="umessage"
                className={errors.umessage ? "error-border" : "text-area "}
                placeholder="Give us more info.."
                name="umessage"
                value={Formdata.umessage} 
                 onChange={HandleInput}
                 onKeyDown={HandleKeyDown}
                />

                   <div className={errors.umessage ? "indication2" : "hide-indication"}>
                       <p><CiCircleAlert/></p>
                    </div>

                

            </div>


            <div className="contact-btn">
                <button disabled={loading} type="submit">  {loading ? "Sending..." : "Send Your Message"}</button>
            </div>

        </form>

    </div>
</div>

    </section>
  );
};

export default Contact;