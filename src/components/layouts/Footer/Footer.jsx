import React from 'react';
import { ICONS, IMAGES } from '../../../config';

const Footer = () => {
  return (
    <footer className="bg-black-232631 p-[100px] relative h-[384px]">
      <img src={IMAGES.LOGO} alt="logo" className="absolute bottom-0 right-10" width={277} height={314} />
      <div className="flex gap-[100px]">
        <div>
          <div className="flex items-center gap-[5px] mb-3">
            <img src={ICONS.LOGOWHITE} alt="logo" />
            <h5 className="text-white font-semibold text-2xl">Goout</h5>
          </div>
          <p className="text-white-E0E7FA font-normal text-base">
            Copyright © 2022.
            <br />
            {' '}
            All Rights Reserved.
          </p>
        </div>
        <div className="ml-3">
          <p className="text-white font-medium text-base mb-4">Page Menus</p>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">My Account</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white font-medium text-base mb-4">Our Product</p>
          <ul>
            <li>
              <a href="/">Booking Flight</a>
            </li>
            <li>
              <a href="/">Booking Hotels</a>
            </li>
            <li>
              <a href="/">Trip Package</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white font-medium text-base mb-4">Social Media</p>
          <ul>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Tiktok</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
