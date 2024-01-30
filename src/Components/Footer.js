import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { SiNextdoor } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import ConfigIcon from './ConfigIcon';
import ConfigIconNext from './ConfigIconNext';



function Footer() {
	  return (
		      <>
		        <Nav className="justify-content-evenly" style={{alignItems: "center", justifyContent: "center", height: "90px", borderTop: "solid", borderColor: "rgba(128,128,0,0.6)", backgroundColor: "rgba(128,128,0,0.6)"}}  >
		  <Nav.Item>
		            <Nav.Link href="/home"><ConfigIcon><FaInstagram/></ConfigIcon></Nav.Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Nav.Link><ConfigIcon><FaFacebook/></ConfigIcon></Nav.Link>
		          </Nav.Item>
		          <Nav.Item>
		            <Nav.Link href="https://nextdoor.com/profile/01yb--h-kMGCpCKHF/?init_source=search&is=search&query=Herbert%20Nashion"><ConfigIconNext><SiNextdoor/></ConfigIconNext></Nav.Link>
		          </Nav.Item>
		        </Nav>
		  </>
	  );
}

export default Footer;
