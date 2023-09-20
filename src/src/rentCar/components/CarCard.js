import React from 'react';
import Button from '../ui/Button';

const CarCard = ({ car }) => {
  const {
    make,
    img,
    model,
    rentalPrice,
    year,
    address,
    rentalCompany,
    type,
    id,
    accessories,
  } = car;

  const arrAddress = address.split(',');
  // console.log(arrAddress);
  const checkImg = (img) => `${!img ? `/car.svg` : `${img}`}`;
  return (
    <li className="flex flex-col gap-y-3.5">
      <div className="">
        <img
          className="h-[268px] flex-shrink-0 rounded-lg"
          src={checkImg(img)}
          alt={make}
        />
      </div>
      <div className="flex flex-row justify-between text-base font-medium">
        <div className="flex flex-row space-x-1 ">
          <h3>{make}</h3>
          <p className="text-btnHover">{model},</p>
          <p>{year}</p>
        </div>
        <p>{rentalPrice}</p>
      </div>
      <div className="inline text-input">
        <p className="inline">
          {arrAddress[1]}
          <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>
        </p>
        <p className="inline">
          {arrAddress[2]}{' '}
          <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>{' '}
        </p>
        <p className="inline">
          {rentalCompany}{' '}
          <span className="span left-0 top-0 ml-1.5  mr-1.5 border-l border-t"></span>
        </p>
        <p className="inline">
          {type}{' '}
          <span className="span left-0 top-0 ml-1.5  mr-1.5 border-l border-t"></span>
        </p>
        <p className="inline">
          {model}{' '}
          <span className="span left-0 top-0 ml-1.5 mr-1.5 border-l border-t"></span>
        </p>
        <p className="inline">
          {id}{' '}
          <span className="span left-0 top-0 ml-1.5  mr-1.5 border-l border-t"></span>
        </p>
        <p className="inline">{accessories[0]}</p>
      </div>
      <Button type="big">Learn more</Button>
    </li>
  );
};

export default CarCard;
