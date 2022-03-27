import React from "react";
import FightersList from "./FightersList";

function FightersPage() {
    const [fighters, setFighters] = useState([]);
  
    function handleAddFighter(newFighter) {
      setFighters([...fighters, newFighter]);
    }
  
    useEffect(() => {
      fetch("http://localhost:3000/fighters")
        .then((r) => r.json())
        .then((fighters) => setFighters(fighters));
    }, []);
  return (
    <header>
        <FightersForm onAddFighter={handleAddFighter} /> 
        <FightersList fighters={fighters} />
    </header>
  );
}

export default FightersPage;