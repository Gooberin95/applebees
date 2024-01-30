import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
function Topnav() {
	  return (
		  <Container>
		      <Navbar bg="light" expand="lg">
		      <Navbar.Brand href="#home">Affordable Landscape & Maintenance</Navbar.Brand>
		  <Container className="justify-content-end">
		          <Nav>
		            <Nav.Link href="#home" id="section1">About</Nav.Link>
		            <Nav.Link href="#link" id="section2">Contact</Nav.Link>
		            <Nav.Link href="#about" id="section3">Services</Nav.Link>
		          </Nav>
		  </Container>
		      </Navbar>
		  </Container>
		    );
}
export default Topnav;
