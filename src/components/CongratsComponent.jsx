import React from "react";
import Lottie from "lottie-react";
import congrats from "../assets/lottie/congrats.json";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./button/ButtonComponent";

const CongratsComponent = ({ score }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid place-items-center">
        <div className="h-screen w-full max-w-[600px] overflow-hidden flex flex-col gap-5 justify-center items-center p-10">
          <h1 className="text-[25px] lg:text-[60px] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#eec746] to-[#d7cc52]">
            congratulations
          </h1>
          <div className="w-[200px] md:w-[400px]">
            <Lottie animationData={congrats} />
          </div>

          <div className="text-[25px] font-bold text-[#424242]">
            Score:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eec746] to-[#d7cc52]">
              {score}
            </span>
          </div>
          <ButtonComponent
            label="Home"
            onClick={() => navigate("/")}
            className="w-full  bg-gradient-to-tr from-[#eec746] to-[#d7cc52]"
            background="text-white"
          />
        </div>
      </div>
    </>
  );
};

export default CongratsComponent;
