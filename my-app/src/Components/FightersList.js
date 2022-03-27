import React from "react";
import FighterCard from "./FighterCard";

function FightersList({ fighters }) {


  return (
    <ul className="cards">{fighters.map((fighter) => (
      <FighterCard key={fighter.id} fighter={fighter} />
    ))}</ul>
  );
}

export default FightersList;