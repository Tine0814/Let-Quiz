import React from "react";
import { motion } from "framer-motion";

const ButtonComponent = ({ onClick, label, className, background }) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className={` bg-white mt-5 py-3 px-2 rounded-xl shadow-md ${className}`}
        onClick={onClick}
      >
        <span
          className={`text-[25px] font-bold text-transparent ${background} `}
        >
          {label}
        </span>
      </motion.button>
    </>
  );
};

export default ButtonComponent;
