"use client"
import React, { useState, useEffect,useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidemenu from "./Sidemenu";

export default function Navbar() {

  const pathname = usePathname();
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <>
   <div className="flex w-10/10 right-0 top-0 items-center ">
  
     <nav className={`${
          isScroll
            ? "fixed  bg-[#2D90DB] bg-opacity-50 backdrop-blur-lg shadow-sm "
            : "w-full flex justify-between px-2 lg:px-8 xl:px-[3%] py-2 items-center"
           }`}>
     
        <Link href={"/"}>
          <Image
            src={"/pictures/Logo.svg"}
            alt="logo"
            width={300}
            height={300}
            className=" cursor-pointer mr-14"
          />
         </Link>
 
         <ul className={`hidden md:flex  items-center justify-evenly gap-6 lg:gap-8 rounded-full px-12 py-3 
             ${isScroll ? "" : "bg-[#70b5e4] shadow-sm bg-opacity-10 "}`}>
           <li>
              <Link className={`${pathname == "/" ? "bg-white rounded-md p-1 font-bold" : "font-light"}`} href={"#top"}>
              {" "}
              Home
            </Link>
           </li>
           <li>
            <Link className={`${pathname == "#services" ? "bg-white rounded-md p-1" : "font-light"}`} href={"#services"}>
              {" "}
              Services
            </Link>
          </li>
          <li>
            <Link className={`${pathname == "#projects" ? "bg-white rounded-md p-1" : "font-light"}`} href={"#projects"}>
              {" "}
              Projects
            </Link>
          </li>
          <li>
            <Link className={`${pathname == "#about" ? "bg-white rounded-md p-1" : "font-light"}`} href={"#about"}>
              {" "}
              About us
            </Link>
          </li>
          <li>
            <Link className={`${pathname == "#contact" ? "bg-white rounded-md p-1" : "font-light"}`} href={"#contact"}>
              {" "}
              Contact Us
            </Link>
          </li>
         </ul>
         
        
         <div className="flex items-center gap-4">
         
          <Link
            href={"#contact"}
            className="hidden lg:flex items-center gap-3 px-10
                    py-2.5 border border-gray-500 rounded-full ml-4"
          >
            {" "}
            Requst a Qoute{" "}
          
          </Link>
         
         <button className="block md:hidden ml-3" onClick={openMenu}>
             <Image 
              src={"/pictures/menu-black.png"}

              alt="theme"
              width={30}
              height={30}
              className="w-6"
              onClick={openMenu}
            /> 
          </button>
        </div>
        <Sidemenu/>
     </nav>
    </div>
    </>
  );
}
