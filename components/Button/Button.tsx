import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`flex h-[50px] w-full items-center justify-center border-4 border-black bg-gray-30 text-[50px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
