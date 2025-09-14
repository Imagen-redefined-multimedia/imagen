"usestate"
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {

return(
	<>
	<div className={"w-full h-auto bg-blue-300"}>
	 <div className="flex items-center mx-5 md:mx-15 lg:mx-16 justify-between flex-col md:flex-row">
		<div> 
		<p className="text-[#2D90DB] text-[0.8rem] md:text-[1rem]"> Welcome to Imagen Redefined Media</p>

		<h1 className="font-bold text-[1.5rem] md:text-[2rem] xl:text-[2.5rem] ">
			Elevate Your Brand with Our Stunning Print Solutions.
		</h1>

		<ul  className="flex gap-3 items-center text-sm md:text-[1rem] lg:text-[1.1rem]"> 
		     <li className="rounded-md px-2 py-1 bg-[#2B6F9F] text-center text-white"> 
			<Link href={"#services"}> Our Services</Link> 
		      </li>
		     <li> 
			 <Link className="text-[#2D90DB] text-center" href={"/"}> Visit Shop</Link> 
	  	      </li>
		</ul>
		</div>
		 <Image 
		  src={"/assets/roland-print.svg"} 
		  alt={"printing_large_format"}
		  width={500}
		  height={250}
		  aspectatio={"auto"}
		  className=" w-[300px] lg:w-[450px] xl:w-[500px] "/>
		
	  </div>
         </div>
	</>
  );
}

