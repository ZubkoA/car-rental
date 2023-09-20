import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Button from '../ui/Button';
import Loader from './Loader';

const Modal = ({ onClose, carDetails, isLoading }) => {
  const {
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
  } = carDetails;
  useEffect(() => {
    const handleESC = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleESC);
    return () => {
      document.removeEventListener('keydown', handleESC);
    };
  }, [onClose]);

  function arrFunction(address) {
    const arrAddress = address.split(',');
    return arrAddress;
  }

  function arrConditions(rentalConditions) {
    const arrConditions = rentalConditions.split('\n');
    return arrConditions;
  }
  const arrAge = arrConditions(rentalConditions)[0].split(':');

  const checkImg = img => `${!img ? `/car.svg` : `${img}`}`;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="absolute z-50 box-border rounded-3xl bg-white p-10 text-sm font-normal leading-5">
          <div
            className="relative flex w-[461px] cursor-pointer flex-col gap-[24px]"
            onClick={onClose}
          >
            <IconContext.Provider value={{ size: '24px' }}>
              <div className="absolute right-[-25px] top-[-25px]">
                <AiOutlineClose />
              </div>
            </IconContext.Provider>
            <div>
              <img
                className="flex-shrink-0 rounded-[14px] object-cover"
                src={checkImg(img)}
                alt={make}
              />
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="flex flex-row space-x-1 text-lg font-medium">
                <h3>{make}</h3>
                <p className="text-btnHover">{model},</p>
                <p>{year}</p>
              </div>
              <div className="inline text-xs leading-[18px] text-input">
                <p className="inline">
                  {arrFunction(address)[1]}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>
                </p>
                <p className="inline">
                  {arrFunction(address)[2]}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>{' '}
                </p>
                <p className="inline">
                  Id: {id}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>{' '}
                </p>
                <p className="inline">
                  Year: {year}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>{' '}
                </p>
                <p className="inline">
                  Type: {type}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>{' '}
                </p>
                <p className="inline">
                  Fuel Consumption: {fuelConsumption}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>{' '}
                </p>
                <p className="inline">
                  Engine Size: {engineSize}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>{' '}
                </p>
              </div>

              <p>{description}</p>
            </div>

            <div>
              <h3 className="mb-2">Accessories and functionalities:</h3>
              <div className="inline text-xs leading-[18px] text-input">
                <p className="inline">
                  {functionalities[0]}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>
                </p>
                <p className="inline">
                  {functionalities[1]}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>
                </p>
                <p className="inline">
                  {functionalities[2]}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>
                </p>
                <p className="inline">
                  {accessories[0]}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>{' '}
                </p>
                <p className="inline">
                  {accessories[1]}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>{' '}
                </p>
                <p className="inline">
                  {accessories[2]}
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>{' '}
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-2">Rental Conditions: </h3>
              <ul className="flex flex-wrap gap-2">
                <li className="inline rounded-[35px] bg-bg px-[14px] py-[7px]">
                  {arrAge[0]}
                  <span className="text-btnHover">{arrAge[1]}</span>
                </li>
                <li className="inline rounded-[35px] bg-bg px-[14px] py-[7px]">
                  {arrConditions(rentalConditions)[1]}
                </li>
                <li className="inline rounded-[35px] bg-bg px-[14px] py-[7px]">
                  {arrConditions(rentalConditions)[2]}
                </li>
                <li className="inline rounded-[35px] bg-bg px-[14px] py-[7px]">
                  Mileage: <span className="text-btnHover">{mileage}</span>
                </li>
                <li className="inline rounded-[35px] bg-bg px-[14px] py-[7px]">
                  Price: <span className="text-btnHover">{rentalPrice}</span>
                </li>
              </ul>
            </div>
            <div className="self-start">
              <Button type="small">Rental car</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
