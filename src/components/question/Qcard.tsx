import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Qcard() {
  return (
    <div className="flex flex-col w-full sm:w-72 text-center items-center justify-center gap-4 bg-[#76C2D8]/50 p-6 rounded-lg">
      {/* Icon */}
      <Image src="/assets/Group-22.png" width={90} height={90} alt="icon" className="mb-4" />

      {/* Title */}
      <h4 className="font-semibold text-lg">You have a different question?</h4>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-4">
        Feel free to ask any question relevant, we ensure the best service.
      </p>

      {/* Contact Us Button */}
      <Link
        href="/"
        className="bg-white  rounded-md w-[120px] h-[40px] px-4 py-2 text-md hover:bg-[#56a0b6] transition duration-300"
        aria-label="Contact Us"
      >
        Contact us
      </Link>
    </div>
  );
}
