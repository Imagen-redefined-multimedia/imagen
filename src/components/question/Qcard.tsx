import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Qcard() {
  return (
    <div className="flex flex-col w-full sm:w-72 text-center items-center justify-center gap-4 bg-[#76C2D8]/50 p-6 rounded-lg">
      <Image
        src="/assets/Group-22.png"
        width={90}
        height={90}
        alt="icon"
        className="mb-4"
      />

      <h4 className="font-semibold text-lg">You have a different question?</h4>

      <p className="text-sm text-gray-700 mb-4">
        Feel free to ask any question relevant, we ensure the best service.
      </p>

      <div className="flex gap-4">
        {/* Email button with Link */}
        <Link
          href="#contact"
          className="bg-white rounded-md w-[120px] h-[40px] px-4 py-2 text-md hover:bg-[#56a0b6] transition duration-300 flex items-center justify-center"
          aria-label="Email Contact"
        >
          Email
        </Link>

        {/* Call button as anchor for tel: */}
        <Link href="tel:+26656339864" legacyBehavior>
          <a
            className="bg-white rounded-md w-[120px] h-[40px] px-4 py-2 text-md hover:bg-[#56a0b6] transition duration-300 flex items-center justify-center"
            aria-label="Call Contact"
          >
            Call
          </a>
        </Link>
      </div>
    </div>
  );
}
