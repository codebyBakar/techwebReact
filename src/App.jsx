import FeaturesSection from "./components/Features-section-component/features-component"
import Header from "./components/header-component/header"
import Section2 from "./components/section-2-component/section-2"
import Services from "./components/Services-component/services-component"
import Contact from "./components/contact-component/contact-component"
import Customers from "./components/customer-component/customer-component"
import Fotter from "./components/fotter-component/fotter-component"
import Pricing from "./components/pricing-component/pricing-component"
import Process from "./components/process-component/process-component"
import Projects from "./components/projects-component/projects-component"



function App() {

  return (
    <>

    <Header/>
    <Section2/>
    <FeaturesSection/>
    <Services/>
    <Process/>
    <Projects/>
    <Customers/>
    <Pricing/>
    <Contact/>
    <Fotter/>
     
    </>
  )
}

export default App
