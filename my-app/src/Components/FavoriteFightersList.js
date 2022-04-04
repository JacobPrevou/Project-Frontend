import React from "react";
import FighterCard from "./FighterCard";

function FavoriteFightersList({ fighters, onUpdateFighter, onDeleteFighter }) {


  return (
    <div className="ffbox">
      <ul className="ffcards">{fighters.map((fighter) => (
        <FighterCard key={fighter.id} fighter={fighter} onUpdateFighter={onUpdateFighter} onDeleteFighter={onDeleteFighter} />
      ))}
      </ul>
    </div>
  );
}

export default FavoriteFightersList;