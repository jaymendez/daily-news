import React from 'react';

const Header = () => {
  return (
    <div className="fixed top-0 z-10 flex h-[70px] w-full items-center justify-between border-b-2 border-solid border-[#2d323c] bg-inherit px-5">
      <div className="w-32">
        <img src="/logo.png" alt="Daily.dev logo" className="w-full" />
      </div>
      <div className="flex items-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-l-xl bg-[#1d1f25] text-lg font-bold text-white">
          50
        </span>
        <div className="h-10 w-10 overflow-hidden rounded-xl">
          <img
            className="object-cover"
            src="https://dillionmegida.com/img/deee.jpg"
            alt="Dillion Megida's Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
