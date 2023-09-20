import { CarCard } from './CarCard';
import Loader from './Loader';

const SelectCars = ({
  onCarList,
  onOpen,
  setPage,
  isLoading,
  cars,
  onAddCars,
}) => {
  function handleClick() {
    setPage(prev => prev + 1);
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ul className="ul">
            {cars?.map(car => (
              <CarCard
                car={car}
                key={car.id}
                onCarList={onCarList}
                onOpen={onOpen}
                onAddCars={onAddCars}
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
