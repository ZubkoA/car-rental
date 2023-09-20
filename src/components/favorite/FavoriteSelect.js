import FavoriteCard from './FavoriteCard';

const FavoriteSelect = ({ favoriteCars, onOpen }) => {
  return (
    <ul className="ul">
      {favoriteCars?.map(car => (
        <FavoriteCard car={car} key={car.fid} onOpen={onOpen} />
      ))}
    </ul>
  );
};

export default FavoriteSelect;
