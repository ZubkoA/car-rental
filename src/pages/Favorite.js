import Modal from 'components/Modal';

import FavoriteSelect from 'components/favorite/FavoriteSelect';

const Favorite = ({
  favoriteCars,
  onOpen,
  onClose,
  isShowModal,
  carDetails,
}) => {
  return (
    <section className="section">
      {/* <SearchForm /> */}
      <FavoriteSelect favoriteCars={favoriteCars} onOpen={onOpen} />

      {isShowModal && <Modal onClose={onClose} carDetails={carDetails} />}
    </section>
  );
};

export default Favorite;
