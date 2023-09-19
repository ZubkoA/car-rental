import React from "react";

const CompanyName = ({ type }) => {
  const base = " tracking-widest";
  const styles = {
    small: base + " text-3xl font-semibold",
    big: base + " text-6xl font-bold",
  };
  return (
    <h1 className={styles[type]}>
      Rent<span className="text-btnHover">avto</span>
    </h1>
  );
};

export default CompanyName;
