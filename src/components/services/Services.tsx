"use client";
import React from "react";
import Image from "next/image";
import ServiceTags from "./Services_tags";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div id="services" className="mx-5 md:mx-16 mt-5">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="ml-4 text-[1.3rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] font-bold text-[#2B6F9F] underline"
      >
        OUR SERVICES
      </motion.h1>

      <div className="flex flex-col md:flex-row mt-5 items-center md:ml-20 gap-6 lg:gap-10">
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src={"/assets/logo.svg"}
            alt={"services logo"}
            width={250}
            height={250}
            priority
            className="w-[100px] md:w-[200px] mt-5 xl:w-[250px]"
          />
        </motion.div>

        {/* Animated Service List */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="space-y-1.5 lg:space-y-2"
        >
          {[
            { number: "1", tag: "GRAPHIC DESIGN", ml: "" },
            { number: "2", tag: "SIGNAGE & BRANDING", ml: "md:ml-7.5 lg:ml-9" },
            { number: "3", tag: "ALL SIGN TYPES", ml: "md:ml-10 lg:ml-16" },
            { number: "4", tag: "CORPORATE GIFTING", ml: "md:ml-7.5 lg:ml-9" },
            { number: "5", tag: "AERIAL ADVERTISING", ml: "" },
          ].map(({ number, tag, ml }) => (
            <motion.li
              key={number}
              className={ml}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ServiceTags number={number} tag={tag} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
