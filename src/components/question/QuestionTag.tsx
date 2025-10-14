"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TagProps {
  question: string;
  answer: string;
}

const QuestionTag: React.FC<TagProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the answer container
  const answerVariants = {
    collapsed: { opacity: 0, height: 0, overflow: "hidden" },
    expanded: { opacity: 1, height: "auto", overflow: "visible" },
  };

  return (
    <div className="relative inline-block lg:mx-10 px-2 py-2 transition-colors duration-500">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`answer-${question}`}
        className={`flex bg-[#2D90DB] w-68 md:w-80 lg:w-88 text-[0.9rem] md:text-[1.12rem] rounded-t-md px-2 py-1 justify-between items-center
          ${
            isOpen
              ? "bg-blue-100 text-[#2D90DB] rounded-b-none"
              : "text-white"
          }
          transition-colors duration-500 ease-in-out`}
      >
        {question}
        <span className="font-semibold text-white">
          {isOpen ? "-" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            key="content"
            id={`answer-${question}`}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={answerVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-68 md:w-80 lg:w-88 bg-blue-100 px-2 py-2 rounded-b-md text-[#2D90DB] cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionTag;
