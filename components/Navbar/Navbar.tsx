import React from "react";

const DETAIL_NAV = [
  { idx: 0, name: "Home" },
  { idx: 1, name: "About" },
  { idx: 2, name: "Project" },
  { idx: 3, name: "Contact" },
];

const Navbar = ({ element }: any) => {
  return (
    <div className="flex h-[80px] w-full items-center bg-primary-20 px-[120px] py-[20px]">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="text-[25px] font-extrabold text-primary-60">이현경</div>
        <div className="flex gap-[25px]">
          {DETAIL_NAV.map(({ idx, name }) => (
            <div
              className="cursor-pointer"
              key={idx}
              onClick={element[idx].onMoveToElement}
            >
              <p className="hover_navbar text-[16px] text-primary-70">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
