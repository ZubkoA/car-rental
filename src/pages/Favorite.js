import nextId from 'react-id-generator';
import Modal from 'components/Modal';
import SearchForm from '../components/SearchForm';
import FavoriteSelect from 'components/favorite/FavoriteSelect';

const Favorite = ({
  favoriteCars,
  onOpen,
  onClose,
  isShowModal,
  selectedId,
}) => {
  return (
    <section className="flex  flex-col items-center gap-[50px] px-[128px] py-[150px]">
      {/* <SearchForm /> */}
      <FavoriteSelect favoriteCars={favoriteCars} onOpen={onOpen} />

      {isShowModal && <Modal onClose={onClose} selectedId={selectedId} />}
    </section>
  );
};

export default Favorite;
