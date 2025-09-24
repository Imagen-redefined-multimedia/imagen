import React from "react";

interface TagProps {
  number: string | number;
  tag: string;
}

const ServiceTag: React.FC<TagProps> = ({ number, tag }) => {
  return (
    <div className="flex items-center gap-3 py-1 xl:gap-6">
      <span className="flex items-center justify-center bg-[#CBCBCB] text-[0.95rem] md:text-[1.4rem] lg:text-[1.55rem] xl:text-[1.8rem] w-6 md:w-9 lg:w-10 xl:w-12 h-6 md:h-9 lg:h-10 xl:h-12 font-semibold rounded-full border-[#2D90DB] border-4">
        {number}
      </span>
     <p className="font-semibold p-1 text-[#285677] text-[0.91rem] md:text-[1.4rem] xl:text-[1.6rem] bg-gradient-to-r from-[#ADD0DA]/80 to-[#5BA5BA]/40 px-2 rounded-b-lg rounded-t-r-lg drop-shadow-lg"
	 	style={{ textShadow: '1px 1px 3px rgba(244, 95, 127, 0.4)' }}>
		{tag}
		</p>

    </div>
  );
};

export default ServiceTag;
