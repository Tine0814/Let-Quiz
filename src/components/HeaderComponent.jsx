import React from "react";

const HeaderComponent = () => {
  return (
    <>
      <header className="p-5 h-[100px] justify-center w-full flex items-end">
        <div className="flex flex-col ">
          <h1 className="text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f55f81] to-[#eb876f]">
            Let Quiz;
          </h1>
          <h1 className="text-[18px] text-[#5b5959]">Be the Best</h1>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
