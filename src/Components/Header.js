import React from "react";

const Header = ({ toUpperCase }) => {
  const title = "Acme Reservations Planner with React";
  return <h1>{toUpperCase ? title.toUpperCase() : title}</h1>;
};

export default Header;