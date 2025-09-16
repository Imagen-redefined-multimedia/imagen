import React from "react";
import QuestionTag from "./QuestionTag";
import Qcard from "./Qcard";

export default function Questions(){

return(

	<>
	 <div className={"mx-5 md:mx-15 lg:mx-16 mt-10 md:mt-12  text-center "}>
		<h2 className={"text-[#2D90DB] text-base md:text-lg font-light"}>FAQ&apos;s</h2>
		<h1>
		 <span className={" font-black text-[1.2rem] md:text-[1.5rem]"} >QUESTION:</span>
		 <span className={" text-[#2D90DB] text-[1.2rem] md:text-[1.5rem] font-bold"}> LOOK HERE</span>
		</h1>
		<div className={"flex items-center flex-col md:flex-row justify-between"}>
			<div className={"w-72 md:w-92"}>
			<QuestionTag question={"How do I keep track of my order?"} answer={" You get feedback on the progress "} />
			<QuestionTag question={"Can i print my custom dimensions?"} answer={"Definately, we are able to print them"}/>
			<QuestionTag question={"How do i make an order?"} answer={"You have to pay upfront amount of 50% of what you are charged"}/>
			<QuestionTag question={"Do you offer binding and services?"} answer={" Yes, we offer a variety of sevices with those included"}/>
			<QuestionTag question={"Do you offer steel fabrication services?"} answer={"Indeed, we also can help you with design the 3D model of the desired project "}/>
			</div>
			<div>
			 <Qcard />
			</div>
		</div>
	 </div>
	</>
 )
}
