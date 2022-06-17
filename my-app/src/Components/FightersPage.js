import React, {useState, useEffect} from "react";
import RosterCard from "./RosterCard";
import Search from "./Search";

function FightersPage() {
  const [name, setName] = useState('');
  const [athletes, setAthletes] = useState([])
  const [foundFighters, setFoundFighters] = useState([...athletes]);

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = athletes.filter((athlete) => {
        return athlete.name.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundFighters(results);
    } else {
      setFoundFighters(athletes);
    }
    setName(keyword);
  };
  
  const reset = () => {
    setName('');
    setFoundFighters(athletes);
  }
  
  //GET request
  useEffect(() => {
    fetch("http://localhost:8000/roster")
      .then((r) => r.json())
      .then((athletes) => setAthletes(athletes));
  }, []);

  return (
    <div className="container">
        <Search onChange={filter} value={name} onClick={reset}/>
        <div className="box">
            <ul className="cards">
                {foundFighters.map((foundFighter) => (
                <RosterCard key={foundFighter.id} athlete={foundFighter} />
                ))}
            </ul>
        </div>
    </div>
  );
}

export default FightersPage;

