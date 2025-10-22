"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  const navStyle =
    "bg-[#2D90DB] text-white font-semibold rounded-md px-2 py-1";
  const sideNavStyle = "border-b border-gray-500 w-full font-Ovo";

  const sections = useMemo(
    () => ["top", "services", "projects", "about", "contact"],
    []
  );
  const mobileSections = useMemo(
    () => ["top", "about", "services", "projects", "contact"],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  const getNavClass = (id: string, isMobile = false) =>
    activeSection === id
      ? navStyle
      : isMobile
      ? "font-light text-black"
      : "text-white font-light hover:bg-[#2D90DB]/70 hover:text-white transition px-2 py-1 rounded-md";

  return (
    <div className="w-full h-auto bg-gradient-to-r from-[#B5DAEA]/80 to-[#C5F0F8]/30">
      <div className="mx-1.5 lg:mx-10">
        <div className={`w-full right-0 top-0 ${isScroll ? "fixed z-10" : ""}`}>
          {/* Animate navbar entrance (optional) */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`w-full flex items-center justify-between px-2 lg:px-4 py-2 ${
              isScroll ? "bg-[#2D90DB]/60 backdrop-blur-md shadow-sm" : ""
            }`}
          >
            {/* Logo */}
            <div>
              <Link href="/">
                <Image
                  src="/pictures/Logo.svg"
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
                  isScroll ? "" : "bg-[#2D90DB]/80 shadow-sm"
                }`}
              >
                {sections.map((id) => (
                  <li key={id}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA WhatsApp Button */}
            <Link
              href="https://wa.me/26656339864?text=Hi%2C%20I'm%20interested%20in%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center text-center gap-2 px-3 text-sm lg:text-md xl:text-lg py-1.5 lg:py-2.5 border border-opacity-50 rounded-full md:ml-4 hover:bg-white hover:text-[#2D90DB] transition cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                Request a Quote
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                aria-label="Open mobile menu"
                onClick={() => setIsMenuOpen(true)}
              >
                <Image
                  src="/pictures/menu-black.png"
                  alt="menu"
                  width={25}
                  height={25}
                  className="w-6"
                />
              </button>
            </div>

            {/* AnimatePresence handles mounting/unmounting */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.ul
                  key="mobile-menu"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex md:hidden flex-col gap-4 py-16 px-5 fixed top-0 bottom-0 right-0 w-64 z-50 h-screen bg-blue-200"
                >
                  {/* Close button */}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label="Close mobile menu"
                    onClick={() => setIsMenuOpen(false)}
                    onKeyDown={(e) => e.key === "Enter" && setIsMenuOpen(false)}
                    className="absolute right-4 top-6 border rounded-md p-1 cursor-pointer"
                  >
                    <Image
                      src="/pictures/close-black.png"
                      alt="closing"
                      width={24}
                      height={24}
                      className="w-5"
                    />
                  </div>

                  {/* Mobile nav items */}
                  {mobileSections.map((id) => (
                    <li key={id} className={sideNavStyle}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
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
                      </motion.button>
                    </li>
                  ))}

                  {/* WhatsApp Request a Quote Button in Mobile Menu */}
                  <li className="mt-6">
                    <Link
                      href="https://wa.me/26656339864?text=Hi%2C%20I'm%20interested%20in%20a%20quote"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-opacity-50 rounded-full bg-white text-[#2D90DB] hover:bg-[#2D90DB] hover:text-white transition cursor-pointer font-semibold"
                      >
                        <FaWhatsapp className="text-xl" />
                        Request a Quote
                      </motion.div>
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.nav>
        </div>
      </div>
    </div>
  );
}
