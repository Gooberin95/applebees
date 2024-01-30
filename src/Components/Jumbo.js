import React from 'react';
import style from './css/jumbo-style.module.css';
import { BsTelephone } from 'react-icons/bs';


function Jumbo() {
	return (
		<>

		<div className={style["hero-image"]}>
		<div className={style["hero-text"]}>
		<h1>Affordable Landscape & Maintenance LLC</h1>
		<BsTelephone/><h3>123-123-1234</h3>
		 
		</div>
		 
		</div>

		</>

	);
}

export default Jumbo;
