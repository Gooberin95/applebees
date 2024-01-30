import React from 'react';
import style from './css/jumbo-style.module.css';
import lawncare from './lawncare.mp4';

function Jumbo() {
	  return (
		      <>
		        <div className={style["hero-container"]}>
		          <video autoPlay muted loop className={style["video-background"]}>
		            <source src={lawncare} type="video/mp4" />
		          </video>
		          <div className={style["hero-text"]}>
		            {/* Your text content goes here */}
		          </div>
		        </div>
		      </>
		    );
}

export default Jumbo;



