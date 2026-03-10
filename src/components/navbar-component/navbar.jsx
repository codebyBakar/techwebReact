import Logo from './../../assets/logo.png'
import './navbar.css'
import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)



    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={Logo}/>
                </div>

                <div className="desktop-nav">
                    <div className="menus">
                        <ul>
                        <li><a href="#home">Home</a></li>

                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                   
                </div>

                 <div className="nav-btn">
                        <a href="#pricing">Get Started</a>
                    </div>



                <div className={`menu-toggle ${isMenuOpen ? 'active-nav' : ''}`}onClick={toggleMenu}>
                   <span></span>
                   <span></span>
                   <span></span>
                </div>



                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">
                        <ul>
                            <li><a href="#home" >Home</a></li>
                            <li><a href="#features" >Features</a></li>
                            <li><a href="#Services" >Services</a></li>
                            <li><a href="#pricing" >Pricing</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        
                        <div className="mobile-nav-btn">
                            <a href="#" onClick={() => setIsMenuOpen(false)}>Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar