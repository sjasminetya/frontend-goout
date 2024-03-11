import React from 'react';
import Button from '../../elements/Button/Button';
import { ICONS, IMAGES } from '../../../config';

const Discount = () => {
  return (
    <div className="relative w-full h-[435px] rounded-ss-[100px] rounded-se-3xl rounded-es-3xl rounded-ee-3xl mb-[120px] flex flex-col justify-center items-center discount">
      <div className="flex flex-col justify-center items-center">
        <p className="text-blue-3258E8 font-semibold text-base mb-[6px]">New User</p>
        <h1 className="text-black-232631 font-semibold text-4xl mb-3 text-center">
          Dont Miss The 50% Discount
          <br />
          {' '}
          If You Register Today
        </h1>
        <span className="text-black-232631 font-normal text-base text-center">
          Let
          `
          s maximize your next holiday with us
          <br />
          {' '}
          with the best experience.
        </span>
        <Button title="Register Account" className="mt-[30px] bg-blue-3258E8 text-white font-medium text-lg" />
      </div>
      <div className="absolute -top-10 -right-10 w-[100px] h-[100px] rounded-full shadow-[0px_0px_25px_0px_rgba(0,0,0,0.13)] flex justify-center bg-white">
        <img src={ICONS.LOVE} alt="love" width={56} height={56} />
      </div>
      <div className="absolute bg-white -bottom-10 left-10 shadow-[0px_14px_25px_0px_rgba(242,242,242,1)] rounded-3xl w-[250px] p-4">
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((val) => <img src={ICONS.STAR} alt="star" key={val} width={24} height={24} />)}
        </div>
        <h6 className="font-medium text-base text-black-232631">Thank you for helping my vacation. Amazing!</h6>
        <div className="flex items-center mt-[30px] gap-3">
          <img src={IMAGES.PROFILE} alt="profile" width={54} height={54} className="rounded-full" />
          <div>
            <h6 className="text-black font-medium text-base mb-[2px]">Sova Nerds</h6>
            <span className="text-black font-normal text-sm">Backpacker</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
