import { useRouter } from "next/navigation";
import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  const router = useRouter();
  return (
    <button
      className="bg-logoGreen text-zinc-50 font-bold rounded-xl px-6 py-3 text-lg hover:bg-green-900 transition-all w-fit h-fit"
      onClick={() => router.push("/enquire")}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
