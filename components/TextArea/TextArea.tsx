import React, { ReactNode } from "react";

interface TextAreaProps {
  children?: ReactNode;
  className?: string;
  placeholder?: string;
}

const TextArea = ({ className, placeholder, ...props }: TextAreaProps) => {
  return (
    <div className="flex h-full w-full">
      <textarea
        placeholder={placeholder}
        rows={10}
        {...props}
        className={`h-full w-full bg-primary-40 pl-[15px] pt-[10px] text-primary-60 ${className} placeholder:text-primary-70`}
      />
    </div>
  );
};

export default TextArea;
