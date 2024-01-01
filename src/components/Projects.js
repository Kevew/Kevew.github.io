import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import DiceyJourney from '../assets/img/DiceyJourney.jpg'
import EarlPhoto from '../assets/img/EarlofMarchLogo.png';
import PlutoImage from '../assets/img/Pluto.png'

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  I've dabbled in a number of Projects from Full-Stack Development to Video Game Design. 
                </p>
                <p>Here are some highlights, I want to show you!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Current Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Virtual Tour</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Most Recent Game Jam</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col size={12} sm={6} md={6}>
                          <div className="proj-imgbx">
                            <img src={PlutoImage} alt="PlutoWebsiteImage"/>
                            <div className="proj-txtx">
                              <h4>Pluto E-Learning</h4>
                              <span>A Fiancial E-Learning Website</span>
                            </div>
                          </div>
                        </Col>
                        <Col size={12} sm={6} md={6}>
                          <p>
                            Currently, I've been collaborating with other people on developing a full-stack application that teaches financial knowledge.
                          </p>
                          <p>
                            I've currently had a focus on the backend where I've used express and mongodb to provide information to the frontend such as User Authentication.
                            My experience with Vue has also allowed me to learn React quickly. This has made my work on the front end easier to manage.
                          </p>
                          <p>
                            This project is expected to finish in mid-April 2024, just in time for the Enactus Nation Competition.
                          </p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx">
                            <img src={EarlPhoto} alt="School Logo"/>
                            <div className="proj-txtx">
                              <h4>Earl of March Virtual Tour</h4>
                              <span>A 360 degree virtual tour with over 130 locations!</span>
                            </div>
                          </div>
                        </Col>
                        <Col size={12} sm={6} md={8}>
                          <p>
                            A fully functioning virtual tour of Earl of March Secondary School where you can explore classrooms, hallways, and the outdoor area around the school. 
                          </p>
                          <p>
                            Designed for people new to the school, students are capable of navigating their classrooms with the assistance of the built-in guide system. With smooth 
                            camera rotation, you can enhance the experience by modifying customizable camera settings in the options menu. 
                          </p>
                          <p>
                            With 130 locations, you can explore the school at:
                            <a href="https://bossjr.itch.io/eom-virtual-tour" target="_blank">
                              here
                            </a>!
                          </p>
                          <p>
                            Do note that the images have been compressed to meet the memory limit of itch.io
                          </p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        <Col size={12} sm={6} md={4}>
                          <div className="proj-imgbx">
                            <img src={DiceyJourney} alt="GameImage"/>
                            <div className="proj-txtx">
                              <h4>A Dicey Journey</h4>
                              <span>A 3D Platformer developed in 48 hours!</span>
                            </div>
                          </div>
                        </Col>
                        <Col size={12} sm={6} md={8}>
                          <p>
                            This game was developed in 48 hours and is part of my most recent game jam that I participated in. 
                            During the summer of 2022, GMTK Game Jam 2022 was nearby so me and a few co-workers from 
                            Virtual Ventures decided to get together and have some fun.
                          </p>
                          <p>
                            The theme of the game jam was "Roll of a Dice" so we quickly came up with the concept of a 3D platformer game where the ground is made of dice. 
                            Depending on the face of the dice you fall on, it may give you special effects.
                          </p>

                          <p>
                            You can try the game out at: <a href="https://miaminimia.itch.io/a-dicey-journey" target="_blank">here</a>!
                          </p>
                      </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="background-img" src={colorSharp2}></img>
    </section>
  )
}
