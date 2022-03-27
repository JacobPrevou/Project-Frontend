import React from "react";

function FighterCard({ fighter }) {

  
  return (
    <li className="card">
      <img src={fighter.image} alt={"fighter name"} />
      <h4>{fighter.name}</h4>
      <p>{fighter.record}</p>
      <p>{fighter.division}</p>
    </li>
  );
}

export default FighterCard;