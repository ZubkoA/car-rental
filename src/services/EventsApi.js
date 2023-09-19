import axios from 'axios';

axios.defaults.baseURL = 'https://6486d0e5beba6297278f381f.mockapi.io';

export async function fetchCars(page) {
  const { data } = await axios('/adverts', { params: { page, limit: 8 } });

  return data;
}
export async function findCar(id) {
  const { data } = await axios(`/adverts/9587`);
  console.log(data);

  return data;
}
