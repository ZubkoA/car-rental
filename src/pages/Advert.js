import SelectCars from '../components/SelectCars';
import { useState } from 'react';
import Modal from '../components/Modal';
import SearchForm from '../components/SearchForm';
import { useCars } from '../hook/useCars';

const Advert = ({
  onAddCars,
  selectedId,
  onClose,
  isShowModal,
  onOpen,
  onCarList,
}) => {
  const [page, setPage] = useState(1);
  const { cars, isLoading } = useCars(page);

  return (
    <section className="flex  flex-col items-center gap-[50px] px-[128px] py-[150px]">
      <SearchForm cars={cars} />

      <SelectCars
        onCarList={onCarList}
        onOpen={onOpen}
        isLoading={isLoading}
        setPage={setPage}
        cars={cars}
        onAddCars={onAddCars}
      />

      {isShowModal && (
        <Modal
          onClose={onClose}
          isLoading={isLoading}
          selectedId={selectedId}
        />
      )}
    </section>
  );
};

export default Advert;
