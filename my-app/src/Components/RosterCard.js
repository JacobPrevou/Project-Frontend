import React from "react";
import "./RosterCard.css";

function RosterCard({ fighter }) {

  
  return (
    <li className="rosterCard">
      <h4 className="cardHeader" >{fighter.name}</h4>
      <div className="cardBody">
        <p>Height: {fighter.Height}</p>
        <p>Weight: {fighter.Weight}</p>
        <p>Reach: {fighter.Reach}</p>
        <p>Stance: {fighter.Stance}</p>
        <p>Strikes Landed Per Minute: {fighter.StrikesLandedPerMin}</p>
        <p>Strike Accuracy: {fighter.StrikeAccuracy}</p>
        <p>Strikes Absorbed Per Minute: {fighter.StrikesAbsorbedPerMin}</p>
        <p>Strike Defense: {fighter.StrikeDefense}</p>
        <p>Takedown Avg: {fighter.TDAvg}</p>
        <p>Takedown Accuracy: {fighter.TDAcc}</p>
        <p>Takedown Defense: {fighter.TDDef}</p>
        <p>Submission Avg: {fighter.SubAvg}</p>
      </div>
    </li>
  );
}

export default RosterCard;