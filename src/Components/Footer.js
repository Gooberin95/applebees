import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { SiNextdoor } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

function Footer() {
	  return (
		      <>
		        <Container>
		          <Navbar>
		            <Container className="justify-content-center">
		              <Nav>
		                <Nav.Link href="https://nextdoor.com/profile/01yb--h-kMGCpCKHF/?is=feed_author">
		                  <SiNextdoor />
		                </Nav.Link>
		                {/* You can add more icons with corresponding Nav.Link */}
		              </Nav>
		            </Container>
		          </Navbar>
		        </Container>
		      </>
		    );
}

export default Footer;

