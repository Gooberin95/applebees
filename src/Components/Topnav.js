import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Topnav() {
	  return (
		      <>
		        <Nav className="justify-content-evenly" style={{alignItems: "center", justifyContent: "center", height: "150px",backgroundColor: "grey"}} bg="dark" activeKey="/home">
		          <Nav.Item>
		            <Nav.Link href="/home">About</Nav.Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Nav.Link eventKey="link-1">Services</Nav.Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Nav.Link eventKey="link-2">Contact</Nav.Link>
		          </Nav.Item>
		        </Nav>
		  </>
	  );
}

export default Topnav;
