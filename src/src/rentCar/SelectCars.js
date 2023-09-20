import React, { useEffect, useState } from "react";
import { fetchCars } from "./services/EventsApi";
import CarCard from "./components/CarCard";

const SelectCars = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCars(page).then((data) => {
      setCars((prev) => [...prev, ...data]);
    });
  }, [page]);

  console.log(cars);
  console.log(page);

  function handleClick() {
    setPage((prev) => prev + 1);
  }
  return (
    <>
      <ul className="grid w-[1184px] grid-cols-4 gap-x-[28px] gap-y-[50px]">
        {cars?.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </ul>
      <button onClick={handleClick}>Load more</button>
    </>
  );
};

export default SelectCars;
