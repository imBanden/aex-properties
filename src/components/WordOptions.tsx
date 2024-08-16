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
      <div className="flex flex-col flex-1 font-satoshi text-4xl pr-16 overflow-y-auto">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentTitle(index)}
            className={`font-bold pb-8 cursor-pointer text-logoGreen hover:opacity-100 transition-all ${
              currentTitle !== index && "opacity-30"
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="flex flex-col flex-[3_1_0%] font-satoshi text-4xl px-16">
        {data.map((item, index) => (
          <p key={index} className="text-lg text-darkGreen">
            {currentTitle === index && item.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WordOptions;
