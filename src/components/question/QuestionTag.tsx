"use client"
import React,{ useState } from "react";

interface TagProps{
question:string;
answer:string;
}

const QuestionTag: React.FC<TagProps> = ({question, answer}) => {

	const[isOpen, setIsOpen] = useState(false);

return (
	<>
	 <div className="relative inline-block lg:mx-10 px-2 py-2 transition duration-500">
               <button
		    onClick={() => setIsOpen(!isOpen)}
                    className={`flex bg-[#2D90DB] w-68 md:w-80 lg:w-88 text-[0.9rem] md:text-[1.12rem] rounded-t-md rounded-b px-2 py-1 justify-between${isOpen ? " bg-blue-100 rounded-b-none transition duration-500": ""}`}>
                    {question}
		     <span className={`font-semibold text-white ${isOpen ? " hidden" : ""}`}> + </span>
		     <span className={`font-semibold text-white ${!isOpen ? "hidden" : ""}`}> - </span>
                    </button>
		{ isOpen && (
			<p className={`flex  w-68 md:w-80 lg:w-88 bg-blue-100 px-2 py-1 justify-between rounde-b-md ${isOpen ? "transition duration-500":""} `}
			   onClick={() => setIsOpen(false)} >{answer}
		     </p>
		)}
            </div>

	</>
);
};
 
export default QuestionTag;
