import React from "react";

interface InputBoxProps {
  placeholder: string;
}

const InputBox = ({ placeholder }: InputBoxProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-xl py-3 px-3 outline-none text-zinc-400 placeholder-zinc-400 text-lg bg-zinc-100 h-fit shadow-inner"
    ></input>
  );
};

export default InputBox;
