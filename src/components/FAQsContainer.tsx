import React from "react";

interface FAQsContainer {
  children: React.ReactNode;
  title: string;
}

const FAQsContainer = ({ children, title }: FAQsContainer) => {
  return (
    <div className="flex gap-6 md:gap-24 border-t-darkGreen border-t-2 p-4 md:p-16">
      <p className="flex flex-1 font-satoshi font-bold text-darkGreen text-[12px] md:text-3xl">
        {title}
      </p>
      <p className="flex flex-[4_1_0%] text-darkGreen text-[10px] md:text-xl">
        {children}
      </p>
    </div>
  );
};

export default FAQsContainer;
