import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Kevew" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/kevin-wei-9b42a3230/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
