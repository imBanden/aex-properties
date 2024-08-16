import React from "react";

interface FAQsContainer {
  children: React.ReactNode;
  title: string;
}

const FAQsContainer = ({ children, title }: FAQsContainer) => {
  return (
    <div className="flex gap-24 border-t-darkGreen border-t-2 p-16">
      <p className="flex flex-1 font-satoshi font-bold text-darkGreen text-3xl">
        {title}
      </p>
      <p className="flex flex-[4_1_0%] text-darkGreen text-xl">{children}</p>
    </div>
  );
};

export default FAQsContainer;
