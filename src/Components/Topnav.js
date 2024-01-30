import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Topnav() {
	  return (
		      <>


			<Navbar bg="dark" data-bs-theme="dark">
		  <Container>
		   <Navbar.Brand>Affordable Landscaping</Navbar.Brand>
		    <Nav className="me-auto">
		  	<Nav.Item><Nav.Link>About</Nav.Link></Nav.Item>
		        <Nav.Item><Nav.Link>Contact</Nav.Link></Nav.Item>
			<Nav.Item><Nav.Link>Services</Nav.Link></Nav.Item>

		    </Nav>
		  </Container>
		  </Navbar>



		  </>
	  );
}

export default Topnav;
