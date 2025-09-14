import React from "react";
import Link from "next/link";

export default function Qcard (){

return(
	<>
	  <div className={" w-72 text-center justify-center gap-2 bg-[#CBCBCB] p-6 rounded-lg "}>
	    <h4 className={"font-semibold"}>You have a different question ? </h4>
	    <p>Feel free to ask any question relevant,we ensure the best service.</p>
	    <Link href={"/"} className={"bg-white rounded-md px-4 mt-1 py-2"}>Contact us </Link>
	  </div>
	</>
)}
