import React from 'react';
import Button from 'ui/Button';

const FavoriteCard = ({ car, onOpen }) => {
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

  function handleClick() {
    onOpen();
  }

  function arrFunction(address) {
    const arrAddress = address.split(',');
    return arrAddress;
  }

  const checkImg = img => `${!img ? `/car.svg` : `${img}`}`;
  return (
    <li className="li">
      <div className="relative">
        <img
          className="h-[268px] flex-shrink-0 rounded-lg"
          src={checkImg(img)}
          alt={`${make} poster`}
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
          id
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

export default FavoriteCard;
