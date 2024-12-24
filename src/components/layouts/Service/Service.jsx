import React from 'react';
import { ICONS } from '../../../config';

const Service = () => {
  return (
    <div className="w-full bg-gray-FAFAFA rounded-3xl max-md:flex max-md:flex-col grid grid-cols-12 mb-[120px]">
      <div className="max-md:hidden col-span-5 max-md:pl-0 pl-[60px] pt-[101px]">
        <h6 className="text-blue-3258E8 font-semibold text-base mb-1">Our Service</h6>
        <h1 className="text-black-232631 font-semibold text-4xl">
          We Offer
          <br />
          {' '}
          Best Service
        </h1>
      </div>
      <div className="col-span-7">
        <div className="max-md:block hidden pt-[101px]">
          <h6 className="text-blue-3258E8 font-semibold text-base mb-1">Our Service</h6>
          <h1 className="text-black-232631 font-semibold text-4xl">
            We Offer
            <br />
            {' '}
            Best Service
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-[60px] py-10 max-md:pr-0 pr-[80px]">
          <div className="flex max-md:flex-col flex-row max-md:items-center items-start gap-[30px]">
            <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center">
              <img src={ICONS.WEATHER} alt="waether" />
            </div>
            <div className="gap-1">
              <h6 className="text-black-232631 font-semibold text-xl max-md:text-center text-left">Calculated Weather</h6>
              <p className="text-gray-7B7B7B text-base font-normal max-md:text-center text-left">A new way to travel by air the easy and fast way.</p>
            </div>
          </div>
          <div className="flex max-md:flex-col flex-row max-md:items-center items-start gap-[30px]">
            <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center">
              <img src={ICONS.PLANE} alt="plane" />
            </div>
            <div className="gap-1">
              <h6 className="text-black-232631 font-semibold text-xl max-md:text-center text-left">Best Experience Flight</h6>
              <p className="text-gray-7B7B7B text-base font-normal max-md:text-center text-left">A new way to travel by air the easy and fast way. </p>
            </div>
          </div>
          <div className="flex max-md:flex-col flex-row max-md:items-center items-start gap-[30px]">
            <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center">
              <img src={ICONS.CITY} alt="city" />
            </div>
            <div className="gap-1">
              <h6 className="text-black-232631 font-semibold text-xl max-md:text-center text-left">Best Place to Stay</h6>
              <p className="text-gray-7B7B7B text-base font-normal max-md:text-center text-left">A new way to travel by air the easy and fast way.</p>
            </div>
          </div>
          <div className="flex max-md:flex-col flex-row max-md:items-center items-start gap-[30px]">
            <div className="bg-white rounded-xl w-16 h-16 flex items-center justify-center">
              <img src={ICONS.HAND} alt="hand" />
            </div>
            <div className="gap-1">
              <h6 className="text-black-232631 font-semibold text-xl max-md:text-center text-left">Easy-To-Use</h6>
              <p className="text-gray-7B7B7B text-base font-normal max-md:text-center text-left">A new way to travel by air the easy and fast way.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
