import React, { useState } from "react";

interface NavButtonProps {
  children: React.ReactNode;
  handleClick?: () => void;
}

const NavButtons = ({ children, handleClick }: NavButtonProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col font-satoshi font-bold text-logoGreen cursor-pointer w-fit"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
    >
      <p className="select-none">{children}</p>
      <div
        className={`bg-logoGreen transition-all duration-500 ${
          isHovering ? "w-full" : "w-0"
        } h-[2px]`}
      />
    </div>
  );
};

export default NavButtons;
