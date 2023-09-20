import FavoriteCard from './FavoriteCard';

const FavoriteSelect = ({ favoriteCars, onOpen }) => {
  return (
    <ul className="grid w-[1184px] grid-cols-4 gap-x-[28px] gap-y-[50px]">
      {favoriteCars?.map(car => (
        <FavoriteCard car={car} key={car.fid} onOpen={onOpen} />
      ))}
    </ul>
  );
};

export default FavoriteSelect;
