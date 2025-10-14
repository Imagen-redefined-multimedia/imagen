"use client";

import React from "react";
import { aboutUs, support, social } from "./footerItems";
import { motion,easeOut } from "framer-motion";

export default function FooterLinks() {
  const responsive = "font-semibold text-[0.85rem] md:text-[1.1rem]";
  const footerLinks = "p-2 font-light text-[0.75rem] md:text-[0.85rem] lg:text-[0.95rem]";

  // Variants for each section with a stagger effect
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: easeOut }
    }
  };

  return (
    <motion.div
      className="flex justify-evenly mt-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* About Us */}
      <motion.div variants={itemVariants}>
        <h3 className={responsive}>About Us</h3>
        <ol className={footerLinks}>
          {aboutUs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </motion.div>

      {/* Support */}
      <motion.div variants={itemVariants}>
        <h3 className={responsive}>Support</h3>
        <ol className={footerLinks}>
          {support.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </motion.div>

      {/* Social */}
      <motion.div variants={itemVariants}>
        <h3 className={responsive}>Social</h3>
        <ol className={footerLinks}>
          {social.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </motion.div>
    </motion.div>
  );
}
