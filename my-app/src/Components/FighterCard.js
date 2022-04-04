import React from "react";

function FighterCard({ fighter, onUpdateFighter, onDeleteFighter }) {
  const { id, image, name, record, division } = fighter;


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

  //DELETE request  /////////////////////////////////////////////
  function handleDeleteClick() {
    fetch(`http://localhost:3000/fighters/${fighter.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => onDeleteFighter(fighter));
  }
  ///////////////////////////////////////////////////////////////
  return (
    <li className="card">
      <button className="delete" onClick={handleDeleteClick} >Delete Fighter</button> 
      <img className="image" src={image} alt={"fighter name"} />
      <div className="box">
        <h4 className="name">{name}</h4>
        <input type="text" name="record" placeholder="Wins-Losses-Draws"  value={fighter.record} onChange={handleStatChange} />
        <p className="record" >{record}</p>
        <p className="division">{
        division}</p>
      </div>  
    </li>
  );
}

export default FighterCard;