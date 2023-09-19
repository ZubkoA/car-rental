import { useLocation } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

const Favorite = ({ cars }) => {
  const location = useLocation();

  return (
    <section className="flex  flex-col items-center gap-[50px] px-[128px] py-[150px]">
      <SearchForm cars={cars} />
    </section>
  );
};

export default Favorite;
