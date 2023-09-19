import React, { useState } from 'react';
import Button from '../ui/Button';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const CarCard = ({ car, onCarList, onOpen }) => {
  const [isActive, setIsActive] = useState(false);
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

  function handleClick() {
    onOpen();
  }
  // console.log(isActive);
  return (
    <li className="flex flex-col gap-y-3.5">
      <div className="relative">
        <img
          className="h-[268px] flex-shrink-0 rounded-lg"
          src={checkImg(img)}
          alt={`${make} poster`}
        />

        <IconContext.Provider value={{ color: 'rgba(52, 112, 255, 1)' }}>
          <button
            className="absolute right-[10px] top-[10px]"
            onClick={() => {
              onCarList(id);
              setIsActive(true);
            }}
          >
            <FaHeart />
          </button>
        </IconContext.Provider>
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
      <Button type="big" onClick={handleClick}>
        Learn more
      </Button>
    </li>
  );
};

export default CarCard;
