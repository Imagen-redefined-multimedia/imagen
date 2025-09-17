"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top"); // track active section

  const navStyle = "bg-blue-200 rounded-md p-1";
  const sideNavStyle = "border-b border-gray-500 w-full font-Ovo";

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);

      const sections = ["top", "services", "projects", "about", "contact"];
      let current = "top";
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function with offset for sticky navbar
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // adjust offset to navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMenuOpen(false); // close mobile menu
    }
  };

  const getNavClass = (id, isMobile = false) =>
    activeSection === id
      ? navStyle
      : isMobile
      ? "font-light text-gray-800"
      : "text-white font-light";

  const sections = ["top", "services", "projects", "about", "contact"];
  const mobileSections = ["top", "about", "services", "projects", "contact"];

  return (
    <div className="w-full h-auto bg-blue-300">
      <div className="mx-1.5 lg:mx-10">
        <div className={`w-full right-0 top-0 ${isScroll ? "fixed z-10" : ""}`}>
          <nav
            className={`w-full flex items-center justify-between px-2 lg:px-4 py-2 ${
              isScroll
                ? "bg-blue-250 bg-opacity-50 backdrop-blur-md shadow-sm"
                : ""
            }`}
          >
            {/* Logo */}
            <div>
              <Link href={"/"}>
                <Image
                  src={"/pictures/Logo.svg"}
                  alt="logo"
                  width={300}
                  height={300}
                  priority
                  className="w-[250px] md:w-[300px] cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div>
              <ul
                className={`hidden md:flex text-sm lg:text-md xl:text-lg items-center justify-evenly gap-3 lg:gap-8 rounded-full md:px-7 md:py-1.5 lg:py-2.5 ${
                  isScroll ? "" : "bg-[#70b5e4] shadow-sm bg-opacity-10"
                }`}
              >
                {sections.map((id) => (
                  <li key={id}>
                    <button
                      className={getNavClass(id)}
                      onClick={() => scrollToSection(id)}
                    >
                      {id === "top"
                        ? "Home"
                        : id === "projects"
                        ? "Projects"
                        : id === "about"
                        ? "About Us"
                        : id.charAt(0).toUpperCase() + id.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={() => scrollToSection("contact")}
                className="hidden md:block items-center text-center gap-3 px-3 text-sm lg:text-md xl:text-lg py-1.5 lg:py-2.5 border border-opacity-50 rounded-full md:ml-4"
              >
                Request a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)}>
                <Image
                  src={"/pictures/menu-black.png"}
                  alt="menu"
                  width={25}
                  height={25}
                  className="w-6"
                />
              </button>
            </div>

            {/* Mobile Menu */}
            <ul
              className={`flex md:hidden flex-col gap-4 py-16 px-5 fixed top-0 bottom-0 w-48 z-50 h-screen bg-blue-200 transition-transform duration-500 ${
                isMenuOpen ? "right-0" : "-right-64"
              }`}
            >
              <div
                className="absolute right-4 top-6 border rounded-md p-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src={"/pictures/close-black.png"}
                  alt="closing"
                  width={24}
                  height={24}
                  className="w-5"
                />
              </div>
              {mobileSections.map((id) => (
                <li key={id} className={sideNavStyle}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={getNavClass(id, true)}
                  >
                    {id === "top"
                      ? "Home"
                      : id === "projects"
                      ? "My Work"
                      : id === "about"
                      ? "About Me"
                      : id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
