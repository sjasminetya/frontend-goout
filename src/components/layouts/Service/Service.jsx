import React from 'react';
import { ICONS } from '../../../config';

const Service = () => {
  return (
    <div className="w-full bg-gray-FAFAFA rounded-3xl grid grid-cols-12 mb-[120px]">
      <div className="col-span-5 pl-[60px] pt-[101px]">
        <h6 className="text-blue-3258E8 font-semibold text-base mb-1">Our Service</h6>
        <h1 className="text-black-232631 font-semibold text-4xl">
          We Offer
          <br />
          {' '}
          Best Service
        </h1>
      </div>
      <div className="col-span-7">
        <div className="grid grid-cols-2 gap-[60px] py-10 pr-[80px]">
          <div className="flex gap-[30px]">
            <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center">
              <img src={ICONS.WEATHER} alt="waether" />
            </div>
            <div className="gap-1">
              <h6 className="text-black-232631 font-semibold text-xl">Calculated Weather</h6>
              <p className="text-gray-7B7B7B text-base font-normal">A new way to travel by air the easy and fast way.</p>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center">
              <img src={ICONS.PLANE} alt="plane" />
            </div>
            <div className="gap-1">
              <h6 className="text-black-232631 font-semibold text-xl">Best Experience Flight</h6>
              <p className="text-gray-7B7B7B text-base font-normal">A new way to travel by air the easy and fast way. </p>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center">
              <img src={ICONS.CITY} alt="city" />
            </div>
            <div className="gap-1">
              <h6 className="text-black-232631 font-semibold text-xl">Best Place to Stay</h6>
              <p className="text-gray-7B7B7B text-base font-normal">A new way to travel by air the easy and fast way.</p>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center">
              <img src={ICONS.HAND} alt="hand" />
            </div>
            <div className="gap-1">
              <h6 className="text-black-232631 font-semibold text-xl">Easy-To-Use</h6>
              <p className="text-gray-7B7B7B text-base font-normal">A new way to travel by air the easy and fast way.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
