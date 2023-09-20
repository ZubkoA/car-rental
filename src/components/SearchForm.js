import React, { useState } from 'react';
import Button from '../ui/Button';

const SearchForm = ({ cars }) => {
  const [price, setPrice] = useState(10);
  // const arrCars = cars.map((car) => car.mileage).sort();
  console.log(price);
  // console.log(make);
  return (
    <form className="flex flex-row gap-[18px] font-medium">
      <div className="flex flex-col">
        <label
          htmlFor="make"
          className="mb-2 text-sm  leading-[18px] text-second"
        >
          Car brand
        </label>
        <select name="make" className="rounded-[14px] bg-bgForm px-5 py-3.5">
          {cars.map(car => (
            <option
              className="text-base text-input"
              value={car.make}
              key={car.id}
            >
              {car.make}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="rentalPrice
"
          className="mb-2 text-sm font-medium leading-[18px] text-second"
        >
          Price/ 1 hour
        </label>
        <select
          name="rentalPrice"
          className="rounded-[14px] bg-bgForm px-5 py-3.5"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i * 10).map(num => (
            <option
              className="text-base text-input"
              value={num}
              key={num}
            ></option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="brand"
          className="mb-2 text-sm font-medium leading-[18px] text-second"
        >
          Сar mileage / km
        </label>
        <div>
          <select
            name="mileage"
            className="rounded-l-[14px] bg-bgForm px-5 py-3.5"
          >
            {cars.map(car => (
              <option
                className="text-base text-input"
                value={car.mileage}
                key={car.id}
              >
                {car.mileage}
              </option>
            ))}
          </select>
          <select className="rounded-r-[14px] bg-bgForm px-5 py-3.5">
            {cars.map(car => (
              <option
                className="text-base text-input"
                value={car.mileage}
                key={car.id}
              >
                {car.mileage}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button type="search">Search</Button>
    </form>
  );
};

export default SearchForm;
