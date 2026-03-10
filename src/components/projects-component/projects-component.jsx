import React, { useState, useEffect, useRef } from 'react';
import './projects.css';
import { PiScanFill } from "react-icons/pi";
const Projects = () => {
  const [activeProject, setActiveProject] = useState(1);


  

  const projects = {
    1: {
      imagesrc :'/N22bVoJydO38s0kOIVYogSPk7IE.avif'  ,
      title: "MedixCare — AI Triage Assistant for Healthcare",
      description: "We built a custom AI triage assistant that evaluates symptoms and routes patients to the appropriate care level.",
      metrics: [
        { value: 40, label: "Reduced average wait", suffix: "%" },
        { value: 95, label: "Rise in patient satisfaction", suffix: "%" }
      ],
      number: "01"
    },
    2: {
       imagesrc : '/BwNHgCwBJgiHR9pSigXsPoydm0.avif' ,
      title: "NeoMart—Smart Product Recommendations",
      description: "Integrated AI-driven product recommendations based on real-time user behavior and historical data.",
      metrics: [
        { value: 65, label: "Efficiency improvement", suffix: "%" },
        { value: 30, label: "Cost reduction", suffix: "%" }
      ],
      number: "02"
    },
    3: {
      imagesrc : '/BlgeL0EotFTQ0vq42WKucxKVO4.avif'   ,
      title: "Workwise—Automated HR Workflow Bot",
      description: "Developed an AI-powered workflow automation bot for onboarding, leave requests, and FAQ handling.",
      metrics: [
        { value: 80, label: "Accuracy improvement", suffix: "%" },
        { value: 50, label: "Time saved", suffix: "%" }
      ],
      number: "03"
    }
  };


  const handleProjectClick = (projectNumber) => {
    if (projectNumber !== activeProject) {
      setActiveProject(projectNumber);
    }
  };



  

  return (
    <section id="projects" className="projects-section">
      <div data-aos="fade-up" className="projects-container">
      
        <div  data-aos="fade-left"   className="anima-text-box">
           <div className="benefit">
                  <p><PiScanFill/></p> 
               <p>PROJECTS</p>
               </div>
       
           <h2  className="why-title">Proven Impact & Results</h2>
             <p className="why-subtitle">
          Explore Projects that reflect our AI expertise & real world impact
              </p>
       </div>

        <div className="projects-content">
         

          <div className="project-display">


            <div className="projects-selector">
            <div 
              className={`project-tab ${activeProject === 1 ? 'active' : ''}`}
              onClick={() => handleProjectClick(1)}
            >PROJECT 1
            </div>
            
            <div 
              className={`project-tab ${activeProject === 2 ? 'active' : ''}`}
              onClick={() => handleProjectClick(2)}
            >PROJECT 2
            </div>
            
            <div 
              className={`project-tab ${activeProject === 3 ? 'active' : ''}`}
              onClick={() => handleProjectClick(3)}
            >PROJECT 3
            </div>
          </div>

            <div className="project-display-container">
              <div className="project-pic">

            <img src={projects[activeProject].imagesrc} />
               
              </div>

              <div className={`project-content project-${activeProject}`}>
                <div className="project-number-display">
                  {projects[activeProject].number}
                </div>
                
                <div className="project-details">
                  <h3 className="project-title">
                    {projects[activeProject].title}
                  </h3>
                  
                  <p className="project-description">
                    {projects[activeProject].description}
                  </p>

                 
                  <div className="project-metrics" >
                    {projects[activeProject].metrics.map((metric, index) => (
                      <div key={index} className="metric-item">
                        <div className="metric-value">
                         {metric.value}
                          <span className="metric-suffix">{metric.suffix}</span>
                        </div>
                        <div className="metric-label">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;