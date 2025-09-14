import React from "react";
import Image from "next/image";

export default function ContactUs() {

return(
	<>
           <div className={" text-center item-center"}>
	     <h1 className={" text-[1.2rem] font-light"}>Get in Touch </h1>
	     <p className={"font-light text-sm"}> We would like to hear from you! If youhave any questions,comments or
 feedback. Please use the form below </p>
	   </div>
		<div className={"flex items-center py-3"}>
		   <Image src={"./assets/wallpaper.svg"}
			  alt={"Splash ArtWork"}
			  width={400}
			  height={200}
			  aspectratio={"auto"} 
			  className={"h-auto w-200 md:w-400"}/>
		</div>
	</>
)}
