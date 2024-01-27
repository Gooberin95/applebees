import React from 'react';
import style from './css/jumbo-style.module.css';
import { BsTelephone } from 'react-icons/bs';


function Jumbo() {
	return (
		<>

		<div style={{height: "30px", backgroundColor: "rgba(128,128,0.1)"}}></div>
		<div className={style["hero-image"]}>
		<div className={style["hero-text"]}>
		<h1 style={{color: "rgba(128,288,0,1)"}}>Affordable Landscape & Maintenance LLC</h1>
		<BsTelephone/><h3 style={{color: "orange"}}>123-123-1234</h3>
		 
		</div>
		 
		</div>
		 <div style={{height: "10px", backgroundColor: "rgba(128,128,0.1)"}}></div>

		</>

	);
}

export default Jumbo;
