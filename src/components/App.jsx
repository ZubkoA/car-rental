import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from '../pages/Home';
import Layout from './Layout';
import Advert from '../pages/Advert';
import Favorite from '../pages/Favorite';
import { useCars } from '../hook/useCars';

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [page, setPage] = useState(1);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const { cars, isLoading, error } = useCars(page);

  function handleSelectCar(id) {
    setSelectedId(selectedId => (id === selectedId ? null : id));
  }
  console.log(selectedId);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="catalog"
          element={
            <Advert
              cars={cars}
              isLoading={isLoading}
              setPage={setPage}
              onCarList={handleSelectCar}
              selectedId={selectedId}
            />
          }
        />
        <Route path="favorites" element={<Favorite cars={cars} />} />
      </Route>
    </Routes>
  );
};

export default App;
