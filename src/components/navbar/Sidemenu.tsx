"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

export default function SideNav() {

   const sideMenuRef = useRef();
   
   const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
   <>
     {/* ******* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white:"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={"/pictures/close-black.png"} alt="closing" width={24} height={24} className="w-5" />
          </div>
          <li>
            <Link onClick={closeMenu} href={"#top"}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link  onClick={closeMenu} href={"#about"}>
              {" "}
              About Me
            </Link>
          </li>
          <li>
            <Link  onClick={closeMenu} href={"#services"}>
              {" "}
              Services
            </Link>
          </li>
          <li>
            <Link  onClick={closeMenu} href={"#work"}>
              {" "}
              My Work
            </Link>
          </li>
          <li>
            <Link  onClick={closeMenu} href={"#contact"}>
              {" "}
              Contact Me
            </Link>
          </li>
        </ul>
   </>
  );
 }
