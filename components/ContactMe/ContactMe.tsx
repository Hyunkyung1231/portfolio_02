import React from "react";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";

const ContactMe = () => {
  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full flex-col gap-[20px]">
        <div className="flex items-center gap-[20px]">
          <div className="text-primary-30">
            <FiPhoneCall size={30} />
          </div>
          <div>
            <p className="text-[23px] font-medium text-primary-60">PHONE</p>
            <p className="text-[16px] font-medium text-primary-70">
              010-8748-4337
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="text-primary-30">
            <FiMail size={30} />
          </div>
          <div>
            <p className="text-[23px] font-medium text-primary-60">E-MAIL</p>
            <p className="text-[16px] font-medium text-primary-70">
              gusrud4337@naver.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
