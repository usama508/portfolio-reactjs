import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard1 } from "./ProjectCards1";
import { ProjectCard2 } from "./ProjectCards2";
import { ProjectCard3 } from "./ProjectCards3";
import projImg1 from "../assets/img/cleaning.webp";
import projImg2 from "../assets/img/Yield_calculator.webp";
import projImg3 from "../assets/img/step_form.webp";
import projImg4 from "../assets/img/intake_form.webp";
import projImg5 from "../assets/img/electric.webp";
import projImg6 from "../assets/img/usd_valt.webp";
import projImg7 from "../assets/img/trush.webp";
import projImg8 from "../assets/img/bear.webp";
import projImg9 from "../assets/img/pumbing.webp";
import projImg10 from "../assets/img/food.webp";
import projImg11 from "../assets/img/tour.webp";
import projImg12 from "../assets/img/surve.webp"
import projImg13 from "../assets/img/chart.webp"
import projImg14 from "../assets/img/movingservice.webp"
import projImg15 from "../assets/img/bicycle.webp"
import projImg16 from "../assets/img/form.png"
import projImg17 from "../assets/img/form-html.png"
import projImg18 from "../assets/img/yard.png"
import projImg19 from "../assets/img/payment.png"
import projImg20 from "../assets/img/handyman.png"
import projImg21 from "../assets/img/order.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {

  const projects1 = [
    {
      title: "Surveillance",
     link:'https://surveillance-usama508.vercel.app/',
      imgUrl: projImg12,
    },
    {
      title: "Cleaning Services",
     link:'https://cleaning-usama508.vercel.app/',
      imgUrl: projImg1,
    },
    {
      title: "Form",
     link:'https://form1-usama508.vercel.app/',
      imgUrl: projImg17,
    },
    {
      title: "Electric Services",
     link:'https://electric-usama508.vercel.app/',
      imgUrl: projImg5,
    },
    {
      title: "Trush Hauling",
     link:'https://trush-hauling-usama508.vercel.app/',
      imgUrl: projImg7,
    },
    {
      title: "Bear Bears",
     link:'https://bear-usama508.vercel.app/',
      imgUrl: projImg8,
    },
    {
      title: "Plumbing",
     link:'https://plumbing-usama508.vercel.app/',
      imgUrl: projImg9,
    },
   
    {
      title: "Moving Service",
     link:'https://movingservice-usama508.vercel.app/',
      imgUrl: projImg14,
    },
    {
      title: "Bicycle Repair",
     link:'https://bicyclerepair-usama508.vercel.app/',
      imgUrl: projImg15,
    },
    {
      title: "Form",
     link:'',
      imgUrl: projImg16,
    },
    {
      title: "Order Detail Page",
     link:'https://order-detail-usama508.vercel.app/',
      imgUrl: projImg21,
    },

    
  ];

  const projects2 = [
    {
      title: "Yield Calculator",
     link:'https://yield-calculator.vercel.app/',
      imgUrl: projImg2,
    },
    {
      title: "Step Form",
     link:'https://step-form-usama508.vercel.app/',
      imgUrl: projImg3,
    },
    {
      title: "Payment Information",
     link:'https://payment-information-usama508.vercel.app/',
      imgUrl: projImg19,
    },
    
  ];

  const projects3 = [
    {
      title: "Intake Form",
     link:'https://form-react-usama508.vercel.app/',
      imgUrl: projImg4,
    },
    {
      title: "USD_VALT",
     link:'https://usd-valt.vercel.app/',
      imgUrl: projImg6,
    },
     {
      title: "Food Delivery",
     link:'https://food-delivery-usama508.vercel.app/',
      imgUrl: projImg10,
    },
    {
      title: "Tour Planner",
     link:'https://tour-planner-usama508.vercel.app/',
      imgUrl: projImg11,
    },
    {
      title: "Yard Maintenance",
     link:'https://yardmaintenance-usama508.vercel.app/',
      imgUrl: projImg18,
    },
    {
      title: "Chart",
     link:'',
      imgUrl: projImg13,
    },
    {
      title: "Handyman Services",
     link:'https://handyman-services-usama508.vercel.app/',
      imgUrl: projImg20,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"Below are some projects that I have completed."</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">HTML/CSS/Bootstrap</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">JavaScript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">React js/Tailwind CSS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                             
                              <ProjectCard1
                                key={index}
                              
                                {...project}
                                />
                             
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                             
                              <ProjectCard2
                            
                                key={index}
                              
                                {...project}
                                />
                             
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>


                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                             
                              <ProjectCard1
                                key={index}
                              
                                {...project}
                                />
                             
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                 
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
