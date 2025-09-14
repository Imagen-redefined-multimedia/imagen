"use client"
import React, { useState, useEffect,useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {

  const pathname = usePathname();
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  
  const navStyle = "bg-blue-200 rounded-md p-1";
  const sideNavStyle= "border-b border-gray-500 w-full font-Ovo";

    const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
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
  <div className={"w-full h-auto bg-blue-300"}>
  <div className="mx-1.5 lg:mx-10">
   <div className={` w-10/10 right-0 top-0 ${isScroll ? "fixed z-10" :""} `}>
  
     <nav className={`w-full flex items-center justify-between px-2 lg:px-4  py-2  ${
          isScroll
            ? "  bg-blue-250 bg-opacity-50 backdrop-blur-md shadow-sm "
            : ""
           }`}>
       <div>
        <Link href={"/"}>
          <Image
            src={"/pictures/Logo.svg"}
            alt="logo"
            width={300}
            height={300}
	    priority
            className="w-[250px] md:w-[300px] cursor-pointer "
          />
         </Link>
 	</div>
 
	<div>
         <ul className={`hidden md:flex text-sm lg:text-md xl:text-lg  items-center justify-evenly gap-3 lg:gap-8 rounded-full md:px-7 md:py-1.5 lg:py-2.5 
             ${isScroll ? "" : "bg-[#70b5e4] shadow-sm bg-opacity-10 "}`}>
           <li>
              <Link className={`${pathname == "#top" ? `${navStyle}` : "text-white"}`} href={"#top"}>
              {" "}
              Home
            </Link>
           </li>
           <li>
            <Link className={`${pathname == "#services" ? `${navStyle}` : "text-white"}`} href={"#services"}>
              {" "}
              Services
            </Link>
          </li>
          <li>
            <Link className={`${pathname == "#projects" ? `${navStyle}` : "font-light"}`} href={"#projects"}>
              {" "}
              Projects
            </Link>
          </li>
          <li>
            <Link className={`${pathname == "#about" ? `${navStyle}` : "font-light"}`} href={"#about"}>
              {" "}
              About us
            </Link>
          </li>
          <li>
            <Link className={`${pathname == "#contact" ? `${navStyle}` : "font-light"}`} href={"#contact"}>
              {" "}
              Contact Us
            </Link>
          </li>
         </ul>
        </div>

	<div className={" "}>
          <Link
            href={"#contact"}
            className="hidden md:block items-center text-center gap-3 px-3 text-sm lg:text-md xl:text-lg  
                    py-1.5 lg:py-2.5 border border-opacity-50 rounded-full md:ml-4"
          >
            Request a Qoute
          </Link>
         </div>

	<div>
         <button className={`items-center block md:hidden ${!openMenu ? "hidden":"block"}`} onClick={openMenu}>
             <Image 
              src={"/pictures/menu-black.png"}

              alt="theme"
              width={25}
              height={25}
              className="w-6"
              onClick={openMenu}
            /> 
          </button>
	</div>
	 {/* ******* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-16 px-5 fixed -right-64
                top-0 bottom-0 w-48 z-50 h-screen bg-blue-200 transition duration-500 "
        >
          <div className="absolute right-4 top-6 border rounded-md p-1" onClick={closeMenu}>
            <Image src={"/pictures/close-black.png"} alt="closing" width={24} height={24} className="w-5" />
          </div>
          <li className={`${sideNavStyle}`}>
            <Link onClick={closeMenu} href={"#top"}>
              {" "}
              Home
            </Link>
          </li>
          <li className={`${sideNavStyle}`}>
            <Link onClick={closeMenu} href={"#about"}>
              {" "}
              About Me
            </Link>
          </li>
          <li className={`${sideNavStyle}`}>
            <Link onClick={closeMenu} href={"#services"}>
              {" "}
              Services
            </Link>
          </li> 
          <li className={`${sideNavStyle}`}>
            <Link onClick={closeMenu} href={"#work"}>
              {" "}
              My Work
            </Link>
          </li>
          <li className={`${sideNavStyle}`}>
            <Link onClick={closeMenu} href={"#contact"}>
              {" "}
              Contact Me
            </Link>
          </li>
        </ul>
    	 </nav>
       </div>
     </div>
   </div>
  </>
  );
}
