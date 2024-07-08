"use client";
import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import CopyModal from "../CopyModal/CopyModal";

const CopyButton = ({ text }: { text: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        onClick={() => {
          handleCopyClick(text);
        }}
      >
        <FiCopy size={18} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-[24px] left-0 z-50 w-full px-[500px]">
            <CopyModal />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CopyButton;
