import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ICONS } from '../../../config';
import Button from '../../elements/Button/Button';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="max-md:hidden flex justify-between items-center py-[30px]">
        <div className="flex items-center gap-[5px]">
          <img src={ICONS.LOGO} alt="logo" width={23} height={26} />
          <h5 className="font-semibold text-2xl text-blue-466BF3">Goout</h5>
        </div>
        <ul className="flex items-center gap-[30px]">
          <li>
            <a className="active" href="/">Home</a>
          </li>
          <li>
            <a href="/">Flight</a>
          </li>
          <li>
            <a href="/">Hotel</a>
          </li>
          <li>
            <a href="/">Travel Package</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <Button className="bg-light-blue-466BF31A text-blue-466BF3" title="My Account" />
      </header>
      <div className="max-md:flex justify-between items-center hidden py-[30px] relative">
        <div className="flex items-center gap-[5px]">
          <img src={ICONS.LOGO} alt="logo" width={23} height={26} />
          <h5 className="font-semibold text-2xl text-blue-466BF3">Goout</h5>
        </div>
        <RxHamburgerMenu className="cursor-pointer" size={30} onClick={() => setOpen(!open)} />
        <div className={['absolute -bottom-[300px] left-0 right-0 w-full z-50 bg-white transition-all ease-in-out duration-300 overflow-hidden', open ? 'max-h-[310px]' : 'max-h-0'].join(' ')}>
          <ul className="flex flex-col gap-5 my-5">
            <li>
              <a className="active" href="/">Home</a>
            </li>
            <li>
              <a href="/">Flight</a>
            </li>
            <li>
              <a href="/">Hotel</a>
            </li>
            <li>
              <a href="/">Travel Package</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
          <Button className="bg-light-blue-466BF31A text-blue-466BF3 mb-5" title="My Account" />
        </div>
      </div>
    </>
  );
};

export default Header;
