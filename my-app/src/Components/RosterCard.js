import React from "react";
import "./RosterCard.css";

function RosterCard({ athlete }) {


  return (
    <li className="rosterCard">
      <h4 className="cardHeader" >{athlete.name}</h4>
      <div className="cardBody">
        <p>Height: {athlete.Height}</p>
        <p>Weight: {athlete.Weight}</p>
        <p>Reach: {athlete.Reach}</p>
        <p>Stance: {athlete.Stance}</p>
        <p>Strikes Landed Per Minute: {athlete.StrikesLandedPerMin}</p>
        <p>Strike Accuracy: {athlete.StrikeAccuracy}</p>
        <p>Strikes Absorbed Per Minute: {athlete.StrikesAbsorbedPerMin}</p>
        <p>Strike Defense: {athlete.StrikeDefense}</p>
        <p>Takedown Avg: {athlete.TDAvg}</p>
        <p>Takedown Accuracy: {athlete.TDAcc}</p>
        <p>Takedown Defense: {athlete.TDDef}</p>
        <p>Submission Avg: {athlete.SubAvg}</p>
      </div>
    </li>
  );
}

export default RosterCard;