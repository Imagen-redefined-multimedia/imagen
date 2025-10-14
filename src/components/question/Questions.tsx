"use client";

import React from "react";
import QuestionTag from "./QuestionTag";
import Qcard from "./Qcard";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ease: "easeIn" | "easeOut" | "easeInOut" | "linear" = "easeOut";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};


export default function Questions() {
  return (
    <>
      {/* Heading Section */}
      <motion.div
        className="text-center mt-5 md:mt-10 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-[#2D90DB] text-base md:text-lg font-light mb-2">
          FAQ&apos;s
        </h2>
        <h1 className="text-[1.2rem] md:text-[1.5rem]">
          <span className="font-black">QUESTION:</span>
          <span className="text-[#2D90DB] font-bold"> LOOK HERE</span>
        </h1>
      </motion.div>

      {/* Container with Gradient and Background Image */}
      <div
        className="relative mt-10 md:mt-12 text-center bg-gradient-to-r from-[#B5DAEA]/80 to-[#C5F0F8]/30"
        style={{ minHeight: "350px" }}
      >
        {/* Background Image */}
        <div className="absolute top-0 right-0 h-full w-[40%] md:w-[50%] pointer-events-none select-none opacity-30 z-0 md:block">
          <Image
            src="/assets/logo.svg"
            alt="background decoration"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* FAQ List and Qcard */}
        <motion.div
          className="relative z-10 py-8 mx-5 md:mx-12 lg:mx-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <motion.div
              className="w-full md:w-[45%]"
              variants={containerVariants}
            >
              {[
                {
                  question: "How do I keep track of my order?",
                  answer: "You get feedback on the progress",
                },
                {
                  question: "Can I print my custom dimensions?",
                  answer: "Definitely, we are able to print them",
                },
                {
                  question: "How do I make an order?",
                  answer: "You have to pay upfront amount of 50% of what you are charged",
                },
                {
                  question: "Do you offer binding and services?",
                  answer: "Yes, we offer a variety of services with those included",
                },
                {
                  question: "Do you offer steel fabrication services?",
                  answer:
                    "Indeed, we also can help you with design the 3D model of the desired project",
                },
              ].map(({ question, answer }, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <QuestionTag question={question} answer={answer} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-6 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
            >
              <Qcard />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
