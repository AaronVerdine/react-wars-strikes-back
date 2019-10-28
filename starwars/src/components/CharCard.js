import React from "react";

const CharCard = props => {
  return (
    <div className="props">
      <h1>{props.name}</h1>
      <h2>{props.birth_year}</h2>
      <h3>{props.gender}</h3>
      <h4>{props.homeworld}</h4>
    </div>
  );
};

export default CharCard;
