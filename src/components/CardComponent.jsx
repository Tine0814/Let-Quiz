import React from "react";
import { motion } from "framer-motion";

const CardComponent = (props) => {
  const { background, level, titleCard, img, onClick, textColor, icon } = props;

  return (
    <>
      <div className="p-5 w-full flex justify-center ">
        <motion.div
          className={`relative cursor-pointer text-white w-full md:max-w-[700px] flex flex-col gap-2 p-5 ${background} rounded-3xl shadow-lg`}
          onClick={onClick}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="border-2 shadow-sm border-white h-[40px] w-[40px] flex justify-center items-center rounded-xl">
            {icon}
          </div>
          <div>
            <h1 className="text-[18px]">{level}</h1>
            <h1 className="text-[20px] font-extrabold">{titleCard}</h1>
          </div>
          <motion.div
            className={`absolute top-0 right-0 w-[150px] -mt-[35px] -mr-[16px] rounded-full overflow-hidden`}
            // animate={{
            //   y: [-20, 20, 0, 0, -20],
            // }}
            // transition={{
            //   y: { duration: 5, repeat: Infinity },
            // }}
          >
            <img src={img} alt="img" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default CardComponent;
