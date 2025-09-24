import React from "react";
import Image from "next/image";

export default function ContactUs() {
  return (
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

      {/* Content Section */}
      <div className="relative z-10 text-center items-center py-8">
        <h1 className="text-[1.2rem] font-light">Get in Touch</h1>
        <p className="font-light text-sm">
          We would like to hear from you! If you have any questions, comments, or
          feedback, please use the form below.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center py-3">
        <div className="w-[400px] md:w-[400px] aspect-[2/1]">
          <Image
            src="/assets/wallpaper.svg"
            alt="Splash ArtWork"
            width={400}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
