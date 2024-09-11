import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import ContactForm from "../ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-[70px] bg-primary-20 px-[220px] py-[100px]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[40px] font-semibold text-primary-60">Contact Me</p>
        <p className="text-[17px] font-semibold text-primary-60">
          Get In Touch
        </p>
      </div>
      <div className="flex h-full w-full items-center justify-center gap-[20px] px-[100px]">
        <ContactMe />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
