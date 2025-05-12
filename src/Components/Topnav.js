import { Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { BsTelephone } from 'react-icons/bs';


import Container from 'react-bootstrap/Container';
function Topnav() {
	  return (
		  <Container>
		      <Navbar bg="light" expand="lg">
		      <Navbar.Brand href="#home">Utah Lawns</Navbar.Brand>
		  
		 <Container style={{justifyContent: "center",paddingLeft: "50px"}}><h4><BsTelephone/> 206-409-7821</h4></Container>
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
