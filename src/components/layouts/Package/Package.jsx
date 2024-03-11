import React from 'react';
import { IMAGES } from '../../../config';
import Button from '../../elements/Button/Button';

const Package = () => {
  return (
    <div className="flex justify-center gap-[60px] mb-[120px]">
      <div>
        <div className="flex items-center gap-[30px]">
          <div className="border-4 border-blue-3258E8 rounded-3xl p-3 w-[304px] h-[404px]">
            <img src={IMAGES.POPULAR1} alt="popular" width="100%" height="100%" className="rounded-3xl" />
          </div>
          <div className="border-4 border-white rounded-3xl p-3 w-[304px] h-[404px]">
            <img src={IMAGES.POPULAR2} alt="popular" width="100%" height="100%" className="rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="py-[38px]">
        <p className="text-blue-3258E8 font-semibold text-base">Our Package</p>
        <h1 className="text-black-232631 font-semibold text-4xl mb-3">Popular Trip Packages</h1>
        <p className="text-base text-gray-7B7B7B font-normal">
          A new way to travel by air the easy and fast way.
          <br />
          {' '}
          Try it now by filling out the form below!
        </p>
        <div className="flex items-center my-[30px] gap-[26px]">
          <div>
            <h6 className="text-black-232631 font-semibold text-xl">120+</h6>
            <p className="text-base font-normal text-gray-7B7B7B">Destination</p>
          </div>
          <div>
            <h6 className="text-black-232631 font-semibold text-xl">560+</h6>
            <p className="text-base font-normal text-gray-7B7B7B">Luxury Hotels</p>
          </div>
          <div>
            <h6 className="text-black-232631 font-semibold text-xl">135K+</h6>
            <p className="text-base font-normal text-gray-7B7B7B">Happy Tourists</p>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <Button className="bg-blue-3258E8 text-white font-medium text-lg" title="Choose Package" />
          <Button className="bg-white text-gray-7B7B7B font-medium text-lg" title="View More" />
        </div>
      </div>
    </div>
  );
};

export default Package;
