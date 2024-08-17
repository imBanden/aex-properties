import React, { useState } from "react";

interface WordArray {
  title: string;
  content: string;
}

interface WordOptionsProps {
  data: WordArray[];
}

const WordOptions = ({ data }: WordOptionsProps) => {
  const [currentTitle, setCurrentTitle] = useState<number>(0);
  return (
    <div className="flex border-t-2 border-t-darkGreen pt-16 h-full">
      <div className="flex flex-col flex-1 font-satoshi text-sm md:text-4xl pr-4 md:pr-16 overflow-y-auto">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentTitle(index)}
            className={`font-bold pb-8 cursor-pointer hover:text-logoGreen transition-all ${
              currentTitle !== index ? "text-lightGreen" : "text-logoGreen"
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="flex flex-col flex-[3_1_0%] font-satoshi px-4 md:px-16">
        {data.map((item, index) => (
          <p key={index} className="text-sm md:text-2xl text-darkGreen">
            {currentTitle === index && item.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WordOptions;
