import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Topnav() {
	  return (
		      <>
		        <Nav className="justify-content-evenly" style={{alignItems: "center", justifyContent: "center", height: "60px", backgroundColor: "grey"}}  >
		  <Nav.Item>
		            <Nav.Link href="/home" style={{color: "white"}}>About</Nav.Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Nav.Link style={{color: "white"}} >Services</Nav.Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Nav.Link  style={{color: "white"}} >Contact</Nav.Link>
		          </Nav.Item>
		        </Nav>
		  </>
	  );
}

export default Topnav;
