import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/GradPhoto.jpg'
import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Hello There!</span>
                <h1>{`I'm Qi Wen Wei!`}</h1>
                <h2>Though my preferred name is Kevin Wei</h2>
                  <p>
                    I'm currently a full-time undergraduate student at University of Toronto studying Computer Science and Mathematics.
                  </p>
                  <p>
                    My current interests are in Competitive Programming, Lean Proof Assistent and of course, Software Development!
                  </p>
                  <Link to='/about'>
                    <button>LEARN MORE ABOUT ME!<ArrowRightCircle size={25} /></button>
                  </Link>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
