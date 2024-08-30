import React, { useRef } from "react";

const Navigators = () => {
  return (
    <div className="w-[100vw] flex justify-center h-10">
      <div className="flex justify-between min-w-[30vw] border">
        <div className=" rounded-[50px] bg-red-200 min-w-10 p-[14px] items-center flex justify-left w-[10px] hover:w-[75px] transition-all duration-1000 overflow-hidden">
          <p className="mr-[1px] overflow-hidden">Home</p>
        </div>
        <div className=" rounded-[50px] bg-red-200 min-w-10 p-[16px] items-center flex justify-left w-[10px] hover:w-[105px] transition-all duration-1000 overflow-hidden">
          <p className="mr-[1px] overflow-hidden">Experence</p>
        </div>

        <div className=" rounded-[50px] bg-red-200 min-w-10 p-[15px] items-center flex justify-left w-[10px] hover:w-[70px] transition-all duration-1000 overflow-hidden">
          <p className="mr-[1px] overflow-hidden">Skills</p>
        </div>
        <div className=" rounded-[50px] bg-red-200 min-w-10 p-[15px] items-center flex justify-left w-[10px] hover:w-[90px] transition-all duration-1000 overflow-hidden">
          <p className="mr-[1px] overflow-hidden">Projects</p>
        </div>
        <div className=" rounded-[50px] bg-red-200 min-w-10 p-[14px] items-center flex justify-left w-[10px] hover:w-[110px] transition-all duration-1000 overflow-hidden">
          <p className="mr-[1px] overflow-hidden">Qualification</p>
        </div>
      </div>
    </div>
  );
};

export default Navigators;
