import React from "react";

interface InputBoxProps {
  placeholder: string;
}

const InputBox = ({ placeholder }: InputBoxProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-xl border-2 border-logoGreen py-3 px-3 outline-none text-logoGreen placeholder-logoGreen text-lg bg-zinc-50 h-fit"
    ></input>
  );
};

export default InputBox;
