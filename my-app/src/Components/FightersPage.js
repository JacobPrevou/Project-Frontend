import React from "react";
import FightersList from "./FightersList";

function FightersPage({ fighters}) {
  return (
    <header>
        
        <FightersList fighters={fighters} />
    </header>
  );
}

export default FightersPage;