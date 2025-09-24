import React from "react";
import QuestionTag from "./QuestionTag";
import Qcard from "./Qcard";
import Image from "next/image";

export default function Questions() {
  return (
    <>
      {/* Heading Section */}
      <div className="text-center mt-5 md:mt-10 relative z-10">
        <h2 className="text-[#2D90DB] text-base md:text-lg font-light mb-2">FAQ&apos;s</h2>
        <h1 className="text-[1.2rem] md:text-[1.5rem]">
          <span className="font-black">QUESTION:</span>
          <span className="text-[#2D90DB] font-bold"> LOOK HERE</span>
        </h1>
      </div>

      {/* Container with Gradient and Background Image */}
      <div
        className="relative mt-10 md:mt-12 text-center bg-gradient-to-r from-[#B5DAEA]/80 to-[#C5F0F8]/30"
        style={{ minHeight: "350px" }}
      >
        {/* Background Image */}
        <div className="absolute top-0 right-0 h-full w-[40%] md:w-[50%] pointer-events-none select-none opacity-30 z-0 md:block">
          <Image
            src="/assets/logo.svg" // Replace with your background image path
            alt="background decoration"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* FAQ List and Qcard */}
        <div className="relative z-10 py-8 mx-5 md:mx-12 lg:mx-16">
          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <div className="w-full md:w-[45%]">
              <QuestionTag question="How do I keep track of my order?" answer="You get feedback on the progress" />
              <QuestionTag question="Can I print my custom dimensions?" answer="Definitely, we are able to print them" />
              <QuestionTag question="How do I make an order?" answer="You have to pay upfront amount of 50% of what you are charged" />
              <QuestionTag question="Do you offer binding and services?" answer="Yes, we offer a variety of services with those included" />
              <QuestionTag question="Do you offer steel fabrication services?" answer="Indeed, we also can help you with design the 3D model of the desired project" />
            </div>
            <div className="mt-6 md:mt-0">
              <Qcard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
