import React from "react";
import { useNavigate } from "react-router-dom"; 

const Test = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #111a19, #1b2928, #2a3d3c)",
      }}
    >
      <div className="flex flex-col items-center justify-center text-white mr-[25vw]">
        <div>
          <h1 className="text-2xl mb-[8vh]">Hi, This is a psychometric test</h1>
          <p className="text-2xl w-[40vw]">
            This will help us to measure your various psychological attributes
            such as cognitive abilities, personality traits, attitudes, and
            interests to provide you the best career options.
          </p>
        </div>

        <div className="flex mt-[10vh] gap-2">
          <button
            className="bg-none hover:bg-red-400 border-red-400 border-2 w-[15vw] rounded-sm h-[6vh]"
            onClick={handleClose}
          >
            Close
          </button>
          <button className="bg-[#42acbc] w-[15vw] rounded-sm h-[6vh]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
