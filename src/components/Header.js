import React from 'react';
import { NavLink } from 'react-router-dom';
import CompanyName from '../ui/CompanyName';

const Header = () => {
  return (
    <header className="flex  items-center justify-between border-b border-stone-200 px-8 py-3 uppercase  ">
      <div className=" flex flex-row items-center gap-4">
        <img src="/car.svg" alt="Logo" width={61} height={34} />
        <CompanyName type="small" />
      </div>
      <nav className="  flex flex-row items-center gap-6 text-2xl font-semibold tracking-wide">
        <NavLink to="/" className="hover:text-btnHover hover:underline">
          Home
        </NavLink>
        <NavLink to="/catalog" className="hover:text-btnHover hover:underline">
          Advertising
        </NavLink>
        <NavLink
          to="/favorites"
          className="hover:text-btnHover hover:underline"
        >
          My favorite adverts
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
