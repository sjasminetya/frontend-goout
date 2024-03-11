import React from 'react';
import { ICONS, IMAGES } from '../../../config';
import Button from '../../elements/Button/Button';

const Explore = () => {
  const card = ({
    image, title, location, price, type,
  }) => {
    return (
      <div className="relative bg-white rounded-3xl shadow-[0px_14px_25px_0px_rgba(242,242,242,1)]">
        <img src={image} alt={title} width="100%" height="100%" className="rounded-3xl" />
        <div className="p-4">
          <h6 className="font-semibold text-lg text-black-232631">{title}</h6>
          <div className="flex items-center gap-1">
            <img src={ICONS.LOCATIONLIGHTGRAY} alt="location" width={10} height={16} />
            <p className="font-normal text-base text-gray-7B7B7B">{location}</p>
          </div>
          <div className="flex justify-between items-center mt-[22px]">
            <p className="text-black-232631 font-semibold text-lg">
              $
              {price}
              <span className="text-gray-7B7B7B font-normal text-base">
                /
                {type === 'person' ? 'person' : 'group'}
              </span>
            </p>
            <Button className="bg-blue-3258E8 text-white font-normal text-base" title="Book" />
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] rounded-[50px] py-1 px-3 gap-[2px] absolute right-5 top-5 flex items-center">
          <img src={ICONS.STAR} alt="star" />
          <p className="font-medium text-white text-base">5.0</p>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-[70px]">
      <h1 className="text-black-232631 font-semibold text-4xl mb-[18px] text-center">Explore Natural Destinations</h1>
      <p className="text-gray-7B7B7B font-normal text-base text-center">
        A new way to travel by air the easy and fast way.
        <br />
        {' '}
        Try it now by filling out the form below!
      </p>
      <div className="grid grid-cols-4 mt-[60px] gap-[30px]">
        {card({
          image: IMAGES.DESTINATION1,
          title: 'Watefall Haven',
          location: 'selajan, Iceland',
          price: 9,
          type: 'person',
        })}
        {card({
          image: IMAGES.DESTINATION2,
          title: 'Greatest Mountain',
          location: 'Wildsee, Italy',
          price: 12,
          type: 'person',
        })}
        {card({
          image: IMAGES.DESTINATION3,
          title: 'Coconut Tree River',
          location: 'Lombok, Indonesia',
          price: 6,
          type: 'person',
        })}
        {card({
          image: IMAGES.DESTINATION4,
          title: 'Circle Beach Play',
          location: 'Lombok, Indonesia',
          price: 5,
          type: 'person',
        })}
        {card({
          image: IMAGES.DESTINATION5,
          title: 'High Ground',
          location: 'Bali, Indonesia',
          price: 49,
          type: 'group',
        })}
        {card({
          image: IMAGES.DESTINATION6,
          title: 'Dinosaur Land',
          location: 'Bali, Indonesia',
          price: 5,
          type: 'person',
        })}
        {card({
          image: IMAGES.DESTINATION7,
          title: 'Turttle Land',
          location: 'Bali, Indonesia',
          price: 5,
          type: 'person',
        })}
        {card({
          image: IMAGES.DESTINATION8,
          title: 'The Cliffside Beach',
          location: 'Bali, Indonesia',
          price: 5,
          type: 'person',
        })}
      </div>
      <div className="flex justify-center">
        <Button title="View More" className="mt-[60px] border-[1.5px] border-gray-7B7B7B text-gray-7B7B7B font-medium text-lg !rounded-[100px]" />
      </div>
    </div>
  );
};

export default Explore;
