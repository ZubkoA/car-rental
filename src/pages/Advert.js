import SelectCars from '../components/SelectCars';
import { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import SearchForm from '../components/SearchForm';

import { fetchCars } from 'services/EventsApi';

const Advert = ({
  onAddCars,
  carDetails,
  onClose,
  isShowModal,
  onOpen,
  onCarList,
}) => {
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCars(page)
      .then(data => {
        setCars(prev => [...prev, ...data]);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  return (
    <section className="section">
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
          carDetails={carDetails}
        />
      )}
    </section>
  );
};

export default Advert;
