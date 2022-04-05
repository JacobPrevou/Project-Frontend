import React, {useState} from "react";
import RosterCard from "./RosterCard";
import roster from './roster';
import Search from "./Search";






function FightersPage() {
  const [name, setName] = useState('');

    const [foundFighter, setFoundFighter] = useState(roster);

    const filter = (e) => {
      const keyword = e.target.value;
      if (keyword !== '') {
        const results = roster.filter((fighter) => {
          return fighter.name.toLowerCase().includes(keyword.toLowerCase());
        });
        setFoundFighter(results);
      } else {
        setFoundFighter(roster);
      }
  
      setName(keyword);
    };
  
  return (
    <div className="container">
        <Search onChange={filter} value={name}/>
        <div className="box">
            <ul className="cards">
                {foundFighter.map((fighter) => (
                <RosterCard key={fighter.id} fighter={fighter} />
                ))}
            </ul>
        </div>
    </div>
  );
}

export default FightersPage;

