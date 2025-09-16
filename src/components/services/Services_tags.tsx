import React from "react";

const ServiceTag:
React.FC<TagProps> = ({number, tag }) => {

return(
	<>
	<div className={"space-y-4"}>
	  <div className={"flex items-center gap-3  py-1 xl:gap-6 "}>
	    <span className={" bg-[#CBCBCB]  text-[0.95rem] md:text-[1.4rem] lg:text-[1.55rem] xl:text-[1.8rem] w-6 md:w-9 lg:w-10 xl:w-12 h-6 md:h-9 lg:h-10 xl:h-12 font-semibold rounded-full items-center text-center border-[#2D90DB] border-2 "}>{number}</span>
	    <p className={"font-semibold p-1 text-[#2B6F9F] text-[0.91rem] md:text-[1.4rem] xl:text-[1.6rem] bg-[#CBCBCB] px-2 px-1 rounded-b-lg rounded-t-r-lg"}>{tag}</p>
	  </div>
	</div>
	</>
	);
};

export default ServiceTag;
