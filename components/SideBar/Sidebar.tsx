import React from "react";
import Image from "next/image";

const SideBar = () => {
  return (
    <>
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
    </>
  );
};

export default SideBar;
