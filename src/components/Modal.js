import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { findCar } from '../services/EventsApi';
import Button from '../ui/Button';
import Loader from './Loader';

const Modal = ({ onClose, selectedId, isLoading }) => {
  useEffect(() => {
    const handleESC = (e) => {
      console.log('esc');
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleESC);
    return () => {
      document.removeEventListener('keydown', handleESC);
    };
  }, [onClose]);

  useEffect(() => {
    findCar(selectedId).then((data) => {
      console.log(data);
    });
  }, [selectedId]);

  const checkImg = (img) => `${!img ? `/car.svg` : `${img}`}`;

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
              <div className="absolute right-[10px] top-[10px]">
                <AiOutlineClose />
              </div>
            </IconContext.Provider>
            <div>
              <img
                className="h-[248px] flex-shrink-0 rounded-[14px]"
                // src={checkImg(img)}
                src="/car.svg"
                alt="car"
                // alt={`${make} poster`}
              />
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="flex flex-row space-x-1 text-lg font-medium">
                <h3>make</h3>
                <p className="text-btnHover">model,</p>
                <p>year</p>
              </div>
              <div className="inline text-xs leading-[18px] text-input">
                <p className="inline">
                  arrAddress
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>
                </p>
                <p className="inline">
                  arrAddress 2
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>{' '}
                </p>
              </div>

              <p>
                The Buick Enclave is a stylish and spacious SUV known for its
                comfortable ride and luxurious features.
              </p>
            </div>

            <div>
              <h3 className="mb-2">Accessories and functionalities:</h3>
              <div className="inline text-xs leading-[18px] text-input">
                <p className="inline">
                  Leather seats
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>
                </p>
                <p className="inline">
                  Panoramic sunroof Power liftgate
                  <span className="span left-0 top-0  ml-1.5 mr-1.5 border-l border-t"></span>{' '}
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-2">Rental Conditions: </h3>
              <ul className="flex flex-wrap gap-2">
                <li className="inline rounded-[35px] bg-bg px-[14px] py-[7px]">
                  Minimum age : 25
                </li>
                <li className="inline rounded-[35px] bg-bg px-[14px] py-[7px]">
                  Valid driver’s license
                </li>
                <li className="inline rounded-[35px] bg-bg px-[14px] py-[7px]">
                  Security deposite required
                </li>
                <li className="inline rounded-[35px] bg-bg px-[14px] py-[7px]">
                  Mileage: 5,858
                </li>
                <li className="inline rounded-[35px] bg-bg px-[14px] py-[7px]">
                  Price: 40$
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
