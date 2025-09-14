import React from "react";
import {aboutUs, support, social } from "./footerItems";

export default function FooterLinks(){

	const responsive = "font-semibold text-[0.85rem] md:text-[1.1rem]";
	const  footerLinks = "p-2 font-light text-[0.75rem] md:text-[0.85rem] lg:text-[0.95rem]";

return(
	<>
	<div className={" flex justify-evenly mt-5"}>
		<div>
		   <h3 className={`${responsive}`}>About Us</h3>
		    <ol className={`${footerLinks}`}>
		      {aboutUs.map((aboutUs, index) => 
		       (
		         <li key={index}>
			   {aboutUs}
		         </li>
		      ))}
		    </ol>
	    </div>
	    
	    <div>
		   <h3 className={`${responsive}`}>Support</h3>
		     <ol className={`${footerLinks}`}>
		      {support.map((support, index) => 
		       (
		         <li key={index}>
			   {support}
		         </li>
		      ))}
		    </ol>
	    </div>
	    
	    <div>
		   <h3 className={`${responsive}`}>Social</h3>
		    <ol className={`${footerLinks}`}>
		      {social.map((social, index) => 
		       (
		         <li key={index}>
			   {social}
		         </li>
		      ))}
		    </ol>
	    </div>
	    </div>
	</>

)
}
