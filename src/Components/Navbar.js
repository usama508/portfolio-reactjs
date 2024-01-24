import React from 'react'
import { useState, useEffect } from 'react'
import {Navbar , Container, Nav , NavDropdown} from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import nav_Icon_1 from '../assets/img/nav-icon1.svg'
import nav_Icon_2 from '../assets/img/nav-icon2.svg'
import nav_Icon_3 from '../assets/img/nav-icon3.svg'
import { IoMdMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";

function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

   useEffect(()=>{
    const onScroll = ()=>{
        if(window.scrollY > 50){
            setScrolled(true);
        } else{
           setScrolled(false)
        }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
   }, [])

   const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
   }
  return (
  <>
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                    <a href="https://www.linkedin.com/in/usama-rasheed-2a38801a7"><img src={nav_Icon_1} alt='linkedIn' /></a>
                    <a href="#"  ><IoMdMail className='mail_icon'/></a>
                    <a href="https://github.com/usama508"><IoLogoGithub  className='mail_icon'/></a>
            </div>
            {/* <button className='vvd' onClick={()=>console.log('connect')}>
                <span>Let's Connect</span>
            </button> */}

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  
  </>
  )
}

export default NavBar