import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const ViewLevelComponent = (props) => {
  const {
    onClick,
    level,
    title,
    description,
    background,
    img,
    lottie,
    button,
  } = props;
  return (
    <>
      <div
        className={`text-white ${background} h-screen w-full absolute top-0 left-0 z-20`}
      >
        <div className="grid place-content-center">
          <div className="p-5 h-[70px] w-full md:p-0 md:mt-10 flex items-end">
            <div
              className="border-2 rounded-full text-white grid place-content-center w-[30px] h-[30px]"
              onClick={onClick}
            >
              <CloseIcon />
            </div>
          </div>

          <div className="flex flex-col gap-10 max-w-[600px] ">
            <div className="flex justify-center">
              <img src={img} alt="" width={250} />
            </div>
            {lottie}
            <div className="px-6 flex flex-col gap-3">
              <div>
                <h1 className="text-[18px] font-bold">{level}</h1>
                <h1 className="text-[20px] font-extrabold">{title}</h1>
              </div>
              <div>
                <p className="text-[15px]">{description}</p>
              </div>

              {button}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewLevelComponent;
