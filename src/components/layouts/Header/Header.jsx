import React from 'react';
import { ICONS } from '../../../config';
import Button from '../../elements/Button/Button';

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-[30px]">
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
  );
};

export default Header;
