import React from "react";

function FighterCard({ fighter, onUpdateFighter, onDeleteFighter }) {
  
  //PATCH request
  function handleStatChange(e) {
    const fighterData = {
      ...fighter,
      [e.target.name]: e.target.value,
    };
    fetch(`http://localhost:8000/fighters/${fighter.id}`, {
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

  //DELETE request  
  function handleDeleteClick() {
    fetch(`http://localhost:8000/fighters/${fighter.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => onDeleteFighter(fighter));
  }

  return (
    <li className="card">
      <button className="delete" onClick={handleDeleteClick} >X</button> 
      <h4 className="name">{fighter.name}</h4>
      <div className="cardBody">
        <img className="image" src={fighter.image} alt={"fighter name"} />
        <input className="input" type="text" name="record" title="Wins-Losses-Draws" value={fighter.record} onChange={handleStatChange} />
        <p className="record" >Record: {fighter.record}</p>
        <p className="division">{fighter.division}</p>
      </div>  
    </li>
  );
}

export default FighterCard;