import React from 'react';
import { ICONS, IMAGES } from '../../../config';
import Button from '../../elements/Button/Button';

const Banner = () => {
  return (
    <div className="w-full bg-gray-FAFAFA rounded-3xl max-md:flex max-md:flex-col grid grid-cols-12 gap-[71px] relative max-md:mb-0 mb-[120px]">
      <div className="col-span-5 max-md:pt-5 pt-[104px] max-md:pl-0 pl-[60px]">
        <h1 className="font-bold text-[52px] text-black-232631">Find The Best Place to Stress Release</h1>
        <p className="font-normal text-base text-gray-7B7B7B">
          A new way to travel by air the easy and fast way.
          <br />
          {' '}
          Try it now by filling out the form below!
        </p>
      </div>
      <div className="col-span-7">
        <img src={IMAGES.BANNER1} alt="banner" width="100%" height="100%" className="rounded-3xl object-cover" />
      </div>
      <div className="absolute max-lg:-bottom-20 bottom-0 left-0 right-0">
        <div className="absolute max-md:left-0 left-12 -top-[50px] flex items-center">
          <div className="bg-blue-3258E8 py-3 px-[25px] rounded-ss-xl">
            <h6 className="text-white font-medium text-lg">Flight</h6>
          </div>
          <div className="bg-white py-3 px-[25px] rounded-se-xl">
            <h6 className="text-blue-0046FF font-medium text-lg">Hotel</h6>
          </div>
        </div>
        <div className="max-md:w-full w-[calc(100%-100px)] mx-auto h-auto bg-white rounded-e-xl rounded-es-xl shadow-[0px_25px_54px_0px_rgba(239,239,239,1)] flex max-lg:flex-col flex-row justify-between max-md:items-start items-center gap-[30px] py-7 px-[30px]">
          <div className="flex max-md:flex-col flex-row justify-between max-md:items-start items-center gap-[30px] w-full">
            <div className="flex max-lg:justify-between justify-start items-center w-full">
              <img src={ICONS.LOCATION} alt="location" width={24} height={24} className="mr-4" />
              <div className="mr-5">
                <h6 className="font-medium text-lg text-black-232631">NTB, Lombok</h6>
                <p className="font-normal text-base text-gray-848484">Select the locations</p>
              </div>
              <img src={ICONS.TARGET} alt="target" width={24} height={24} />
            </div>
            <div className="max-md:hidden block border border-gray-EEEEEE h-[51px]" />
            <div className="flex max-lg:justify-between justify-start items-center w-full">
              <img src={ICONS.CALENDER} alt="calender" width={24} height={24} className="mr-4" />
              <div className="mr-5">
                <h6 className="font-medium text-lg text-black-232631">9 Juni 2022</h6>
                <p className="font-normal text-base text-gray-848484">Choose Flight Date</p>
              </div>
              <img src={ICONS.TARGET} alt="target" width={24} height={24} />
            </div>
            <div className="max-md:hidden block border border-gray-EEEEEE h-[51px]" />
            <div className="flex max-lg:justify-between justify-start items-center w-full">
              <img src={ICONS.SEAT} alt="seat" width={24} height={24} className="mr-4" />
              <div className="mr-5">
                <h6 className="font-medium text-lg text-black-232631">Economy</h6>
                <p className="font-normal text-base text-gray-848484">Choose Flight type</p>
              </div>
              <img src={ICONS.TARGET} alt="target" width={24} height={24} />
            </div>
          </div>
          <Button icon={ICONS.SEARCH} className="text-white bg-blue-3258E8 text-left max-lg:w-full max-lg:justify-center" title="Search Flight" variant="icon" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
