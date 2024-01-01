import { Container, Row, Col } from "react-bootstrap";
import HomePhoto from '../assets/img/AboutMe.jpg';

export const AboutBanner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={5}>
                    <img className="aboutHomePhoto" src={HomePhoto} alt="Header Img" max-height="500px"/>
                </Col>
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Contact Info</span>
                    <h3>Email: wei00033@gmail.com</h3>
                    <h3>Phone Number: 1-613-618-5865</h3>
                    <p>
                        Being a student at the University of Tears certainly is hard but that doesn't mean, I don't have time for other things.
                        As a hobby, coding is not something I feel forced to do. When doing a project I'm passionate about, I could get
                        sucked in for hours on the end trying to make it work.
                    </p>
                    <p>
                        I hope a few years later, I'm still just as attracted to CS as I am right now.
                    </p>
                </Col>
                </Row>
            </Container>
        </section>
    )
}