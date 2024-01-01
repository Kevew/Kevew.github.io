import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { HashLink } from 'react-router-hash-link';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <CustomLink to="/home" className="nav-home">
            </CustomLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to='/home'>
                <Nav.Link href='/home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              </Link>
              <Link to='/about'>
                <Nav.Link href="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              </Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/Kevew" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.linkedin.com/in/kevin-wei-9b42a3230/" target="_blank"><img src={navIcon2} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}


function CustomLink({ to, children, ...props }) { 
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const islogin = to === '/login';
  const isSign = to === '/sign';

  let className = isActive ? "active" : "";
  if (islogin && isActive) {
    className += "-login"; 
  }
  else if (isSign && isActive) {
    className += "-sign"
  }

  return (
    <div className={className}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

