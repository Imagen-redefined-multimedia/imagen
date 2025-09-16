import React from "react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <>
      <div className="text-center items-center">
        <h1 className="text-[1.2rem] font-light">Get in Touch</h1>
        <p className="font-light text-sm">
          We would like to hear from you! If you have any questions, comments, or
          feedback, please use the form below.
        </p>
      </div>

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
    </>
  );
}
