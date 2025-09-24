import React from "react";
import Image from "next/image";

export default function Work() {
  return (
    <div
      className="relative mt-10 md:mt-20 bg-gradient-to-r from-[#B5DAEA]/80 to-[#C5F0F8]/30 overflow-hidden"
      style={{ minHeight: "350px" }}
    >
      {/* Background Image on the right */}
      <div className="absolute top-0 right-0 h-full w-[40%] md:w-[50%] pointer-events-none select-none">
        <Image
          src="/assets/logo.svg"
          alt="background decoration"
          fill
          style={{ objectFit: "contain" }}
          priority
          className="opacity-30"
        />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col md:flex-row mx-5 md:mx-12 py-8  items-center md:gap-20 space-y-5 md:space-y-0">
        <div>
          <Image
            src="/assets/work.svg"
            alt="work_pic"
            width={350}
            height={350}
            priority
            className="w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px]"
          />
        </div>

        <div className="text-center md:text-left max-w-md">
          <p className="text-[#2D90DB] text-[0.8rem] md:text-[1rem] mb-2">
            Imagen Wall Art will assist you with:
          </p>
          <p className="text-[1.05rem] md:text-[1.2rem] lg:text-[1.45rem] font-light">
            Create visual identity that captures the attention of your tailored target audience, while setting you apart from the competition.
          </p>
        </div>
      </div>
    </div>
  );
}
