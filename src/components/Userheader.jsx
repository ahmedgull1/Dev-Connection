import React from 'react';
import { Link } from 'react-router-dom';

function Userheader() {


  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="bg-gradient-to-br from-blue-400 to-purple-600 w-full px-4 sm:px-12 py-4 flex justify-between items-center">
        <Link to={'/'}>
          <h1 className="text-white text-lg md:text-2xl lg:text-2xl  hover:text-[#CF901A]   cursor-pointer flex items-center">
            <i className="fas fa-code  mr-1"></i> DevConnection
          </h1>
        </Link>
        <ul className="  text-white flex gap-4 ">
          <Link to="/developers">
            <li className="cursor-pointer text-lg md:text-xl lg:text-xl hover:text-[#CF901A]">
              Developers
            </li>
          </Link>

          <Link to={'/Profile'}>
            <li className="cursor-pointer text-lg md:text-xl lg:text-xl hover:text-[#CF901A]">
              Profile
            </li>
          </Link>


        </ul>
      </nav>
    </header>
  );
}

export default Userheader;
