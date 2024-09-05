import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`hover_button flex h-[50px] w-full items-center justify-center bg-primary-30 text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
