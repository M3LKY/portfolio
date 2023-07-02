import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

import './index.scss'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='menu bg z-10 fixed w-full h-[80px] flex justify-between items-center px-4 text-yellow-200'>
      <div>
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link className='active' to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link className='active' to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className='active' to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link className='active' to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars className='active' size="30" /> : <FaTimes className='active' size="30" />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link className='active' onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className='active py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='active py-6 text-4xl'>
          {' '}
          <Link className='active' onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='active py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
