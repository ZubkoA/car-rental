import { useState, useEffect } from 'react';

export function useCars(page) {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCars() {
        try {
          setIsLoading(true);
          setError('');
          setCars([]);

          const res = await fetch(
            `https://6486d0e5beba6297278f381f.mockapi.io/adverts?page=${page}&limit=8`,
          );

          if (!res.ok)
            throw new Error('Something went wrong with fetching cars');

          const data = await res.json();
          if (data.Response === 'False') throw new Error('Car not found');

          setCars(data);
          setError('');
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }

      fetchCars();

      return function () {
        controller.abort();
      };
    },
    [page],
  );

  return { cars, isLoading, error };
}
