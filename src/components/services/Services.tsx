import React from "react";
import Image from "next/image";
import ServiceTags from "./Services_tags";

export default function Services () {

return(
	<>
	 <div id ='services' className={" mx-5 md:mx-16 mt-5"}>
		<h1 className={'ml-4 text-[1.3rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] font-bold text-[#2B6F9F] underline'}>
			OUR SERVICES
		</h1>
		<div className={"flex flex-col md:flex-row mt-5 items-center  md:ml-20 gap-6 lg:gap-10"}>
			<Image 
				src={'/assets/logo.svg'}
				alt={'services logo'}
				width={250}
				height={250}
				priority
				className={"w-[100px] md:w-[200px] mt-5 xl:w-[250px]"}
			/>
			<ul className={"space-y-1.5 lg:space-y-2"}>
				<li><ServiceTags number={"1"} tag={"GRAPHIC DESIGN"} /></li>
				<li className={"md:ml-7.5 lg:ml-9 "}><ServiceTags number={"2"} tag={"SIGNAGE & BRANDING"} /></li>
				<li className={"md:ml-10 lg:ml-16"}><ServiceTags number={"3"} tag={"ALL SIGN TYPES"} /></li>
				<li className={"md:ml-7.5 lg:ml-9"}><ServiceTags number={"4"} tag={"CORPORATE GIFTING"} /></li>
				<li><ServiceTags number={"5"} tag={"AERIAL ADVERTISING"} /></li>
			</ul>
			</div>

	 </div>
	</>
 );
};

