import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import FightersPage from './FightersPage';
import FightersForm from './FightersForm';
import FavoriteFightersList from './FavoriteFightersList';
// import logo from './logo.svg';
import '../App.css';
import './FightersPage.css';
import "./RosterCard.css";
import "./FavoriteFightersList.css"


function App() {
  const [fighters, setFighters] = useState([]);
  
  //POST fighter function
  function handleAddFighter(newFighter) {
    setFighters([...fighters, newFighter]);
  }

  //DELETE fighter function (filter fighters array, update state)
  function handleDeleteFighter(deletedFighter) {
    const updatedFighters = fighters.filter((fighter) => fighter.id !== deletedFighter.id);
    setFighters(updatedFighters);
  }


 //map a new "fighters" array to update a specific fighter's stats/pass; pass to FighterCard where PATCH req. is
  function handleUpdateFighter(updatedFighter) {
    const updateStats = fighters.map((fighter) => {
      if (fighter.id === updatedFighter.id) {
        return updatedFighter;
      } else {
        return fighter;
      }
    });
    setFighters(updateStats);
  }

  //GET request
  useEffect(() => {
    fetch("http://localhost:3000/fighters")
      .then((r) => r.json())
      .then((fighters) => setFighters(fighters));
  }, []);
  

  return (
    <Router>
      <div>
        <nav className="navBox">
          <ul className="navMenu">
            <li className="navMenuItem">
            <Link to="/">Home</Link>
            </li>
            <li className="navMenuItem">
            <Link to="/FightersPage">Fighters Page</Link>
            </li>
            <li className="navMenuItem">
            <Link to="/FavoriteFightersList">Favorite Fighters List</Link>
            </li>
            <li className="navMenuItem">
            <Link to="/FightersForm">Add Fighter Form</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>

          <Route path="/FightersPage" element={<FightersPage/>}>
          </Route>

          <Route path="/FavoriteFightersList" 
          element={<FavoriteFightersList 
          fighters={fighters} 
          onUpdateFighter={handleUpdateFighter} 
          onDeleteFighter={handleDeleteFighter} />}>
          </Route>

          <Route path="/FightersForm" element={<FightersForm onAddFighter={handleAddFighter}/>}>
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

