import React from "react"; 
import { FlipWords } from "../ui/flip-words";
import { MovingBorderDemo } from "../Button/button.jsx";
import { MovingBorder} from "../Button/button2.jsx";

export function FlipWordsDemo() {
  const words = ["accessible","empowering","inclusive"];

  return (
    <div className="text-center p-5 sm:p-8">
            <h1 className="text-4xl p-3 font-medium drop-shadow sm:text-5xl dark:text-white dark:drop-shadow mt-16 ">Making tech <FlipWords words={words} /> for <br />
            <h1 className="pt-5">underrepresented communities</h1></h1>
            {/* <button className="btn bg-[#f0f0f0] m-2 p-2 w-30 rounded-xl hover:bg-[#FFF0DA] text-medium sm:w-40 sm:p-2 sm:m-3 font-semibold">Get Started</button>
            <button className="btn bg-[#f0f0f0] m-2 p-2 w-30 rounded-xl hover:bg-[#FFF0DA] text-medium sm:w-40 sm:p-2 sm:m-3 font-semibold">Learn More</button> */}
           <div className="pt-6 flex mx-96 px-48 ">
           <MovingBorderDemo/>
           &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <MovingBorder/>
           </div>
         
        
        </div>
  );
}



