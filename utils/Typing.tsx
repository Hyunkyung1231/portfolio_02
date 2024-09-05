"use client";
import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  });

  return <p className="">{displayedText}</p>;
};

export default TypingEffect;
