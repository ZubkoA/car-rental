import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from '../pages/Home';
import Layout from './Layout';
import Advert from '../pages/Advert';
import Favorite from '../pages/Favorite';

import { useLocalStorageState } from 'hook/useLocalStorage';

const App = () => {
  const [favoriteCars, setFavoriteCars] = useLocalStorageState([], 'favorite');
  const [isShowModal, setIsShowModal] = useState(false);
  const [carDetails, setCarDetails] = useState(null);

  function handleSelectCar(car) {
    setCarDetails(car);
  }

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  function handleAddCars(car) {
    setFavoriteCars(favoriteCars => [...favoriteCars, car]);
  }
  console.log(favoriteCars);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="catalog"
          element={
            <Advert
              onAddCars={handleAddCars}
              carDetails={carDetails}
              onClose={closeModal}
              isShowModal={isShowModal}
              onOpen={openModal}
              onCarList={handleSelectCar}
            />
          }
        />
        <Route
          path="favorites"
          element={
            <Favorite
              favoriteCars={favoriteCars}
              carDetails={carDetails}
              onClose={closeModal}
              isShowModal={isShowModal}
              onOpen={openModal}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
