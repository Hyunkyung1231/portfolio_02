import React from "react";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className={`flex h-full flex-col justify-around gap-[20px] py-[80px]`}>
      <div className="h-[30px] w-[30px]">
        <Image
          className="rounded-full"
          src="/icon/rallit.png"
          alt="rallit"
          width={500}
          height={500}
        />
      </div>
      <div className="h-[30px] w-[30px]">
        <Image
          className="rounded-full"
          src="/icon/rallit.png"
          alt="rallit"
          width={500}
          height={500}
        />
      </div>
      <div className="h-[30px] w-[30px]">
        <Image
          className="rounded-full"
          src="/icon/rallit.png"
          alt="rallit"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default SideBar;
