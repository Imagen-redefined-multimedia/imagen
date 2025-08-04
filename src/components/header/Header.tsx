"usestate"
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {

return(
	<>
	 <div className="flex justify-between flex-col md:flex-row">
		<div> 
		<p className="text-[#2D90DB] text-sm md:text-base xl:text-lg"> Welcome to Imagen wall</p>
		<h1 className="font-bold text-base md:text-[2rem] lg:text-[3rem]">Elevate your Brandwith our stunning Print Solutions</h1>
			<ul  className="flex gap-3"> 
			  <li className="rounded-lg p-2 bg-[#2B6F9F] text-center"> 
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
		  className=""/>
		
	 </div>
	</>
  );
}

