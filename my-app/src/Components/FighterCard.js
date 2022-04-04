import React from "react";

function FighterCard({ fighter, onUpdateFighter }) {
  const { id, image, name, record, division } = fighter;


  // function handleUpdateFighter(updatedFighter) {
  //   const updatedStats = fighter.map((fighter) => {
  //     if (fighter.record === updatedFighter.record) {
  //       return updatedStats;
  //     } else {
  //       return fighter;
  //     }
  //   });
  //   console.log(updatedStats);
  // }

  //PATCH request //////////////////////////////////////////////
  function handleStatChange(e) {
    const fighterData = {
      record: e.target.value,
    };
    fetch(`http://localhost:3000/fighters/${fighter.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        fighterData
      ),
    })
      .then((r) => r.json())
      .then((updatedStat) => onUpdateFighter(updatedStat));
  }
 /////////////////////////////////////////////////////////////////
  return (
    <li className="card">
      <img className="image" src={fighter.image} alt={"fighter name"} />
      <div className="box">
        <h4 className="name">{fighter.name}</h4>
        <input type="text" name="record" placeholder="Wins-Losses-Draws"  value={fighter.record} onChange={handleStatChange} />
        <p className="record" >{record}</p>
        <p className="division">{fighter.division}</p>
      </div>  
    </li>
  );
}

export default FighterCard;