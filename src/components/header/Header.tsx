import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Header() {
  return (
    <div className="w-full h-auto bg-gradient-to-r from-[#B5DAEA]/80 to-[#C5F0F8]/40">
      <div className="flex items-center mx-5 md:mx-15 lg:mx-16 justify-between flex-col md:flex-row">
        <div>
          <p className="flex items-center gap-4 text-[#2D90DB] text-[0.8rem] md:text-[1rem]">
            <  IoIosArrowRoundForward size={40} />
            Welcome to Imagen Redefined Media
          </p>

          <h1 className="font-bold text-[1.5rem] md:text-[2rem] xl:text-[2.5rem]">
            Elevate Your Brand with Our Stunning Print Solutions.
          </h1>

          <ul className="flex gap-4 items-center text-sm md:text-[1rem] lg:text-[1.1rem] mt-3">
            <li>
              <Link
                href="#services"
                className="rounded-md px-2 py-2 bg-[#2D90DB] text-white hover:text-[#2D90DB] hover:border-[#2D90DB] hover:bg-transparent transition duration-300"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=" flex gap-5  items-center text-[#2D90DB] hover:underline hover:bg-[#2D90DB] hover:text-white transition duration-300"
              >
                Visit Shop
                 <  IoIosArrowRoundForward size={40} /> 
              </Link>
            </li>
          </ul>
        </div>

        <Image
          src="/assets/roland-print.svg"
          alt="printing_large_format"
          width={500}
          height={250}
          priority
          className="w-[300px] lg:w-[450px] xl:w-[500px]"
        />
      </div>
    </div>
  );
}
