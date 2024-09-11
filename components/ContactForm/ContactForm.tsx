import React from "react";
import Input from "@/components/Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "@/components/Button/Button";
import { BiSolidChevronRightCircle } from "react-icons/bi";

const ContactForm = () => {
  return (
    <div className="flex h-full w-full items-center justify-end py-[20px]">
      <div className="flex">
        <form className="flex flex-col gap-[10px]">
          <div className="flex w-full gap-[10px]">
            <div className="flex h-[50px] w-[180px]">
              <Input
                className="flex gap-[5px] rounded-lg outline-none"
                placeholder="name"
                type="name"
              />
            </div>
            <div className="flex h-[50px] w-[180px]">
              <Input
                className="flex gap-[5px] rounded-lg outline-none"
                placeholder="email"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex h-[50px] w-[370px]">
              <Input
                className="flex gap-[5px] rounded-lg outline-none"
                placeholder="subject"
                type="text"
              />
            </div>
            <div className="flex h-[200px] w-[370px]">
              <TextArea
                className="flex resize-none gap-[5px] rounded-lg outline-none"
                placeholder="message"
              />
            </div>
          </div>
          <div className="w-[180px]">
            <Button className="flex gap-[5px] rounded-lg">
              <span className="text-[15px]">Send</span>
              <BiSolidChevronRightCircle size={20} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
