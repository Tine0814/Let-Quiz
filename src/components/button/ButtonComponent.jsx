import React from "react";
import { motion } from "framer-motion";

const ButtonComponent = ({ onClick, label }) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="bg-white mt-5 py-3 rounded-xl shadow-md"
        onClick={onClick}
      >
        <span className="text-[25px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#eec746] to-[#d7cc52]">
          {label}
        </span>
      </motion.button>
    </>
  );
};

export default ButtonComponent;
