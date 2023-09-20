import Modal from 'components/Modal';

import FavoriteSelect from 'components/FavoriteSelect';
import FavoriteSearchForm from 'components/FavoriteSearchForm';

const Favorite = ({
  favoriteCars,
  onOpen,
  onClose,
  isShowModal,
  carDetails,
}) => {
  return (
    <section className="section">
      <FavoriteSearchForm favoriteCars={favoriteCars} />
      <FavoriteSelect favoriteCars={favoriteCars} onOpen={onOpen} />

      {isShowModal && <Modal onClose={onClose} carDetails={carDetails} />}
    </section>
  );
};

export default Favorite;
