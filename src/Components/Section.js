import styles from './css/section-style.module.css';

import React from 'react';
import sparks from './Images/herbertTwo.jpg';
import photo from './Images/herbertOne.jpg';
import photoThree from './Images/herbertThree.JPG';
import photoFour from './Images/herbertFour.jpg';
import photoFive from './Images/herbertFive.JPG';
import aboutdata from './aboutdata.js';
import servicesdata from './servicesdata.js';
import estimatesdata from './contactdata.js';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Container from 'react-bootstrap/Container';



		function Section() {
				  return (
					  		      <>
					  		        <div className={styles.container} id="section1" style={{backgroundColor: "rgba(128,128,0,0.1)"}}>
					  		          <div className={styles.row}>
					  		            <div className={styles['column-66']}>
					  		              <h1 className={styles['xlarge-font']}><b>About</b></h1>
					  		              <h1 className={styles['large-font']} style={{ color: "#995c00" }}><b>Why hire us?</b></h1>
					  		              <p><span style={{ fontSize: "24px" }}>Experienced & professional</span></p><p>{aboutdata}</p>
					  		              <button className={styles.button}>Hire us now</button>
					  		            </div>
					  		            <div className={styles['column-33']}>
					  		              <img src={photo} style={{border:"solid white", borderRadius: "8px", width: "635px", height: "471px" }} alt="App" />

					  		            </div>
					  		          </div>
					  		        </div>
							       <div style={{height: "2px", backgroundColor: "rgba(128,128,0.5)"}}></div>

					  		        <div className={styles.container} id="section2" style={{ backgroundColor:   "rgba(128,128,0,0.2)" }}>
					  		          <div className={styles.row}>
					  		            <div className={styles['column-33']}>
					  		              <img src={sparks} alt="App" width="635" height="571" style={{border:"solid white", borderRadius: "8px"}}  />
					  		            </div>
					  		            <div className={styles['column-66']} id="section2">
					  		              <h1 className={styles['xlarge-font']}><b>Services</b></h1>
					  		              <h1 className={styles['large-font']} style={{ color: "orange" }}><b>Our Services</b></h1>
					  		              <p><span style={{ fontSize: "24px" }}>Detail Oriented.</span></p><p>{servicesdata}</p>
					  		              <button className={styles.button} style={{ backgroundColor: 'orange' }}>Hire us now</button>
					  		            </div>
					  		          </div>
					  		        </div>
					  			<div style={{height: "2px", backgroundColor: "rgba(128,128,0.1)"}}></div>


					  		        <div className={styles.container} id="section3" style={{backgroundColor:   "rgba(128,128,0,0.1)"}}>
					  		          <div className={styles.row}> 
					  		            <div className={styles['column-66']}>
					  	
		 <Container style={{paddingLeft: "550px"}}><h1><BsTelephone/> 206-409-7821</h1></Container>
		
		 <Container style={{paddingTop: "50px",paddingLeft: "450px"}}><h1><HiOutlineMail/> herbertnashion3@gmail.com</h1></Container>
					  		              <h1 className={styles['xlarge-font']}><b>Contact</b></h1>
					  		              <h1 className={styles['large-font']} style={{ color: "#995c00" }}><b>Curious how to Contact us?</b></h1>
					  		              <p><span style={{ fontSize: "24px" }}>Connect now</span></p><p> {estimatesdata}</p>
					  		              <button className={styles.button}>Hire us now</button>
					  			 

					  		            </div>
					  		            <div className={styles['column-33']}>
					  		              <img src={photo} width="635" height="571" alt="App" style={{border:"solid white", borderRadius: "8px"}} />
					  		            </div>
					  		          </div>
					  		        </div>
					  		      </>
		
	);
}

export default Section;

