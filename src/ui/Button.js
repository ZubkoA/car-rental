function Button({ children, type, onClick }) {
  const base =
    'inline-block text-white rounded-xl bg-button font-semibold text-sm tracking-wide  transition-colors duration-300 hover:bg-btnHover focus:bg-btnHover ';

  const styles = {
    big: base + ' px-auto py-3 mt-auto ',
    small: base + ' px-[50px] py-3',
    search: base + 'px-[44px] py-3.5 place-self-end',
  };

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
