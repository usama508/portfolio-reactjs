import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchipForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { IoMdMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            USAMA RASHEED
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end " style={{marginTop:'40px'}}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/usama-rasheed-2a38801a7"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><IoMdMail className='mail_icon'/></a>
              <a href="https://github.com/usama508"><IoLogoGithub  className='mail_icon'/></a>
            </div>
            <p style={{marginTop:'40px',marginBottom:'0px'}}>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
