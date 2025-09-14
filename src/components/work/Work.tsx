import React from "react";
import Image from "next/image";

export default function Work(){

return(

	<>
 	 <div className={" flex flex-col md:flex-row item-center md:gap-20 justify-between mx-5 md:mx-15 lg:mx-16 mt-10 md:mt-20 space-y-5"} >
		<div>
		 <Image  src={"/assets/work.svg"}
			alt={"work_pic"}
			width={350}
			height={350}
			aspectratio={"auto"} 
			className={"w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] "}/>
		</div>
		<div className={""}>
		<p className="text-[#2D90DB] text-[0.8rem] md:text-[1rem] ">Imagen Wall Art will assist you with:</p>
		<p className={"text-[1.05rem] md:text-[1.2rem] lg:text-[1.45rem] font-light"} >Create visual identity that captures the attention of your tailored target audience,
 while setting you apart from the competition.</p>
		</div>
	</div>
	</>
);
}
