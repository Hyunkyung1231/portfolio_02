import React, { ReactNode } from "react";

interface InputProps {
  children?: ReactNode;
  className?: string;
  placeholder?: string;
  type?: string;
}

const Input = ({ type, placeholder, className, ...props }: InputProps) => {
  return (
    <div className="flex h-full w-full">
      <input
        placeholder={placeholder}
        type={type}
        {...props}
        className={`h-full w-full bg-primary-40 pl-[15px] text-primary-60 ${className} placeholder:text-primary-70`}
      />
    </div>
  );
};

export default Input;
