import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <button className="bg-logoGreen text-zinc-50 font-bold rounded-xl px-6 py-3 text-lg hover:bg-darkGreen transition-all w-fit h-fit">
      {children}
    </button>
  );
};

export default PrimaryButton;
