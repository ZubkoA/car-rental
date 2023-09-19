import { useLocation } from 'react-router-dom';
import SelectCars from '../components/SelectCars';
import { useState } from 'react';
import Modal from '../components/Modal';
import SearchForm from '../components/SearchForm';

const Advert = ({ cars, isLoading, setPage, selectedId, onCarList }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const location = useLocation();

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };
  console.log(cars);

  return (
    <section className="flex  flex-col items-center gap-[50px] px-[128px] py-[150px]">
      <SearchForm cars={cars} />

      <SelectCars
        onCarList={onCarList}
        onOpen={openModal}
        isLoading={isLoading}
        setPage={setPage}
        cars={cars}
      />

      {isShowModal && (
        <Modal
          onClose={closeModal}
          isLoading={isLoading}
          selectedId={selectedId}
        />
      )}
    </section>
  );
};

export default Advert;
