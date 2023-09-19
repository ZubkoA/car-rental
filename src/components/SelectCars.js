// import React, { useEffect, useState } from 'react';
// import { fetchCars } from '../services/EventsApi';
import CarCard from './CarCard';
import Loader from './Loader';

const SelectCars = ({ onCarList, onOpen, setPage, isLoading, cars }) => {
  function handleClick() {
    setPage(prev => prev + 1);
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ul className="grid w-[1184px] grid-cols-4 gap-x-[28px] gap-y-[50px]">
            {cars?.map(car => (
              <CarCard
                car={car}
                key={car.id}
                onCarList={onCarList}
                onOpen={onOpen}
              />
            ))}
          </ul>
          <button
            onClick={handleClick}
            className="mt-[50px] text-base font-medium text-button underline"
          >
            Load more
          </button>
        </>
      )}
    </>
  );
};

export default SelectCars;
