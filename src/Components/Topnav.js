import { Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import Container from 'react-bootstrap/Container';
function Topnav() {
	  return (
		  <Container>
		      <Navbar bg="light" expand="lg">
		      <Navbar.Brand href="#home">Affordable Landscape & Maintenance</Navbar.Brand>
		  <Container className="justify-content-end">
		          <Nav>
		            <Nav.Link href="#home" >
		 	        <ScrollLink to="section1" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">About</ScrollLink>
		  	    </Nav.Link>
		            <Nav.Link href="#link">
		  		<ScrollLink to="section2" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">Services</ScrollLink>
		            </Nav.Link>
		            <Nav.Link href="#about" >
		                <ScrollLink to="section3" spy={true} smooth={true} offset={-100} duration={500} className="nav-link">Contact</ScrollLink>
		            </Nav.Link>
		          </Nav>
		  </Container>
		      </Navbar>
		  </Container>
		    );
}
export default Topnav;
