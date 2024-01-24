import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard1 } from "./ProjectCards1";
import { ProjectCard2 } from "./ProjectCards2";
import { ProjectCard3 } from "./ProjectCards3";
import projImg1 from "../assets/img/cleaning.png";
import projImg2 from "../assets/img/Yield_calculator.png";
import projImg3 from "../assets/img/step_form.png";
import projImg4 from "../assets/img/intake_form.png";
import projImg5 from "../assets/img/electric.png";
import projImg6 from "../assets/img/usd_valt.png";
import projImg7 from "../assets/img/trush.png";
import projImg8 from "../assets/img/bear.png";
import projImg9 from "../assets/img/pumbing.png";
import projImg10 from "../assets/img/food.png";
import projImg11 from "../assets/img/tour.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {

  const projects1 = [
    {
      title: "Cleaning Services",
     link:'https://cleaning-usama508.vercel.app/',
      imgUrl: projImg1,
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
