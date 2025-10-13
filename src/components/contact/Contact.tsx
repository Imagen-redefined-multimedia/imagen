import React from "react";
import Image from "next/image";
import Contactform from "./Contactform"

export default function ContactUs() {
  return (
    <>
     {/* Content Section */}
      <div className="relative z-10 text-center items-center py-8">
        <h1 className="text-[1.2rem] font-light">Get in Touch</h1>
        <p className="font-light text-sm">
          We would like to hear from you! If you have any questions, comments, or
          feedback, please use the form below.
        </p>
      </div>
    <div className="relative mt-10 md:mt-20 bg-gradient-to-r from-[#B5DAEA]/80 to-[#C5F0F8]/30 overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 right-0 h-full w-[40%] md:w-[50%] pointer-events-none select-none opacity-30 z-0">
        <Image
          src="/assets/logo.svg" // Replace with your background image
          alt="background decoration"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className=" aspect-[2/1]">
          <Image
            src="/assets/wallpaper.svg"
            alt="Splash ArtWork"
            width={400}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
        <Contactform />
      </div>
    </div>
    </>
  );
}
