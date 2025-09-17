import React from "react";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import Link from "next/link";

export default function Footer() {

   return (
 <>
  
  <div  className="bottom-0 w-full bg-[#CBCBCB] border-t">
   <div className="p-4"> 
	<div  className="mx-5 md:15 lg:mx-16 border-b">
	 <div className={"flex flex-col md:flex-row px-2 py-5 items-center justify-between lg:mx-[5%]"}>
	  <Image src={"/assets/logo.svg"}
		alt={"Footer logo"}
		width={250}
		height={250}
		className={"w-[90px] md:w-[120px] x:w-[150px] h-auto"}/>
        <div>
	   <h2 className={" text-center font-semibold text-[0.98rem] md:text-[1.3rem] lg:text-[1.45rem] xl:text-[1.6rem]"}> Contact us and let&apos;s get to work </h2>
		<FooterLinks />
	</div>
     </div>
    </div> 

     <div className={"flex mx-5 md:mx-15 lg:mx-16 text-[0.6rem] md:text-[0.75rem] font-light justify-between"}>
	<p>Copyright@ Imagen: Redefined Multimedia</p>
	<p> Terms and Conditions </p>
	<Link href={"#"}>Back to top</Link>
     </div>
   </div>
  </div>
 </>
  );
}
