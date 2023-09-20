import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Button from '../ui/Button';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export const CarCard = ({ car, onCarList, onOpen, onAddCars }) => {
  const fid = nanoid();
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
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
    mileage,
  } = car;

  function arrFunction(address) {
    const arrAddress = address.split(',');
    return arrAddress;
  }
  const checkImg = img => `${!img ? `/car.svg` : `${img}`}`;

  function handleClick() {
    const carDetails = {
      make,
      img,
      model,
      rentalPrice,
      year,
      address,
      mileage,
      type,
      id,
      accessories,
      fuelConsumption,
      engineSize,
      description,
      functionalities,
      rentalConditions,
    };
    onOpen();
    onCarList(carDetails);
  }

  function handleAdd() {
    const newCar = {
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
    };

    setIsActive(true);
    onAddCars({ fid, ...newCar });
  }

  return (
    <li className="li">
      <div className="relative">
        <img
          className="h-[268px] flex-shrink-0 rounded-lg"
          src={checkImg(img)}
          alt={`${make} poster`}
        />

        <IconContext.Provider
          value={{ color: isActive ? 'rgba(52, 112, 255, 1)' : '#fff' }}
        >
          <button
            className="absolute right-[10px] top-[10px]"
            onClick={handleAdd}
          >
            {isActive ? <FaHeart /> : <FaRegHeart />}
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
          {arrFunction(address)[1]}
          <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>
        </p>
        <p className="inline">
          {arrFunction(address)[2]}
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
        <a href="tel:+380502114545">Learn more</a>
      </Button>
    </li>
  );
};
