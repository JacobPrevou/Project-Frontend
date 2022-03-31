import React from "react";

function RosterCard({ fighter }) {

  
  return (
    <li className="rosterCard">
      <h4>Name: {fighter.name}</h4>
      <p>Height: {fighter.Height}</p>
      <p>Weight: {fighter.Weight}</p>
      <p>Reach: {fighter.Reach}</p>
      <p>Stance: {fighter.Stance}</p>
      <p>Strikes Landed Per Minute: {fighter.StrikesLandedPerMin}</p>
      <p>Strike Accuracy: {fighter.StrikeAccuracy}</p>
      <p>Strikes Absorbed Per Minute{fighter.StrikesAbsorbedPerMin}</p>
      <p>Strike Defense: {fighter.StrikeDefense}</p>
      <p>Takedown Avg: {fighter.TDAvg}</p>
      <p>Takedown Accuracy: {fighter.TDAcc}</p>
      <p>Takedown Defense: {fighter.TDDef}</p>
      <p>Submission Avg: {fighter.SubAvg}</p>
    </li>
  );
}

export default RosterCard;